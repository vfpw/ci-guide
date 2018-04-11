package edge.servlet.security

/**
 * Retrieves producer codes available for a user.
 */
interface IUserProducerCodeRetrievalPlugin {
   function getUserProducerCodes(user: String) :  List<String>
}
