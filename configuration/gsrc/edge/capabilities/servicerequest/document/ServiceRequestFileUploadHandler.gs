package edge.capabilities.servicerequest.document

uses edge.capabilities.servicerequest.document.dto.ServiceRequestDocumentDTO
uses org.apache.commons.fileupload.FileItem
uses edge.jsonrpc.annotation.JsonRpcMethod
uses gw.webservice.cc.cc900.vendormanagement.DocumentContent
uses gw.api.webservice.exception.BadIdentifierException
uses edge.capabilities.servicerequest.local.IServiceRequestRetrievalPlugin
uses edge.capabilities.document.local.IDocumentSessionPlugin
uses edge.security.authorization.Authorizer
uses edge.di.annotations.InjectableNode
uses edge.security.authorization.exception.AuthorizationException
uses edge.PlatformSupport.Bundle
uses gw.plugin.Plugins
uses gw.plugin.document.IDocumentContentSource
uses edge.jsonrpc.IRpcHandler

class ServiceRequestFileUploadHandler implements IRpcHandler{

  private var _documentPlugin : IServiceRequestDocumentPlugin
  private var _retrievalPlugin : IServiceRequestRetrievalPlugin
  private var _documentSessionPlugin : IDocumentSessionPlugin
  private var _authz : Authorizer<Document>

  @InjectableNode
  @Param("documentPlugin", "Plugin used to deal with claim documents")
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

  /**
   * Uploads a document
   * 
   * Given a list of file items, it expects that the element
   * <ul>
   * <li> at [0] is the document metadata </li>
   * <li> at [1] is the item to be uploaded </li>
   * </ul>
   * 
   * </br>
   * Throws -
   * <ul>
   * <li>IllegalArgumentException If id number associated with the document is null or empty</li>
   * <li>EntityNotFoundException If no service request statement is found</li>
   * <li>AuthorizationException If the portal user has no access to the service request statement</li>
   * </ul>
   * 
   * @param list of file items
   * @return document metadata response
   */
  @JsonRpcMethod
  function upload(documentDto:ServiceRequestDocumentDTO, documentFile: FileItem) : ServiceRequestDocumentDTO {
    try {
      if (!_documentSessionPlugin.isSessionValid(documentDto.SessionID)) {
        throw new AuthorizationException(){:Message = "Unauthorized portal access"}
      }
      var serviceRequest = _retrievalPlugin.getServiceRequestFromPublicId(documentDto.ServiceRequestId)
      var newDocumentPublicID : String

      if (serviceRequest == null) {
        throw new BadIdentifierException("Bad service request id " + documentDto.ServiceRequestId)
      }

      final var res = Bundle.resolveInTransaction<Document>(\ bundle -> {
        serviceRequest = bundle.add(serviceRequest)
        var docContent = new DocumentContent(){
            :Content =  documentFile.get(),
            :MimeType = documentDto.MimeType
        };

        final var doc = _documentPlugin.createDocumentMetadata(bundle, serviceRequest, documentDto, docContent)
        Plugins.get(IDocumentContentSource).addDocument(documentFile.InputStream, doc)
        return doc
      })

      return  _documentPlugin.toDTO(res)
    } finally {
      documentFile.InputStream.close()
    }
  }
}
