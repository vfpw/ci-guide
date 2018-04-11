package edge.capabilities.claim.lob.impl.personalauto
uses edge.capabilities.claim.lob.IClaimContactAccessPlugin
uses edge.security.EffectiveUser
uses edge.security.authorization.AuthorityType
uses edge.capabilities.claim.contact.util.ClaimContactUtil
uses edge.di.annotations.InjectableNode

/**
 * Claim contact access plugin for personal auto policies.
 */
final class PAClaimContactAccessPlugin implements IClaimContactAccessPlugin {

  @InjectableNode
  construct() {

  }


  override function haveAccess(user : EffectiveUser, contact : ClaimContact) : boolean {
    final var claim = contact.Claim
    if (claim.Policy.PolicyType != PaTypeCode.PersonalAuto) {
      return false
    }
    
    if (user.getTargets(AuthorityType.PRODUCER).HasElements) {
      // Producers can access any contact
      return true
    }
    
    if (user.getTargets(AuthorityType.POLICY).HasElements || user.getTargets(AuthorityType.ACCOUNT).HasElements) {
      // Policyholders can access any contact but vendors other than auto repair shops or auto towing agencies
      if (!ClaimContactUtil.isVendor(contact) || contact.AutoRepairShop != null || contact.AutoTowingAgcy != null) {
        return true
      }
    }
    
    final var vendorAuths = user.getTargets(AuthorityType.VENDOR)
    if (vendorAuths.HasElements) {
      // Vendors can see any contact but vendors other than themselves
      if (!ClaimContactUtil.isVendor(contact) || vendorAuths.contains(contact.Contact.AddressBookUID)) {
        return true
      }
    }

    return false
  }
}
