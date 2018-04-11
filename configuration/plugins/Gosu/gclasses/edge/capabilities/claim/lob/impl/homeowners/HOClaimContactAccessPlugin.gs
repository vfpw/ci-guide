package edge.capabilities.claim.lob.impl.homeowners
uses edge.capabilities.claim.lob.IClaimContactAccessPlugin
uses edge.security.EffectiveUser
uses edge.security.authorization.AuthorityType
uses edge.capabilities.claim.contact.util.ClaimContactUtil
uses edge.di.annotations.InjectableNode

/**
 * Access plugin for homeowner contacts.
 */
class HOClaimContactAccessPlugin implements IClaimContactAccessPlugin {

  @InjectableNode
  construct() {

  }


  override function haveAccess(user : EffectiveUser, contact : ClaimContact) : boolean {
    if (contact.Claim.Policy.PolicyType != PolicyType.TC_HOMEOWNERS) {
      return false
    }

    if (user.getTargets(AuthorityType.PRODUCER).HasElements) {
      // Producers can access any contact
      return true
    }

    if (user.getTargets(AuthorityType.POLICY).HasElements || user.getTargets(AuthorityType.ACCOUNT).HasElements) {
      // Policyholders can access any contact but vendors
      if (!ClaimContactUtil.isVendor(contact)) {
        return true
      }
    }

    final var vendorAuths = user.getTargets(AuthorityType.VENDOR)
    if (vendorAuths.HasElements) {
      if (!ClaimContactUtil.isVendor(contact) || vendorAuths.contains(contact.Contact.AddressBookUID)) {
        return true
      }
    }
    
    return false
  }

}
