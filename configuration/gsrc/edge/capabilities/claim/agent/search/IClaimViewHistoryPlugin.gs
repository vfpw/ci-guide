package edge.capabilities.claim.agent.search

uses edge.security.EffectiveUser

interface IClaimViewHistoryPlugin {

  public function getRecentlyViewedClaimsForEffectiveUser() : Claim[]
  public function addRecentlyViewedClaimForEffectiveUser(aClaim : Claim)

}
