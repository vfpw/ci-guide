package edge.capabilities.servicerequest.local


/**
 * Plugin used to access service request data.
 * <p>Plugin implementation is responsible for service request access checks.
 */
interface IServiceRequestRetrievalPlugin {

  /** Retrieves service request by its public ID. Returns <code>null</code> if service request was not found.*/
  public function getServiceRequestFromPublicId(publicId : String) : ServiceRequest

  /** Retrieves service request by its number. Returns <code>null</code> if service request was not found.*/
  public function getServiceRequestByNumber(serviceRequestNumber : String) : ServiceRequest

  /** Retrieves all service requests for the given user.*/
  public function getAllServiceRequestsForVendor() : ServiceRequest[]

}
