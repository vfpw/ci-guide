package edge.capabilities.claim.fnol
uses edge.jsonrpc.IRpcHandler
uses edge.di.annotations.InjectableNode
uses edge.jsonrpc.annotation.JsonRpcMethod
uses edge.security.EffectiveUserProvider
uses edge.security.authorization.AuthorityType
uses java.lang.IllegalArgumentException
uses edge.capabilities.claim.fnol.policy.IPolicySearchPlugin
uses edge.PlatformSupport.Bundle
uses edge.capabilities.claim.local.IClaimRetrievalPlugin
uses java.lang.IllegalStateException
uses edge.exception.DtoValidationException
uses gw.plugin.Plugins
uses gw.plugin.claimnumbergen.IClaimNumGenAdapter
uses edge.capabilities.claim.fnol.dto.FnolDTO
uses edge.capabilities.claim.fnol.local.IFnolPlugin
uses edge.aspects.validation.annotations.Context
uses edge.el.Expr
uses edge.PlatformSupport.Bundle

/**
 * First Notice of Loss handler.
 */
class FnolHandler implements IRpcHandler {

  private var _policySearchPlugin : IPolicySearchPlugin
  private var _claimPlugin : IClaimRetrievalPlugin
  private var _fnolPlugin : IFnolPlugin
  private var _userProvider : EffectiveUserProvider as readonly UserProvider

  @InjectableNode
  @Param("policySearchPlugin", "Plugin used for policy search")
  @Param("fnolPlugin", "First notice of loss plugin")
  @Param("claimPlugin", "Plugin used to access created claims")
  construct(policySearchPlugin : IPolicySearchPlugin, fnolPlugin : IFnolPlugin, claimPlugin : IClaimRetrievalPlugin, aUserProvider:EffectiveUserProvider) {
    this._policySearchPlugin = policySearchPlugin
    this._fnolPlugin = fnolPlugin
    this._claimPlugin = claimPlugin
    this._userProvider = aUserProvider
  }

  /**
   * Creates a new claim against a given policy.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IPolicySearchPlugin#getPolicy(String, Date)</code> - to retrieve the policy details.</dd>
   *  <dd><code>IFnolPlugin#createClaim(Policy, FnolDTO)</code> - to create the new claim.</dd>
   *  <dd><code>IFnolPlugin#toDTO(Claim)</code> - to convert the claim object to a DTO.</dd>
   * </dl>
   *
   * @param   policyNumber  A string Policy Number to create the new claim against
   * @param   claimDTO      Initial details of the claim
   * @returns the newly created claim
   */
  @JsonRpcMethod
  public function createClaim(policyNumber:String, claimDto : FnolDTO) : FnolDTO {
    final var effectivePolicyNumber = policyNumber != null  ? policyNumber : lookupExplicitPolicy()
    final var policy = _policySearchPlugin.getPolicy(effectivePolicyNumber, claimDto.LossDate)

    final var claim = Bundle.resolveInTransaction(\ b ->
      _fnolPlugin.createClaim(policy, claimDto))

    return _fnolPlugin.toDTO(claim)
  }


  /**
   * Saves updates to an existing claim.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the current claim details.</dd>
   *  <dd><code>IPolicySearchPlugin#getPolicy(String, Date)</code> - to retrieve the policy details.</dd>
   *  <dd><code>IFnolPlugin#updateClaim(Claim, FnolDTO)</code> - to update the claim details.</dd>
   *  <dd><code>IFnolPlugin#moveToNewPolicy(Claim, Policy, FnolDTO)</code> - to move the claim to a new policy.</dd>
   *  <dd><code>IFnolPlugin#toDTO(Claim)</code> - to convert the claim object to a DTO.</dd>
   *
   * @param   claimDTO  Details of the claim that is to be saved
   * @returns the saved claim
   */
  @JsonRpcMethod
  public function saveClaim(claimDto : FnolDTO) : FnolDTO{
    var claim = _claimPlugin.getClaimByNumber(claimDto.ClaimNumber)
    if ( claim.State != ClaimState.TC_DRAFT ) {
      throw new IllegalStateException("Submitted claims can't be modified")
    }

    if (claim.Policy.PolicyNumber == claimDto.Policy.PolicyNumber) {
      Bundle.transaction( \ bundle ->{
        claim = bundle.add(claim)
        _fnolPlugin.updateClaim(claim, claimDto)
      })
    } else {
      final var newPolicy = _policySearchPlugin.getPolicy(claimDto.Policy.PolicyNumber, claimDto.LossDate)
      Bundle.transaction( \ bundle ->{
        claim = bundle.add(claim)
        _fnolPlugin.moveToNewPolicy(claim, newPolicy, claimDto)
      })
    }

    return _fnolPlugin.toDTO(claim)
  }


  /**
   * Retrieves details for an existing claim by claim number.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim details.</dd>
   *  <dd><code>IFnolPlugin#toDTO(Claim)</code> - to convert the claim object to a DTO.</dd>
   * </dl>
   *
   * @param   claimNumber  The unique identifier for the claim that is to be retrieved
   * @returns details for the specified claim
   */
  @JsonRpcMethod
  public function getClaim(claimNumber : String) : FnolDTO {
    final var claim = _claimPlugin.getClaimByNumber(claimNumber)
    return _fnolPlugin.toDTO(claim)
  }


  /**
   * Submits a claim.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim details.</dd>
   *  <dd><code>IFnolPlugin#updateClaim(Claim, FnolDTO)</code> - to update the claim details.</dd>
   *  <dd><code>IFnolPlugin#toDTO(Claim)</code> - to convert the claim object to a DTO.</dd>
   * </dl>
   *
   * @param   claimDTO  Details for the claim to be submitted
   * @returns the claim details following the submission
   */
  @JsonRpcMethod
  @Context("SubmittingClaim", Expr.const(true))
  public function submitClaim(claimDTO : FnolDTO) : FnolDTO {
    var claim = _claimPlugin.getClaimByNumber(claimDTO.ClaimNumber)
    Bundle.transaction( \ bundle ->{
      claim = bundle.add(claim)
      _fnolPlugin.updateClaim(claim, claimDTO)

      if ( claim.maincontact == null ) {
        throw new DtoValidationException()
      }

      // Submit the claim
      claim.saveAndSetup(claim.SuggestedAssignees.first(), null)
      claim.ClaimNumber = Plugins.get(IClaimNumGenAdapter).generateNewClaimNumber(null)
    })

    return _fnolPlugin.toDTO(claim)
  }



  /**
   * Lookups an explicit policy to use for the given user.
   */
  protected function lookupExplicitPolicy() : String {
    var user = UserProvider.EffectiveUser
    final var policies = user.getTargets(AuthorityType.POLICY)
    if (policies.size() != 1) {
      throw new IllegalArgumentException("Cannot find implicit fnol policy for the user " + user.Username)
    }
    return policies.first()
  }

}
