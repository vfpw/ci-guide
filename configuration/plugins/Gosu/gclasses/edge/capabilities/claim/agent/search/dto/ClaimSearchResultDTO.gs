package edge.capabilities.claim.agent.search.dto

uses edge.jsonmapper.JsonProperty
uses java.lang.Integer
uses edge.capabilities.claim.summary.dto.ClaimSummaryDTO

/**
 * A wrapper object returned from a claim endpoint with pagination enabled
 * returns the max number of results available from the query that was used and a subset of those results in DTO form
 */
class ClaimSearchResultDTO {

  @JsonProperty
  var _maxNumberOfResults : Integer as MaxNumberOfResults

  @JsonProperty
  var _claims : ClaimSearchSummaryDTO[] as Claims
}
