package edge.capabilities.claim.summary
uses edge.di.annotations.ForAllGwNodes
uses edge.capabilities.address.IAddressPlugin
uses edge.capabilities.claim.contact.IClaimContactPlugin
uses edge.capabilities.claim.summary.dto.ClaimSummaryDTO

/**
 * Default implementation of claim summary plugin.
 */
class DefaultClaimSummaryPlugin implements IClaimSummaryPlugin {
  
  /**
   * Plugin to convert addresses.
   */
  private var _addressPlugin : IAddressPlugin
  
  /**
   * Plugin used to deal with claim contacts.
   */
  private var _claimContactPlugin : IClaimContactPlugin

  @ForAllGwNodes
  @Param("addressPlugin", "Address conversion plugin")
  @Param("claimContactPlugin", "Plugin used to deal with claim contacts")
  construct(addressPlugin : IAddressPlugin, claimContactPlugin : IClaimContactPlugin) {
    this._addressPlugin = addressPlugin
    this._claimContactPlugin = claimContactPlugin
  }


  override function getSummary(claim : Claim) : ClaimSummaryDTO {
    final var res = new ClaimSummaryDTO()
    res.Addresses = claim.Addresses.map(\ a -> _addressPlugin.toDto(a))
    res.InsuredContact = _claimContactPlugin.toContactDTO(claim.Policy.getClaimContactByRole(ContactRole.TC_INSURED))
    res.Vendors = _claimContactPlugin.toDTO(claim.ClaimContactsForAllRoles)
    fillBaseProperties(res, claim)    
    return res
  }


  /**
   * Fills base (raw) properties on the claim summary dto.
   */
  public static function fillBaseProperties(dto: ClaimSummaryDTO, claim : Claim) {
    dto.ClaimNumber = claim.ClaimNumber
    dto.PublicID = claim.PublicID
    dto.LossDate = claim.LossDate
    if(claim.LossType == LossType.TC_AUTO){
      dto.LossType = claim.LossType
    }else {
      dto.LossType = LossType.TC_PR
      //POC
    }
    dto.Description = claim.Description    
    dto.ClaimState = claim.State
    dto.PolicyNumber = claim.Policy.PolicyNumber
    if(claim.LOBCode!=null){
      if(claim.LOBCode == LOBCode.TC_PERSONALAUTOLINE) {
        dto.LineOfBusinessCode = claim.LOBCode.Code
      }else{
        dto.LineOfBusinessCode = LOBCode.TC_HOMEOWNERSLINE_HOE.Code
        //POC
      }
    }else{
      dto.LineOfBusinessCode = claim.LossType.Code
    }

  }
}
