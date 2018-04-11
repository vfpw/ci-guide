package edge.capabilities.claim.local

uses edge.di.annotations.ForAllGwNodes
uses edge.security.authorization.AuthorityType
uses gw.api.database.Query
uses java.util.Set
uses edge.capabilities.claim.lob.ISupportedLobsPlugin
uses gw.api.util.Logger
uses java.lang.IllegalArgumentException
uses edge.security.authorization.Authorizer
uses edge.security.EffectiveUserProvider
uses edge.capabilities.claim.dto.ClaimSearchDTO
uses gw.api.database.IQuery

/**
 * Default implementation of claim retrieval plugin.
 */
class DefaultClaimRetrievalPlugin implements IClaimRetrievalPlugin {

  private static final var LOGGER = Logger.forCategory(DefaultClaimRetrievalPlugin.Type.QName)


  private var _supportedLobsPlugin : ISupportedLobsPlugin

  private var _claimAuthorizer : Authorizer<Claim>

  private var _userProvider : EffectiveUserProvider as readonly UserProvider

  @ForAllGwNodes
  @Param("supporrtedLobsPlugin", "Plugin used to determine available lines of business")
  @Param("claimAuthorizer", "Plugin used to determine claim access rules")
  construct(supportedLobsPlugin : ISupportedLobsPlugin, claimAuthorizer : Authorizer<Claim>, aUserProvider:EffectiveUserProvider) {
    this._supportedLobsPlugin = supportedLobsPlugin
    this._claimAuthorizer = claimAuthorizer
    this._userProvider = aUserProvider
  }



  override function searchClaims(req : ClaimSearchDTO) : Claim[] {
    var user = UserProvider.EffectiveUser
    final var query = makeClaimQuery(req)
    if (query == null) {
      return new Claim[0]
    }

    LOGGER.debug("Final query is " + toString())

    final var claims = query.select().toTypedArray()
    final var result = _claimAuthorizer.access(claims)

    if (result.length != claims.length) {
      LOGGER.warn("Found mismatch between claim authorization restriction and claim query. Query claim count = " +
          claims.length + " accessible policies " +
          result.length + " for user " +
          user + " with authorities " + user.GrantedAuthorities)
    }

    return claims
  }


  override function getClaimByNumber(number : String) : Claim {
    if(number == null || number.Empty){
      throw new IllegalArgumentException("Claim number is null or empty")
    }

    final var claim = Claim.finder.findClaimByClaimNumber(number)
    return _claimAuthorizer.access(claim)
  }



  /**
   * Creates a claim query. Returns null if query is effectively "empty" 
   * (user have no authorities to access any claims). This implementation delegates to
   * make[Policy|Producer|Vendor]Query to get query for the specific authority target. 
   * Returned result is union of all results retrieved for the specific authority roles.
   */
  protected function makeClaimQuery(req : ClaimSearchDTO) : IQuery<Claim> {
    var res : IQuery<Claim> = null
    var user = UserProvider.EffectiveUser

    final var policyAuths = user.getTargets(AuthorityType.POLICY)
    if (!policyAuths.Empty) {
      res = union(res, makePolicyQuery(policyAuths, req))
    }

    final var producerAuths = user.getTargets(AuthorityType.PRODUCER)
    if (!producerAuths.Empty) {
      res = union(res, makeProducerQuery(producerAuths, req))
    }

    final var vendorAuths = user.getTargets(AuthorityType.VENDOR)
    if (!vendorAuths.Empty) {
      res = union(res, makeVendorQuery(vendorAuths, req))
    }

    final var accountAuths = user.getTargets(AuthorityType.ACCOUNT)
    if (!accountAuths.Empty) {
      res = union(res, makeAccountQuery(accountAuths,req))
    }

    if(res == null) {
      LOGGER.debug("Query is null as no authorities found")
    } else {
      LOGGER.debug(res.toString())
    }


    return res
  }


  protected function makeAccountQuery(account : Set<String>, req : ClaimSearchDTO) : Query<Claim> {
    final var q = makeCriteriaQuery(req)
    q.join("Policy").compareIn("AccountNumber", account.toTypedArray())
    return q
  }

  /**
   * Creates an policy-based claim query.
   */
  protected function makePolicyQuery(policies : Set<String>, req : ClaimSearchDTO) : Query<Claim> {
    final var q = makeCriteriaQuery(req)
    q.join("Policy").compareIn("PolicyNumber", policies.toTypedArray())
    return q
  }



  /**
   * Creates an producer-based authority query.
   */
  protected function makeProducerQuery(codes : Set<String>, req : ClaimSearchDTO) : Query<Claim> {
    final var q = makeCriteriaQuery(req)
    q.join("Policy").compareIn("ProducerCode", codes.toTypedArray())
    return q
  }



  /**
   * Creates an vendor-based authority query.
   */
  protected function makeVendorQuery(codes : Set<String>, req : ClaimSearchDTO) : Query<Claim> {
    final var q = makeCriteriaQuery(req)
    q.join(ClaimContact, "Claim").join("Contact").compareIn("AddressBookUID", codes.toArray())
    return q
  }


  /**
   * Creates a base claim search criteria. This query handles fields from request
   * but do not handle any security calls.
   */
  protected function makeCriteriaQuery(req : ClaimSearchDTO) : Query<Claim> {
    final var q = Query.make(Claim)
    q.compareIn("State", req.States).join("Policy").compareIn("PolicyType", _supportedLobsPlugin.getSupportedLobs())
    return q
  }



  /**
   * Unions two queries into one.
   */
  protected static function union(q1 : IQuery<Claim>, q2 : IQuery<Claim>) : IQuery<Claim> {
    if (q1 == null) {
      return q2
    }
    if (q2 == null) {
      return q1
    }

    return q1.union(q2)
  }
}
