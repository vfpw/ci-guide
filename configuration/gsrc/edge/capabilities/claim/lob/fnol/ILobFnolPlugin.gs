package edge.capabilities.claim.lob.fnol

/**
 * Fnol update extension plugin.
 */
interface ILobFnolPlugin<D, U> {
  /**
   * Converts claim data into the DTO.
   */
  public function toDTO(claim : Claim) : D
  
  
  
  /**
   * Updates claim with the new data.
   */
  public function updateClaim(claim : Claim, dto : U)
}
