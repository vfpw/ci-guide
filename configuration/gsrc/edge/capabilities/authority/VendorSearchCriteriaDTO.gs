package edge.capabilities.authority
uses java.lang.String
uses edge.jsonmapper.JsonProperty
uses java.util.HashMap
uses java.lang.Integer

class VendorSearchCriteriaDTO {
  
  @JsonProperty
  private var _searchCriteria:HashMap<String, String> as SearchCriteria
  
  @JsonProperty
  private var _maxResults:Integer as MaxResults
}
