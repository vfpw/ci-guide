package edge.capabilities.servicerequest.document

uses gw.api.database.Query
uses edge.PlatformSupport.Logger
uses edge.PlatformSupport.Reflection
uses gw.document.DocumentContentsInfo
uses edge.security.EffectiveUserProvider
uses edge.jsonrpc.annotation.JsonRpcMethod
uses gw.document.DocumentsUtil
uses edge.security.authorization.exception.AuthorizationException
uses edge.capabilities.servicerequest.local.IServiceRequestRetrievalPlugin
uses edge.di.annotations.InjectableNode
uses edge.jsonrpc.IRpcHandler
uses edge.capabilities.document.local.IDocumentContentPlugin
uses edge.capabilities.document.local.IDocumentSessionPlugin
uses edge.security.authorization.Authorizer
uses edge.capabilities.document.exception.DocumentRetrievalException
uses edge.capabilities.document.exception.DocumentErrorCode
uses edge.security.authorization.exception.NoAuthorityException
uses gw.plugin.document.IDocumentContentSource

class ServiceRequestDocumentHandler implements IRpcHandler, IDocumentContentPlugin {
  final private static var _logger = new Logger(Reflection.getRelativeName(ServiceRequestDocumentHandler))

  private var _documentPlugin : IServiceRequestDocumentPlugin
  private var _retrievalPlugin : IServiceRequestRetrievalPlugin
  private var _documentSessionPlugin : IDocumentSessionPlugin
  private var _authz : Authorizer<Document>

  @InjectableNode
  @Param("documentPlugin", "Plugin used to deal with sr documents")
  @Param("documentSessionPlugin", "Plugin used to deal with document sessions")
  @Param("retrievalPlugin", "Plugin used to access service requests")
  public construct(documentPlugin : IServiceRequestDocumentPlugin,
                     documentSessionPlugin : IDocumentSessionPlugin,
                     docAuthz:Authorizer<Document>,
                     retrievalPlugin : IServiceRequestRetrievalPlugin) {
    this._documentPlugin = documentPlugin
    this._documentSessionPlugin = documentSessionPlugin
    this._retrievalPlugin = retrievalPlugin
    this._authz = docAuthz
  }
 
   override function getDocumentContent(publicID:String) : DocumentContentsInfo {
    final var doc = retrieveDocument(publicID)
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

  /**
   * Deletes document from the backend.
   * 
   * </br>
   * Throws -
   * <ul>
   * <li>IllegalArgumentException If claim number is null or empty</li>
   * <li>EntityNotFoundException If no claim is found</li>
   * <li>AuthorizationException If the portal user has no access to the claim or document</li>
   * </ul>
   * 
   * @param the service request number
   * @param the public id of the document to be deleted
   * @return returns true﻿ if the document has been removed from the backend, false﻿ otherwise  
   */
  @JsonRpcMethod
  public function removeDocument(serviceRequestID : String, publicID: String) : boolean{
    var serviceRequest = _retrievalPlugin.getServiceRequestFromPublicId(serviceRequestID)
    // get the document with the id and the associated claim
    var doc = serviceRequest.Documents.firstWhere(\ d -> d.PublicID == publicID)
    if ( doc != null ) {
      if ( !_authz.canAccess(doc) ) {
        throw new NoAuthorityException()
      }
      _documentPlugin.deleteDocument(serviceRequest, doc)
    } 
    return Query.make(Document).compare("PublicID",Equals,publicID).select().Count <= 0
  }

  @JsonRpcMethod
  public function generateUploadToken() : String {
    return _documentSessionPlugin.getDocumentSession()
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
