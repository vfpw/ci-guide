package edge.servlet.security

uses javax.servlet.http.HttpServletRequest
uses edge.security.EffectiveUser
uses edge.PlatformSupport.PortalStringUtils
uses java.util.Collections
uses edge.security.authorization.Authority
uses edge.di.annotations.InjectableNode
uses edge.security.authorization.AuthorityType
uses edge.util.helper.UserUtil

class NoAuthoritiesHttpRequestUserIdentityPlugin implements IHttpRequestUserIdentityPlugin {

  private var userProducerCodeRetrieverPlugin: DefaultUserProducerCodeRetrievalPlugin

  @InjectableNode
  construct(aUserProducerCodeRetrieverPlugin: DefaultUserProducerCodeRetrievalPlugin) {
    userProducerCodeRetrieverPlugin = aUserProducerCodeRetrieverPlugin
  }

  override function getEffectiveUserFromRequest(req : HttpServletRequest) : EffectiveUser {

    final var user = req.getHeader("usertoken")
    if(PortalStringUtils.isBlank(user)) {
      return null
    }

    var producerCodes = userProducerCodeRetrieverPlugin.getUserProducerCodes(user)

    var grantedAuthorities = producerCodes.map(
        \ producerCode -> new Authority(AuthorityType.PRODUCER, producerCode))


    return new EffectiveUser(user, grantedAuthorities, UserUtil.getUserByName(user))
  }

}
