package edge.capabilities.claim.fnol.policy
uses edge.di.annotations.InjectableNode
uses edge.jsonrpc.IRpcHandler
uses edge.jsonrpc.annotation.JsonRpcMethod
uses edge.capabilities.claim.fnol.policy.dto.PolicySearchCriteriaDTO
uses edge.capabilities.claim.fnol.policy.dto.PolicySummaryDTO

/**
 * Handler used to retrieve fnol policies.
 */
class PolicySearchHandler implements IRpcHandler {
  
  private var _policySearchPlugin : IPolicySearchPlugin

  @InjectableNode
  @Param("policySearchPlugin", "Plugin used to search for the policies")
  construct(policySearchPlugin : IPolicySearchPlugin) {
    this._policySearchPlugin = policySearchPlugin
  }



  /**
   * Using the search criteria defined in the PolicySearchDTO, perform a search using
   * the policy search plugin. The resultant policies are cross reference against the 
   * authorized policies defined in the user principal.
   * 
   * @param policySummaryDto The object that defines the criteria to search policies against
   * @return The matching policies as a PolicySummaryDTO array. Returns empty array if there are no policies.
   */
  @JsonRpcMethod
  public function searchPolicies(criteria: PolicySearchCriteriaDTO) : PolicySummaryDTO[]{
    return _policySearchPlugin.findPolicySummaries(criteria)
  }


}
