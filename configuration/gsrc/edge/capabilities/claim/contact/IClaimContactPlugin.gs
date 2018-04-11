package edge.capabilities.claim.contact

uses edge.capabilities.claim.contact.dto.ContactDTO
uses edge.capabilities.claim.contact.dto.ClaimContactDTO

/**
 * Plugin used to deal with claim contacts.
 */
interface IClaimContactPlugin {  
  /**
   * Converts claim contact into contact DTO. This method may return <code>null</code>
   * if user do not have access to the specified contact.
   */
  public function toDTO(contact : ClaimContact) : ClaimContactDTO
  
  
  
  /**
   * Batch version of toDTO converter. Removes all inaccessible contacts.
   */
  public function toDTO(contacts : ClaimContact[]) : ClaimContactDTO[]
   

  /**
   * Converts simple contact into a dto. 
   */
  public function toContactDTO(contact : ClaimContact) : ContactDTO
    

  /**
   * Converts contacts into DTOs in batch.
   */
  public function toContactDTO(contact : ClaimContact[]) : ContactDTO[]


  /**
   * Returns an updated contact for the given contact update specification. 
   */
  @Param("dto", "Contact specification to get or update")
  @Param("address", "Address provider")
  @Returns("Contact matching the provided entity")
  public function getUpdatedContact(claim:Claim, dto : ContactDTO) : Contact
}
