package edge.capabilities.claim

uses edge.jsonrpc.annotation.JsonRpcMethod
uses edge.capabilities.claim.agent.search.dto.ClaimSearchSummaryDTO
uses java.lang.Integer
uses edge.capabilities.claim.agent.search.dto.ClaimSearchResultDTO
uses java.lang.Exception
uses edge.PlatformSupport.Logger
uses edge.PlatformSupport.Reflection
uses edge.capabilities.claim.agent.search.IClaimSearchPlugin
uses edge.capabilities.claim.agent.search.IClaimViewHistoryPlugin
uses edge.capabilities.claim.agent.search.IClaimSearchSummaryPlugin
uses edge.capabilities.claim.local.IClaimRetrievalPlugin
uses edge.di.annotations.InjectableNode
uses edge.capabilities.claim.summary.IClaimSummaryPlugin
uses edge.capabilities.claim.policy.IPolicyPlugin
uses edge.capabilities.claim.details.IClaimDetailPlugin
uses edge.capabilities.claim.notes.IClaimNotePlugin
uses edge.capabilities.claim.activity.local.IActivityPlugin
uses edge.security.authorization.IAuthorizerProviderPlugin
uses edge.capabilities.helpers.pagination.dto.QueryOptionsDTO
uses edge.capabilities.helpers.pagination.dto.QueryParameterDTO

class AgentClaimHandler extends ClaimHandler {

  private static var LOGGER = new Logger(Reflection.getRelativeName(AgentClaimHandler))

  private var _claimSearchPlugin : IClaimSearchPlugin

  private var _claimViewHistoryPlugin : IClaimViewHistoryPlugin

  private var _claimSearchSummaryPlugin : IClaimSearchSummaryPlugin

  private var _claimRetrievalPlugin : IClaimRetrievalPlugin


   @InjectableNode
   construct( claimRetrievalPlugin : IClaimRetrievalPlugin,
              claimSummaryPlugin : IClaimSummaryPlugin,
              policyPlugin : IPolicyPlugin,
              claimDetailPlugin : IClaimDetailPlugin,
              claimNotesPlugin : IClaimNotePlugin,
              activityPlugin : IActivityPlugin,
              authzProvider:IAuthorizerProviderPlugin,claimSearchPlugin:IClaimSearchPlugin,
              claimViewHistoryPlugin:IClaimViewHistoryPlugin,
              claimSearchSummaryPlugin:IClaimSearchSummaryPlugin){

     super( claimRetrievalPlugin, claimSummaryPlugin, policyPlugin, claimDetailPlugin,
            claimNotesPlugin, activityPlugin, authzProvider)

     this._claimSearchPlugin = claimSearchPlugin
     this._claimViewHistoryPlugin = claimViewHistoryPlugin
     this._claimSearchSummaryPlugin = claimSearchSummaryPlugin
     this._claimRetrievalPlugin = claimRetrievalPlugin
   }



  /**
   * Returns a list of claims of all the claims for the currently logged in user
   *
   * <dl>
   * <dt>Calls:</dt>
   * <dd> <code>IClaimSearchPlugin#getClaimsForCurrentUser</code> - To return a search result summary containing a list of claims</dd>   *
   * </dl>
   * @param      createdInLastXDays the number of days to limit the claim search to
   * @param      queryOptions the query options for the claim search
   * @param      queryParameters additional query parameters to limit the search to
   * @returns    ClaimSearchResultDTO
   */

  @JsonRpcMethod
  function getClaimsForCurrentUser(createdInLastXDays : Integer, queryOptions : QueryOptionsDTO, queryParameters : QueryParameterDTO[]) : ClaimSearchResultDTO {
    try{
      return _claimSearchPlugin.getClaimsForCurrentUser(createdInLastXDays, queryOptions, queryParameters)
    }catch(ex : Exception){
      LOGGER.logError(ex)
    }

    return new ClaimSearchResultDTO()
  }

  /**
   * Returns a list of open claims for the currently logged in user
   *
   * <dl>
   * <dt>Calls:</dt>
   * <code>IClaimSearchPlugin#getOpenClaimsForCurrentUser</code> - To return a search result summary containing a list of open claims</dd>
   * </dl>
   * @param      createdInLastXDays the number of days to limit the claim search to
   * @param      queryOptions the query options for the claim search
   * @param      queryParameters additional query parameters to limit the search to
   * @returns    ClaimSearchResultDTO
   */

  @JsonRpcMethod
  function getOpenClaimsForCurrentUser(createdInLastXDays : Integer, queryOptions : QueryOptionsDTO, queryParameters : QueryParameterDTO[]) : ClaimSearchResultDTO {
    try{
      return _claimSearchPlugin.getOpenClaimsForCurrentUser(createdInLastXDays, queryOptions, queryParameters)
    }catch(ex : Exception){
      LOGGER.logError(ex)
    }

    return new ClaimSearchResultDTO()
  }


  /**
   * Returns a list of claims for the currently logged in user
   *
   * <dl>
   * <code>IClaimSearchPlugin#getClosedClaimsForCurrentUser</code> - To return a search result summary containing a list of closed claims</dd>
   * </dl>
   * @param      createdInLastXDays the number of days to limit the claim search to
   * @param      queryOptions the query options for the claim search
   * @param      queryParameters additional query parameters to limit the search to
   * @returns    ClaimSearchResultDTO
   */

  @JsonRpcMethod
  function getClosedClaimsForCurrentUser(createdInLastXDays : Integer, queryOptions : QueryOptionsDTO, queryParameters : QueryParameterDTO[]) : ClaimSearchResultDTO {
    try{
      return _claimSearchPlugin.getClosedClaimsForCurrentUser(createdInLastXDays, queryOptions, queryParameters)
    }catch(ex : Exception){
      LOGGER.logError(ex)
    }

    return new ClaimSearchResultDTO()
  }

  /**
   * Returns a list of claims for the provided producerCode
   *
   * <dl>
   * <dt>Calls:</dt>
   * <code>IClaimSearchPlugin#getClaimsForProducerCode</code> - To return a search result summary containing a list of claims</dd>
   * </dl>
   * @param      createdInLastXDays the number of days to limit the claim search to
   * @param      queryOptions the query options for the claim search
   * @param      producerCode the producer code to use in the query
   * @returns    ClaimSearchResultDTO
   */

  @JsonRpcMethod
  function getClaimsForProducerCode(createdInLastXDays : Integer, queryOptions : QueryOptionsDTO, producerCode : String) : ClaimSearchResultDTO {
    try{
      return _claimSearchPlugin.getClaimsForProducerCode(createdInLastXDays, queryOptions, producerCode)
    }catch(ex : Exception){
      LOGGER.logError(ex)
    }

    return new ClaimSearchResultDTO()
  }

  /**
   * Returns a list of open claims for the provided producerCode
   *
   * <dl>
   * <dt>Calls:</dt>
   * <code>IClaimSearchPlugin#getOpenClaimsForProducerCode</code> - To return a search result summary containing a list of open claims</dd>
   * </dl>
   * @param      createdInLastXDays the number of days to limit the claim search to
   * @param      queryOptions the query options for the claim search
   * @param      producerCode the producer code to use in the query
   * @returns    ClaimSearchResultDTO
   */

  @JsonRpcMethod
  function getOpenClaimsForProducerCode(createdInLastXDays : Integer, queryOptions : QueryOptionsDTO, producerCode : String) : ClaimSearchResultDTO {
    try{
      return _claimSearchPlugin.getOpenClaimsForProducerCode(createdInLastXDays, queryOptions, producerCode)
    }catch(ex : Exception){
      LOGGER.logError(ex)
    }

    return new ClaimSearchResultDTO()
  }


  /**
   * Returns a list of closed claims for the provided producerCode
   *
   * <dl>
   * <dt>Calls:</dt>
   * <code>IClaimSearchPlugin#getClosedClaimsForProducerCode</code> - To return a search result summary containing a list of closed claims</dd>
   * </dl>
   * @param      createdInLastXDays the number of days to limit the claim search to
   * @param      queryOptions the query options for the claim search
   * @param      producerCode the producer code to use in the query
   * @returns    ClaimSearchResultDTO
   */

  @JsonRpcMethod
  function getClosedClaimsForProducerCode(createdInLastXDays : Integer, queryOptions : QueryOptionsDTO, producerCode : String) : ClaimSearchResultDTO {
    try{
      return _claimSearchPlugin.getClosedClaimsForProducerCode(createdInLastXDays, queryOptions, producerCode)
    }catch(ex : Exception){
      LOGGER.logError(ex)
    }

    return new ClaimSearchResultDTO()
  }



  /**
   * Returns the recently viewed claims for the currently logged in user
   *
   * <dl>
   *   <dt>Calls:</dt>
   * <dd> <code>IClaimViewHistoryPlugin#getRecentlyViewedClaims(java.lang.String)</code> -  To return an an array of recently viewed claims</dd>
   * <dd> <code>IClaimPlugin#toDTOArray(entity.Claim[])</code> -  To map the array of claims to DTOs</dd>
   * </dl>
   *
   * @returns    ClaimSummaryDTO[]
   */
  @JsonRpcMethod
  function getRecentlyViewedClaims() : ClaimSearchSummaryDTO[] {

    try{
      final var claims = _claimViewHistoryPlugin.getRecentlyViewedClaimsForEffectiveUser()
      return _claimSearchSummaryPlugin.toDTOArray(claims)

    }catch(ex : Exception){
      LOGGER.logError(ex)
    }

    return new ClaimSearchSummaryDTO[]{}
  }

  /**
   * Adds an claim to the recently viewed claims list for the currently logged in user
   *
   * <dl>
   *   <dt>Calls:</dt>
   * <dd> <code>IClaimRetrievalPlugin#getClaimByNumber(java.lang.String)</code></dd>
   * <dd> <code>IClaimViewHistoryPlugin#addRecentlyViewedClaim(entity.Claim)</code> -  To add the claim to the recently viewed</dd>
   * </dl>
   * @param  claimNumber the claim number
   */
  @JsonRpcMethod
  function addRecentlyViewedClaim(claimNumber : String) {
    try{
      final var claim = _claimRetrievalPlugin.getClaimByNumber(claimNumber)
      _claimViewHistoryPlugin.addRecentlyViewedClaimForEffectiveUser(claim)
    }catch(ex : Exception){
      LOGGER.logError(ex)
    }
  }



}
