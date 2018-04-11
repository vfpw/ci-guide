package edge.capabilities.claim.agent.search

uses edge.capabilities.claim.agent.search.dto.ClaimSearchSummaryDTO

interface IClaimSearchSummaryPlugin {
  public function toDTO(claim: Claim) : ClaimSearchSummaryDTO
  public function toDTOArray(claims: Claim[]) : ClaimSearchSummaryDTO[]
}
