package edge.capabilities.claim.contact.dto

uses edge.jsonmapper.JsonProperty
uses edge.capabilities.address.dto.AddressDTO
uses edge.aspects.validation.annotations.Size
uses edge.aspects.validation.annotations.Phone
uses edge.aspects.validation.annotations.Email
uses edge.aspects.validation.annotations.Required
uses edge.el.Expr
uses edge.aspects.validation.Validation

class ContactDTO {

  @JsonProperty  
  var _publicID : String as PublicID

  @JsonProperty // @WriteOnly
  var _tempId: String as TempID

  @JsonProperty // @ReadOnly
  var _displayName : String as DisplayName

  @JsonProperty @Size(0, 60)
  var _contactName : String as ContactName

  @JsonProperty
  @Size(0, 30)
  @Required(Expr.eq(Expr.getProperty("Subtype", Validation.PARENT), "Person"))
  var _firstName : String as FirstName

  @JsonProperty
  @Size(0, 30)
  var _middleName : String as MiddleName

  @JsonProperty
  @Size(0, 30)
  var _firstNameKanji : String as FirstNameKanji

  @JsonProperty
  @Size(0, 30)
  @Required(Expr.eq(Expr.getProperty("Subtype", Validation.PARENT), "Person"))
  var _lastName : String as LastName

  @JsonProperty
  @Size(0, 30)
  var _lastNameKanji : String as LastNameKanji

  @JsonProperty
  var _prefix : typekey.NamePrefix as Prefix

  @JsonProperty
  var _suffix : typekey.NameSuffix as Suffix

  @JsonProperty
  var _particle : String as Particle

  @JsonProperty
  var _subtype : String as Subtype
  
  @JsonProperty
  var _primaryAddress : AddressDTO   as PrimaryAddress
  
  @JsonProperty
  var _primaryPhoneType : typekey.PrimaryPhoneType as PrimaryPhoneType
  
  @JsonProperty @Size(0, 30) @Phone
  var _homeNumber : String as HomeNumber
  
  @JsonProperty @Size(0, 30) @Phone
  var _workNumber : String as WorkNumber
   
  @JsonProperty @Size(0, 30) @Phone
  var _cellNumber : String as CellNumber
  
  @JsonProperty @Size(0, 30) @Phone // @ReadOnly
  var _faxNumber : String as FaxNumber
  
  @JsonProperty @Size(0, 60) @Email
  var _emailAddress1 : String as EmailAddress1

  @JsonProperty // @ReadOnly
  var _primaryContactName : String as PrimaryContactName

  @JsonProperty  // @ReadOnly
  var _policyRole : ContactRole as PolicyRole

  @JsonProperty  // @ReadOnly
  var _contactType : String as ContactType
}
