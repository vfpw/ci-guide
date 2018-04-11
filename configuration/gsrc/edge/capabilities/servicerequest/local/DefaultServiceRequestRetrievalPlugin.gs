package edge.capabilities.servicerequest.local

uses edge.di.annotations.ForAllGwNodes
uses gw.api.util.Logger
uses java.lang.IllegalArgumentException
uses edge.security.authorization.Authorizer
uses edge.security.EffectiveUserProvider
uses gw.api.database.Query
uses edge.security.authorization.AuthorityType
uses java.lang.IllegalStateException
uses edge.exception.EntityNotFoundException
uses edge.capabilities.servicerequest.local.IServiceRequestRetrievalPlugin

/**
 * Default implementation of claim retrieval plugin.
 */
class DefaultServiceRequestRetrievalPlugin implements IServiceRequestRetrievalPlugin {

  private static final var LOGGER = Logger.forCategory(DefaultServiceRequestRetrievalPlugin.Type.QName)
  private var _serviceRequestAuthorizer : Authorizer<ServiceRequest>
  private var _userProvider : EffectiveUserProvider as readonly UserProvider

  @ForAllGwNodes
  @Param("serviceRequestAuthorizer", "Plugin used to determine service request access rules")
  construct(serviceRequestAuthorizer : Authorizer<ServiceRequest>, aUserProvider:EffectiveUserProvider) {
    this._serviceRequestAuthorizer = serviceRequestAuthorizer
    this._userProvider = aUserProvider
  }

  /**
   * Get a service request entity from a public id
   *
   * @param publicId The public id of the service request to look up
   * @return The service request entity
   * @throws IllegalArgumentException If public id is null or empty
   * @throws EntityNotFoundException If no service request is found
   * @throws AuthorizationException If the portal user has no access to the service request
   */
  public function getServiceRequestFromPublicId(publicId : String) : ServiceRequest{
    if(publicId == null || publicId.Empty){
      throw new IllegalArgumentException("serviceRequestNumber is null or empty")
    }

    var q = Query.make(ServiceRequest)
    q.compare(ServiceRequest#PublicID, Equals, publicId)
    var queryResult = q.select()
    if (queryResult.Count > 1) {
      throw new IllegalStateException("found multiple ServiceRequests with the same PublicID")
    }
    var serviceRequest = queryResult.FirstResult
    if (serviceRequest == null){
      throw new EntityNotFoundException(){
          :Message = "No service request found",
          :Data = publicId
      }
    }
    return _serviceRequestAuthorizer.access(serviceRequest)
  }

  public function getServiceRequestByNumber(serviceRequestNumber : String) : ServiceRequest{
    if(serviceRequestNumber == null || serviceRequestNumber.Empty){
      throw new IllegalArgumentException("serviceRequestNumber is null or empty")
    }

    var q = Query.make(ServiceRequest)
    q.compare(ServiceRequest#ServiceRequestNumber, Equals, serviceRequestNumber)
    var queryResult = q.select()
    if (queryResult.Count > 1) {
      throw new IllegalStateException("found multiple ServiceRequests with the same ServiceRequestNumber")
    }
    var serviceRequest = queryResult.FirstResult
    if (serviceRequest == null){
      throw new EntityNotFoundException(){
          :Message = "No service request found",
          :Data = serviceRequestNumber
      }
    }
    return _serviceRequestAuthorizer.access(serviceRequest)
  }

  public function getAllServiceRequestsForVendor() : ServiceRequest[] {
    final var user = UserProvider.EffectiveUser
    final var vendorAuths = user.getTargets(AuthorityType.VENDOR)

    if (vendorAuths.Empty) {
      LOGGER.debug("Query is null as no authorities found")
      return {}
    }

    final var query = Query.make(ServiceRequest)
    query.join("Specialist").compareIn("AddressBookUID", vendorAuths.toArray())
    return query.select().toTypedArray()
  }

}
