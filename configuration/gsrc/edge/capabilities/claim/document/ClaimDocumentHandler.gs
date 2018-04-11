package edge.capabilities.claim.document

uses edge.jsonrpc.IRpcHandler
uses edge.di.annotations.InjectableNode
uses edge.capabilities.document.local.IDocumentSessionPlugin
uses edge.jsonrpc.annotation.JsonRpcMethod
uses gw.plugin.document.IDocumentContentSource
uses gw.api.database.Query
uses edge.capabilities.document.exception.DocumentRetrievalException
uses edge.capabilities.document.exception.DocumentErrorCode
uses edge.capabilities.document.local.IDocumentContentPlugin
uses gw.document.DocumentContentsInfo
uses edge.security.authorization.exception.NoAuthorityException
uses edge.security.authorization.Authorizer
uses edge.capabilities.claim.document.local.IClaimDocumentPlugin

/**
 * Handler for claim documents.
 */
class ClaimDocumentHandler implements IRpcHandler, IDocumentContentPlugin {
  
  private var _documentPlugin : IClaimDocumentPlugin
  private var _documentSessionPlugin : IDocumentSessionPlugin
  private var _authz : Authorizer<Document>


  @InjectableNode
  @Param("documentPlugin", "Plugin used to deal with claim documents")
  @Param("documentSessionPlugin", "Plugin used to deal with document sessions")
  construct(documentPlugin : IClaimDocumentPlugin,
      documentSessionPlugin : IDocumentSessionPlugin,
      docAuthz:Authorizer<Document>) {
    this._documentPlugin = documentPlugin
    this._documentSessionPlugin = documentSessionPlugin
    this._authz = docAuthz
  }

  /**
  * Generates a document upload token for use by the frontend.
  *
  * <dl>
  *   <dt>Calls:</dt>
   *   <dd><code>IDocumentSessionPlugin#getDocumentSession()</code> - Obtains the session token.</dd>
  * </dl>
  *
  * @returns A document upload session token.
  * */
  @JsonRpcMethod
  public function generateUploadToken() : String {
    return _documentSessionPlugin.getDocumentSession()
  }


  /**
   * Deletes a document in the DMS.
   *
   * <dl>
   *   <dt>Calls:</dt>
   *   <dd><code>IClaimDocumentPlugin#deleteDocument(Document)</code> - Removes the document.</dd>
   *   <dt>Throws:</dt>
   *   <dd><code>DocumentRetrievalException</code> - If the document is unavailable.</dd>
   *   <dd><code>NoAuthorityException</code> - If the user is not authorized to access the document.</dd>
   * </dl>
   *
   * @param claimId A String representing the claim's publicID
   * @param publicID A String representing the document's publicID
   * @returns A Boolean indicating success or failure.
   * */
  @JsonRpcMethod
  public function removeDocument(claimId : String, publicID: String) : Boolean {
    _documentPlugin.deleteDocument(retrieveDocument(publicID))
    return true
  }


  /**
  *  Returns the DocumentContentsInfo for a given document ID.
  *
  *  <dl>
  *    <dt>Throws:</dt>
  *    <dd><code>DocumentRetrievalException</code> - If the document can't be found.</dd>
  *  </dl>
  *
  *  @param id The document's publicID.
   * */
  override function getDocumentContent(id : String) : DocumentContentsInfo {
    final var doc = retrieveDocument(id)
    
    var docContentPlugin = gw.plugin.Plugins.get(IDocumentContentSource)
    if (!docContentPlugin.OutboundAvailable) {
      throw new DocumentRetrievalException(DocumentErrorCode.CMS_TEMPORARLY_UNAVAILABLE, "The document is temporarily unavailable")
    }
    if (!docContentPlugin.isDocument(doc)) {
      throw new DocumentRetrievalException(DocumentErrorCode.DOCUMENT_NOT_IN_CMS,
                  "The document with public ID ${doc.PublicID} has no associated content or it has been removed from the CMS.")
    }

    return docContentPlugin.getDocumentContentsInfo(doc, true)
  }
  

  
  protected function retrieveDocument(publicID:String) : Document {
    final var q = Query.make(Document)
    q.compare("PublicID",Equals, publicID)
    final var doc = q.select().AtMostOneRow
    if ( doc == null ) {
      throw new DocumentRetrievalException(DocumentErrorCode.DOCUMENT_NOT_FOUND, "Document not found: PublicID=${publicID}")
    }
    
    if (!_authz.canAccess(doc)) {
      throw new NoAuthorityException()
    }
    return doc
  }


}
