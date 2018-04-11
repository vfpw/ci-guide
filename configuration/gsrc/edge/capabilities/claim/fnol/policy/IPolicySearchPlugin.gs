package edge.capabilities.claim.fnol.policy
uses java.util.Date
uses edge.capabilities.claim.fnol.policy.dto.PolicySearchCriteriaDTO
uses edge.capabilities.claim.fnol.policy.dto.PolicySummaryDTO

/**
 * Plugin used to search for policies for a fnol process.
 */
interface IPolicySearchPlugin {
  /**
   * Searches for policy summaries for the policies.
   */
  public function findPolicySummaries(criteria : PolicySearchCriteriaDTO) : PolicySummaryDTO[]
  
  
  /**
   * Returns policy for the user given the policy number.
   */
  public function getPolicy(policyNumber : String, effectiveDate : Date) :  Policy
}
