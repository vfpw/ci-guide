package edge.capabilities.claim.dto

uses edge.jsonmapper.JsonProperty


/**
 * Claim search request DTO.
 */
class ClaimSearchDTO {
  
  @JsonProperty
  private var _states : ClaimState[] as States
}
