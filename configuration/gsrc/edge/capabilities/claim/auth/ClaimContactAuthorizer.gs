package edge.capabilities.claim.auth
uses edge.security.authorization.Authorizer
uses edge.capabilities.claim.lob.IClaimContactAccessPlugin
uses edge.di.annotations.ForAllGwNodes
uses edge.capabilities.claim.lob.impl.personalauto.PAClaimContactAccessPlugin
uses edge.capabilities.claim.lob.impl.homeowners.HOClaimContactAccessPlugin
uses edge.security.EffectiveUser
uses edge.security.EffectiveUserProvider

/**
 * Access authorizer to claim contacts.
 */
class ClaimContactAuthorizer implements Authorizer<ClaimContact>{
  
  private var _plugins : IClaimContactAccessPlugin[]
  
  private var _userProvider : EffectiveUserProvider as readonly UserProvider

  @ForAllGwNodes
  construct(aUserProvider:EffectiveUserProvider) {
    _plugins = {new PAClaimContactAccessPlugin(), new HOClaimContactAccessPlugin()}
    _userProvider = aUserProvider
  }
  

  override function canAccess(item : ClaimContact) : boolean {
    var user = UserProvider.EffectiveUser
    return _plugins.hasMatch(\ p -> p.haveAccess(user, item))
  }

}
