package edge.capabilities.claim.contact
uses edge.di.annotations.ForAllGwNodes
uses edge.capabilities.claim.address.IClaimAddressPlugin
uses edge.security.authorization.IAuthorizerProviderPlugin
uses edge.util.mapping.RefUpdater
uses edge.util.mapping.Mapper
uses edge.capabilities.claim.contact.dto.ContactDTO
uses edge.capabilities.claim.contact.dto.ClaimContactDTO

/**
 * Default claim contact implementations.
 */
class DefaultClaimContactPlugin implements IClaimContactPlugin {
  
  private var _addressPlugin : IClaimAddressPlugin

  private var _claimContactUpdater : RefUpdater<Claim,ClaimContact,ContactDTO> as readonly ClaimContactUpdater
  private var _mapper : Mapper as Mapper

  @ForAllGwNodes
  @Param("claimContactAuthorizer", "Plugin used to check claim contact access")
  @Param("addressPlugin", "Plugin used to convert contact address")
  construct(addressPlugin : IClaimAddressPlugin, authorizerProvider:IAuthorizerProviderPlugin) {
    this._addressPlugin = addressPlugin
    this._mapper = new Mapper(authorizerProvider)
    this._claimContactUpdater = new RefUpdater<Claim,ClaimContact,ContactDTO>(authorizerProvider) {
      : ToCreate = \ claim,d:ContactDTO -> {
        var cc = new ClaimContact()
        cc.Contact = new Person()
        claim.addToContacts(cc)
        return cc
      },
      : EntityKey = \ e -> e.Contact.PublicID,
      : AllowedValues =  \ claim -> claim.Contacts
    }
  }

  override function toDTO(contact : ClaimContact) : ClaimContactDTO {
    return Mapper.mapRef(contact, \ c -> claimContactToDTO(c) )
  }
  
  
  
  override function toDTO(contacts : ClaimContact[]) : ClaimContactDTO[] {
    return Mapper.mapArray(contacts, \ c -> claimContactToDTO(c))
  }



  override function toContactDTO(contact : ClaimContact) : ContactDTO {
    return Mapper.mapRef(contact, \ c -> contactToDTO(c))
  }
  

  
   override function toContactDTO(contacts : ClaimContact[]) : ContactDTO[] {
     return Mapper.mapArray(contacts, \ c -> contactToDTO(c))
  }


  
  override function getUpdatedContact(claim:Claim, dto : ContactDTO) : Contact {
    return _claimContactUpdater.updateRef(claim, dto,\ c, d -> updateContact(claim,c.Contact,d)).Contact
  }
  
  
  /**
   * Converts contact into DTO. Do not perform access checks.
   */
  protected function claimContactToDTO(contact : ClaimContact) : ClaimContactDTO {
    final var res = new ClaimContactDTO()
    fillBaseProperties(res, contact)
    res.ContactDTO = contactToDTO(contact)
    return res
  }
  
  
  protected function contactToDTO(contact : ClaimContact) : ContactDTO {
    final var dto = new ContactDTO()
    fillBaseProperties(dto, contact.Contact)
    dto.PrimaryAddress = _addressPlugin.toDTO(contact.Claim, contact.Contact.PrimaryAddress)
    dto.PolicyRole = getContactPolicyRole(contact)
    return dto    
  }
  
  

  protected function updateContact(claim : Claim, contact : Contact, dto : ContactDTO) {
    updateBaseProperties(contact, dto)
    contact.PrimaryAddress = _addressPlugin.getUpdatedAddress(claim, dto.PrimaryAddress)
  }
  
  
  /**
   * Returns policy roles for the given contact.
   */
  protected function getContactPolicyRole(contact : ClaimContact) : ContactRole {
    var claim = contact.Claim
    if (claim.Policy.insured == contact.Contact ) {
      return ContactRole.TC_INSURED
    } else if (claim.Policy.coveredparty.contains(contact.Contact) ) {
      return ContactRole.TC_COVEREDPARTY
    } else {
      return null
    }
  }

  
  
  
  /**
   * Fills base ("primitive") properties on the contact DTO.
   */
  public static function fillBaseProperties(dto : ClaimContactDTO, contact : ClaimContact) {
    dto.PublicID = contact.PublicID
    dto.ContactRoles = contact.Roles*.Role
    dto.ContactRolesDisplay = contact.Roles.map(\ r -> r.DisplayName)
  }



  /**
   * Updates base properties on the DTO.
   */
  public static function fillBaseProperties(dto : ContactDTO, contact : Contact) {
    dto.PublicID = contact.PublicID
    dto.Subtype = contact.Subtype.Code
    dto.DisplayName = contact.DisplayName

    if(contact typeis CompanyVendor){
      dto.ContactType = "CompanyVendor"
    } else if(contact typeis PersonVendor){
      dto.ContactType = "PersonVendor"
    } else {
      dto.ContactType = contact.Subtype.Code
    }

    if(contact typeis Person){
        dto.FirstName = contact.FirstName
        dto.LastName = contact.LastName
        dto.Prefix = contact.Prefix
        dto.Suffix = contact.Suffix
        dto.MiddleName = contact.MiddleName
        dto.CellNumber = contact.CellPhone
        ClaimContactPlatformHelper.fillPersonProperties(dto, contact)
        if (contact typeis PersonVendor) {
          dto.PrimaryContactName = contact.PrimaryContact.DisplayName
        }
    } else if (contact typeis CompanyVendor) {
        dto.PrimaryContactName = contact.PrimaryContact.DisplayName
    } 
    
    dto.ContactName = contact.Name
    dto.PrimaryPhoneType = contact.PrimaryPhone
    dto.HomeNumber = contact.HomePhone
    dto.WorkNumber = contact.WorkPhone
    dto.FaxNumber = contact.FaxPhone
    dto.EmailAddress1 = contact.EmailAddress1
  }
  
  
   /**
   * Sets base properties on the contact.
   */
  public static function updateBaseProperties(contact : Contact, dto : ContactDTO) {
    if ( contact typeis Person ) {
      final var person = contact as Person  // Carbon complains on Contact.FirstName
      person.FirstName = dto.FirstName
      person.LastName = dto.LastName
      person.Prefix = dto.Prefix
      person.Suffix = dto.Suffix
      person.MiddleName = dto.MiddleName
      person.CellPhone = dto.CellNumber
      ClaimContactPlatformHelper.updatePersonProperties(person, dto)
    }
    contact.Name = dto.ContactName
    contact.PrimaryPhone = dto.PrimaryPhoneType
    contact.HomePhone = dto.HomeNumber
    contact.WorkPhone = dto.WorkNumber
    contact.EmailAddress1 = dto.EmailAddress1  
  }

}
