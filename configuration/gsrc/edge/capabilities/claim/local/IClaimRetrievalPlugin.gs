package edge.capabilities.claim.local

uses edge.capabilities.claim.dto.ClaimSearchDTO

/**
 * Plugin used to access claim data.
 * <p>Plugin implementation is responsible for claim access checks.
 */
interface IClaimRetrievalPlugin {
  /**
   * Searches for claims available to the given user.
   */
  public function searchClaims(req : ClaimSearchDTO) : Claim[]


  /**
   * Retrieves claim by its number. Returns <code>null</code> if claim was not found.
   */
  public function getClaimByNumber(number : String) : Claim
}
