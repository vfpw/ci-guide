package edge.capabilities.enrolment
uses entity.Address
uses entity.Contact
uses entity.PolicySearchResultSet
uses entity.PolicyRetrievalResultSet
uses entity.PolicySummary
uses entity.PolicySearchCriteria
uses entity.PolicySummary
uses java.lang.String
uses gw.plugin.Plugins
uses gw.plugin.policy.search.IPolicySearchAdapter
uses edge.PlatformSupport.PortalStringUtils
uses java.util.Date
uses edge.capabilities.enrolment.dto.EnrolmentRequestDTO
uses edge.di.annotations.InjectableNode
uses edge.jsonrpc.annotation.JsonRpcMethod
uses edge.PlatformSupport.Bundle
uses gw.api.util.Logger
uses edge.jsonrpc.IRpcHandler

/**
 * Handles the RPC request to do with a Policy Enrolment
 */
class PolicyEnrolmentHandler implements IRpcHandler {
  private static final var LOGGER = Logger.forCategory(PolicyEnrolmentHandler.Type.QName)
  
  @InjectableNode
  construct(){
  }

  @JsonRpcMethod
  public function canEnrollPolicy(enrollmentData:EnrolmentRequestDTO):String  {

    
    final var policyNumber = enrollmentData.Details.get("policyNumber")
    final var policySearch = Plugins.get(IPolicySearchAdapter)
    final var policies : PolicySummary[] = Bundle.resolveInTransaction(\ bundle -> {
      var searchCriteria = new PolicySearchCriteria()
      searchCriteria.PolicyNumber = policyNumber
      return policySearch.searchPolicies(searchCriteria).Summaries;
    })
    
    if(policies == null or policies.length <= 0){
      return null
    }
    
    if(policies[0].LossDate == null){
      policies[0].LossDate = new Date()
    }
    
    var policyResult = policySearch.retrievePolicyFromPolicySummary(policies[0]);
    if ( policyResult.Result == null || policyResult.NotUnique ) {
      LOGGER.error("Error retrieving policy information from policy system")
    }
    final var proposedPolicy = policyResult.Result
    
    final var enrollmentAddress = enrollmentData.Details.get("addressLine1")
    if(PortalStringUtils.notBlank(enrollmentAddress) && !enrollmentAddress.equalsIgnoreCase(proposedPolicy.insured.PrimaryAddress.AddressLine1)) {
      LOGGER.info("Primary address does not match address on file for enrollment request, denying enrollment")
      LOGGER.info("Provided ${enrollmentAddress}, on file: ${proposedPolicy.insured.PrimaryAddress.AddressLine1}")
      return null
    }
    return proposedPolicy.PolicyNumber
  }
}
