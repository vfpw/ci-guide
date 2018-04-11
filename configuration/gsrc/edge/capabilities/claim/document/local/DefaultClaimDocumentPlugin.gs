package edge.capabilities.claim.document.local

uses edge.di.annotations.ForAllGwNodes
uses edge.PlatformSupport.Bundle
uses edge.security.authorization.exception.NoAuthorityException
uses edge.capabilities.document.util.DocumentUtil
uses edge.capabilities.document.local.IDocumentSessionPlugin
uses gw.document.DocumentsUtil
uses edge.security.authorization.Authorizer
uses edge.security.EffectiveUserProvider
uses edge.util.mapping.Mapper
uses edge.security.authorization.IAuthorizerProviderPlugin
uses edge.capabilities.claim.document.dto.ClaimDocumentDTO
uses edge.capabilities.claim.document.dto.ClaimDocumentUploadDTO
uses edge.capabilities.claim.document.local.IClaimDocumentPlugin

/**
 * Default implementation of claim document plugin.
 */
class DefaultClaimDocumentPlugin implements IClaimDocumentPlugin {
  private var _sessionProvider : IDocumentSessionPlugin

  private var _documentAuthorizer : Authorizer<Document>

  private var _userProvider : EffectiveUserProvider as readonly UserProvider

  private var _mapper : Mapper as readonly Mapper

  @ForAllGwNodes
  @Param("sessionProvider", "Session provider for document access")
  @Param("documentAuthorizer", "Document authorization logic")
  construct(sessionProvider : IDocumentSessionPlugin, authzProvider:IAuthorizerProviderPlugin, aUserProvider:EffectiveUserProvider) {
    this._sessionProvider = sessionProvider
    this._documentAuthorizer = authzProvider.authorizerFor(Document)
    this._userProvider = aUserProvider
    this._mapper = new Mapper(authzProvider)
  }



  override function getClaimDocuments(claim : Claim) : ClaimDocumentDTO[] {
    return Mapper.mapArray(claim.Documents, \ d -> getDocumentDetails(d))
  }




  override function getDocumentDetails(doc : Document) : ClaimDocumentDTO {
    ensureAccess(doc)
    final var res = new ClaimDocumentDTO()
    DocumentUtil.fillDocumentBase(res, doc)
    res.SessionID = _sessionProvider.getDocumentSession()
    res.ClaimNumber= doc.Claim.ClaimNumber
    res.CanDelete = canDelete(doc)
    return res
  }



  override function createDocumentMetadata(bundle : Bundle, claim : Claim, req : ClaimDocumentUploadDTO) : Document {
    final var res = new Document(bundle.PlatformBundle)
    DocumentUtil.fillDocumentWithDefaults(res, req)
    res.Type = typekey.DocumentType.TC_LETTER_RECEIVED
    res.SecurityType = DocumentSecurityType.TC_UNRESTRICTED
    res.Author = UserProvider.EffectiveUser.Username
    claim.addToDocuments(res)
    return res
  }


  override function deleteDocument(document : Document) {
    ensureAccess(document)
    if (!canDelete(document)) {
      throw new NoAuthorityException()
    }
    DocumentsUtil.deleteDocument(document)
  }

  /**
   * "Delete" access check for the user and document.
   */
  protected function canDelete(doc : Document) : Boolean {
    return _documentAuthorizer.canAccess(doc) && doc.Author == UserProvider.EffectiveUser.Username
  }


  /**
   * Ensures that user have an access to the given document.
   */
  final function ensureAccess(doc : Document) {
    if (!_documentAuthorizer.canAccess(doc)) {
      throw new NoAuthorityException()
    }
  }
}
