package edge.capabilities.claim
uses edge.capabilities.claim.summary.dto.ClaimSummaryDTO
uses edge.jsonrpc.IRpcHandler
uses edge.di.annotations.InjectableNode
uses edge.jsonrpc.annotation.JsonRpcMethod
uses edge.capabilities.claim.summary.IClaimSummaryPlugin
uses edge.capabilities.claim.policy.IPolicyPlugin
uses edge.capabilities.claim.policy.dto.PolicyDTO
uses edge.capabilities.claim.details.dto.ClaimDTO
uses edge.capabilities.claim.details.IClaimDetailPlugin
uses edge.capabilities.note.dto.NoteDTO
uses edge.capabilities.claim.notes.IClaimNotePlugin
uses edge.PlatformSupport.Bundle
uses edge.exception.EntityNotFoundException
uses edge.capabilities.claim.activity.dto.ActivitySummaryDTO
uses edge.capabilities.claim.activity.local.IActivityPlugin
uses edge.util.mapping.Mapper
uses edge.security.authorization.IAuthorizerProviderPlugin
uses edge.capabilities.claim.dto.ClaimSearchDTO
uses edge.capabilities.claim.local.IClaimRetrievalPlugin


class ClaimHandler implements IRpcHandler{

  /**
   * Plugin used to retrieve claim content.
   */
  private var _claimRetrievalPlugin : IClaimRetrievalPlugin
  
  
  /**
   * Claim policy plugin.
   */
  private var _policyPlugin : IPolicyPlugin
  
  /**
   * Claim summary generation plugin.
   */
  private var _claimSummaryPlugin : IClaimSummaryPlugin
  
  private var _claimDetailPlugin : IClaimDetailPlugin
  
  private var _claimNotesPlugin : IClaimNotePlugin
  
  private var _activityPlugin : IActivityPlugin

  private var _mapper : Mapper as readonly Mapper

  @InjectableNode
  @Param("claimRetrievalPlugin", "Plugin used to retrieve claims. That plugin is responsible for checking claim access")
  @Param("claimSummaryPlugin", "Plugin used to access claim summaries")
  @Param("policyPlugin", "Plugin to deal with policy information")
  @Param("claimDetailPlugin", "Plugin used to provide detailed claim information")
  @Param("claimNotePlugin", "Plugin used to deal with claim notes")
  @Param("activityPlugin", "Plugin used to fetch claim activities")
  @Param("userProvider", "Provides the current user")
  construct(
      claimRetrievalPlugin : IClaimRetrievalPlugin, 
      claimSummaryPlugin : IClaimSummaryPlugin, 
      policyPlugin : IPolicyPlugin, 
      claimDetailPlugin : IClaimDetailPlugin, 
      claimNotesPlugin : IClaimNotePlugin, 
      activityPlugin : IActivityPlugin,
      authzProvider:IAuthorizerProviderPlugin) {
    this._claimRetrievalPlugin = claimRetrievalPlugin
    this._claimSummaryPlugin = claimSummaryPlugin
    this._policyPlugin = policyPlugin
    this._claimDetailPlugin = claimDetailPlugin
    this._claimNotesPlugin = claimNotesPlugin
    this._activityPlugin = activityPlugin
    this._mapper = new Mapper(authzProvider)
  }
  
  
  
  /**
   * Returns claims associated with the requested policy numbers and with specified claim status.
   * 
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#searchClaims(ClaimSearchDTO</code> - to retrieve the claims.</dd>
   *  <dd><code>IClaimSummaryPlugin#getSummary(Claim)</code> - to map the claim list to a DTO.</dd>
   * </dl>
   *
   * @param req The claim search DTO detailing the search parameters.
   * @returns claim summaries.
   */
  @JsonRpcMethod
  function getClaimSummaries(req : ClaimSearchDTO) : Object[]{
    final var res = _claimRetrievalPlugin.searchClaims(req)
    var t :ClaimSummaryDTO
    if(res !=null) {
      t = _claimSummaryPlugin.getSummary(res[0])
    }
    var x= Mapper.mapArray(res,\c -> _claimSummaryPlugin.getSummary(c))
    return x
  }
  
  
  /**
   * Get detailed claim information by claim number.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimDetailPlugin#toDTO(Claim)</code> - to map the claim to a DTO.</dd>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim.</dd>
   *  <dt>Throws:</dt>
   *  <dd><code>EntityNotFoundException</code> - If the claim doesn't exist</dd>
   * </dl>
   *
   * @param claimNumber The claim number
   * @returns claim details
   */
  @JsonRpcMethod
  function getClaimDetail(claimNumber : String) : ClaimDTO {
    final var claim = retrieveClaim(claimNumber)
    return _claimDetailPlugin.toDTO(claim)
  }
  
  /**
   * Returns all notes associated with a claim.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim.</dd>
   *  <dd><code>IClaimNotesPlugin#getNotes(Claim)</code> - to map the claim notes to an array of NoteDTOs.</dd>
   *  <dt>Throws:</dt>
   *  <dd><code>EntityNotFoundException</code> - If the claim doesn't exist</dd>
   * </dl>
   *
   * @param claimNumber a String representation of the claim number for which the notes should be returned.
   * @returns An ArrayList of NoteDTO's.
   */
  @JsonRpcMethod
  function getClaimNotes(claimNumber: String): NoteDTO[]{
    final var claim = retrieveClaim(claimNumber)
    return _claimNotesPlugin.getNotes(claim)
  }
  
  
  
  /**
   * Creates a Note which is associated with a claim.
   * 
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim.</dd>
   *  <dd><code>IClaimNotesPlugin#createClaimNote(Claim, NoteDTO)</code> - to create a new note on the Claim using the DTO.</dd>
   *  <dd><code>IClaimNotesPlugin#toDTO(ClaimNote)</code> - to return the newly created note as a DTO.</dd>
   *  <dt>Throws:</dt>
   *  <dd><code>EntityNotFoundException</code> - If the claim doesn't exist</dd>
   * </dl>
   *
   * @param noteDTO A NoteDTO containing the properties of the Note that will be created.
   * @param claimNumber The claim's claim number.
   * @returns A serialized version of the new Note.
   */ 
  @JsonRpcMethod
  function createClaimNote(claimNumber:String, noteDTO: NoteDTO): NoteDTO{
    var claim = retrieveClaim(claimNumber)
    final var note = Bundle.resolveInTransaction(\ b -> {
      claim = b.add(claim)
      return _claimNotesPlugin.createClaimNote(claim, noteDTO)
    })
    return _claimNotesPlugin.toDTO(note)
  }
  
      
  /**
   * Updates a claim note. Used for adjudicator notes.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim.</dd>
   *  <dd><code>IClaimNotesPlugin#updateClaimNote(Claim, NoteDTO)</code> - to update the relevant ClaimNote</dd>
   *  <dd><code>IClaimNotesPlugin#toDTO(ClaimNote)</code> - to return the updated ClaimNote as a DTO</dd>
   *  <dt>Throws:</dt>
   *  <dd><code>EntityNotFoundException</code> - If the claim doesn't exist</dd>
   * </dl>
   *
   * @param claimNumber number of the claim for the note.
   * @param dto The note that contains the update information.
   * @returns updated note.
   */
  @JsonRpcMethod
  function updateClaimNote(claimNumber: String, dto:NoteDTO): NoteDTO {
    var claim = retrieveClaim(claimNumber)
    final var note = Bundle.resolveInTransaction(\ b -> {
      claim = b.add(claim)
      return _claimNotesPlugin.updateClaimNote(b.add(claim), dto)
    })
    
    return _claimNotesPlugin.toDTO(note)
  }
  
  /**
   * Deletes a claim note. Used for adjudicator notes.
   * 
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim.</dd>
   *  <dd><code>IClaimNotesPlugin#deleteClaimNote(Claim, String)</code> - to delete the claim note.</dd>
   *  <dt>Throws:</dt>
   *  <dd><code>EntityNotFoundException</code> - If the claim doesn't exist</dd>
   * </dl>
   *
   * @param claimNumber number of the claim for the note.
   * @param noteId note identifier.
   */
  @JsonRpcMethod
  function deleteClaimNote(claimNumber: String, noteId : String) {
    var claim = retrieveClaim(claimNumber)
    Bundle.transaction(\ bundle -> {
      claim = bundle.add(claim)
      _claimNotesPlugin.deleteClaimNote(bundle.add(claim), noteId)
    })
  }
  


  
  /**
   * Gets a detailed policy object based on a claim number, returns null if no policy is found.
   *
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim.</dd>
   *  <dd><code>IPolicyPlugin#toDTO(Policy)</code> - to map the policy to a DTO.</dd>
   *  <dt>Throws:</dt>
   *  <dd><code>EntityNotFoundException</code> - If the claim doesn't exist</dd>
   * </dl>
   *
   * @param claimNumber The claim number
   * @returns The matching policy as a PolicyDTO. Returns null if no policy are found.
   */
  @JsonRpcMethod
  public function getClaimPolicyDetail(claimNumber : String) : PolicyDTO {
    final var claim = retrieveClaim(claimNumber)
    return _policyPlugin.toDTO(claim.Policy)
  }


  /**
   * Returns activities associated with a claim.
   * <dl>
   *  <dt>Calls:</dt>
   *  <dd><code>IClaimRetrievalPlugin#getClaimByNumber(String)</code> - to retrieve the claim.</dd>
   *  <dd><code>IActivityPlugin#getClaimSummaries(Claim)</code> - to map the claim activities to an array of ActivitySummaryDTOs.</dd>
   *  <dt>Throws:</dt>
   *  <dd><code>EntityNotFoundException</code> - If the claim doesn't exist</dd>
   * </dl>
   * @param claimNumber the claim number
   * @returns an array of activity summaries
   */ 
  @JsonRpcMethod
  function getClaimActivities(claimNumber : String) : ActivitySummaryDTO[]{
    final var claim = retrieveClaim(claimNumber)
    return _activityPlugin.getClaimSummaries(claim)
  }





  /**
   * Retrieves a claim. Throws EntityNotFoundException if claim was not found.
   */
  private function retrieveClaim(claimNumber : String) : Claim {
    final var claim = _claimRetrievalPlugin.getClaimByNumber(claimNumber)
    if(claim == null){
      throw new EntityNotFoundException(){
        :Message = "No Claim entity found",
        :Data = claimNumber
      }
    }
    return claim
  }
}
