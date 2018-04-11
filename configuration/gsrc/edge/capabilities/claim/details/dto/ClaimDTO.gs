package edge.capabilities.claim.details.dto

uses edge.jsonmapper.JsonProperty
uses java.util.Date
uses edge.capabilities.address.dto.AddressDTO
uses edge.capabilities.claim.policy.dto.PolicyDTO
uses edge.capabilities.claim.contact.dto.ContactDTO
uses edge.capabilities.claim.contact.dto.ClaimContactDTO
uses edge.capabilities.claim.lob.claimdetail.dto.ClaimDetailLobDTO
uses edge.capabilities.note.dto.NoteDTO
uses edge.capabilities.claim.document.dto.ClaimDocumentDTO

class ClaimDTO {

  @JsonProperty   
  var _claimNumber : String as ClaimNumber
  
  @JsonProperty 
  var _publicID : String as PublicID
  
  @JsonProperty 
  var _lossDate :   Date as LossDate
  
  @JsonProperty 
  var _lossType : typekey.LossType as LossType
  
  @JsonProperty 
  var _lossCause : typekey.LossCause as LossCause
  
  @JsonProperty
  var _lossLocation :   AddressDTO as LossLocation
  
  @JsonProperty 
  var _description : String as Description
    
  @JsonProperty
  var _policy : PolicyDTO as Policy
  
  @JsonProperty
  var _addresses : AddressDTO[] as Addresses
  
  @JsonProperty
  var _mainContact : ContactDTO   as MainContact
  
  @JsonProperty
  var _relatedContacts : ContactDTO[] as RelatedContacts
  
  @JsonProperty
  var _claimContacts : ClaimContactDTO[] as ClaimContacts
    
  @JsonProperty
  var _vendors: ClaimContactDTO[] as Vendors

  @JsonProperty
  var _claimState:String as ClaimState 
  
  @JsonProperty
  var _claimReporter : ClaimReporterDTO as ClaimReporter 
  
  @JsonProperty
  var _adjuster:UserDTO as Adjuster
  
  @JsonProperty
  var _exposures:ExposureDTO[] as Exposures
  
  /**
   * Line-of-business extension DTO.
   */
  @JsonProperty
  var _lobs : ClaimDetailLobDTO as Lobs
  

  /**
   * Notes for the claim.
   * <strong>This collection is not saved on server when claim is saved.</strong>
   */
  @JsonProperty
   var _notes : NoteDTO[] as Notes
  
  /**
   * Documents for the claim.
   * <strong>This collection is not saved on server when claim is saved.</strong>
   */
  @JsonProperty
   var _documents : ClaimDocumentDTO[] as Documents
}
