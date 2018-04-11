package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/documents/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/documents/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at DocumentsLV.pcf: line 22, column 43
    function initialValue_0 () : java.util.Set<String> {
      return documentSearchCriteria.Claim.UndeletableDocumentPublicIds
    }
    
    // 'initialValue' attribute on Variable at DocumentsLV.pcf: line 26, column 52
    function initialValue_1 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'sortBy' attribute on RowIterator at DocumentsLV.pcf: line 58, column 23
    function sortValue_2 (document :  entity.Document) : java.lang.Object {
      return document.Name
    }
    
    // 'value' attribute on RowIterator at DocumentsLV.pcf: line 115, column 45
    function sortValue_3 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on RowIterator at DocumentsLV.pcf: line 120, column 51
    function sortValue_4 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on RowIterator at DocumentsLV.pcf: line 125, column 36
    function sortValue_5 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on RowIterator at DocumentsLV.pcf: line 134, column 24
    function sortValue_6 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'sortBy' attribute on RowIterator at DocumentsLV.pcf: line 141, column 61
    function sortValue_8 (document :  entity.Document) : java.lang.Object {
      return document.Obsolete
    }
    
    // 'value' attribute on RowIterator at DocumentsLV.pcf: line 33, column 87
    function value_54 () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return DocumentList
    }
    
    // 'visible' attribute on RowIterator at DocumentsLV.pcf: line 141, column 61
    function visible_7 () : java.lang.Boolean {
      return documentSearchCriteria.IncludeObsoletes
    }
    
    property get DocumentList () : gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean> {
      return getRequireValue("DocumentList", 0) as gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>
    }
    
    property set DocumentList ($arg :  gw.api.database.IQueryBeanResult<gw.pl.persistence.core.Bean>) {
      setRequireValue("DocumentList", 0, $arg)
    }
    
    property get documentSearchCriteria () : DocumentSearchCriteria {
      return getRequireValue("documentSearchCriteria", 0) as DocumentSearchCriteria
    }
    
    property set documentSearchCriteria ($arg :  DocumentSearchCriteria) {
      setRequireValue("documentSearchCriteria", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get undeletableDocumentPublicIds () : java.util.Set<String> {
      return getVariableValue("undeletableDocumentPublicIds", 0) as java.util.Set<String>
    }
    
    property set undeletableDocumentPublicIds ($arg :  java.util.Set<String>) {
      setVariableValue("undeletableDocumentPublicIds", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/documents/DocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 66, column 87
    function action_14 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 77, column 77
    function action_18 () : void {
      DocumentDetailsPopup.push(document)
    }
    
    // 'action' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 86, column 90
    function action_24 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 94, column 88
    function action_29 () : void {
      UploadDocumentContentPopup.push(document)
    }
    
    // 'action' attribute on Link (id=DocumentsLV_DeleteLink) at DocumentsLV.pcf: line 103, column 85
    function action_35 () : void {
      gw.document.DocumentsUtil.deleteDocument(document)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 77, column 77
    function action_dest_19 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document)
    }
    
    // 'action' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 94, column 88
    function action_dest_30 () : pcf.api.Destination {
      return pcf.UploadDocumentContentPopup.createDestination(document)
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 66, column 87
    function available_13 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 77, column 77
    function available_17 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 86, column 90
    function available_22 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 94, column 88
    function available_27 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentAvailable(document)
    }
    
    // 'available' attribute on Link (id=DocumentsLV_DeleteLink) at DocumentsLV.pcf: line 103, column 85
    function available_33 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkAvailable(document, undeletableDocumentPublicIds)
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 41, column 24
    function condition_10 () : java.lang.Boolean {
      return document.Obsolete
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 44, column 35
    function condition_11 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkVisible(document) and documentsActionsHelper.isDeleteDocumentLinkAvailable(document, undeletableDocumentPublicIds)
    }
    
    // 'condition' attribute on ToolbarFlag at DocumentsLV.pcf: line 38, column 34
    function condition_9 () : java.lang.Boolean {
      return perm.Document.edit(document)
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon) at DocumentsLV.pcf: line 51, column 32
    function icon_12 () : java.lang.String {
      return document.Icon
    }
    
    // 'icon' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 77, column 77
    function icon_20 () : java.lang.String {
      return documentsActionsHelper.DocumentMetadataActionsAvailable ? "info_16.png" : "info_16_disabled.png"
    }
    
    // 'icon' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 86, column 90
    function icon_25 () : java.lang.String {
      return documentsActionsHelper.isDownloadDocumentContentAvailable(document) ? "download_document_16.png" : "download_document_disabled_16.png" 
    }
    
    // 'icon' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 94, column 88
    function icon_31 () : java.lang.String {
      return documentsActionsHelper.isUploadDocumentContentAvailable(document) ? "upload_document_16.png" : "upload_document_disabled_16.png"
    }
    
    // 'icon' attribute on Link (id=DocumentsLV_DeleteLink) at DocumentsLV.pcf: line 103, column 85
    function icon_36 () : java.lang.String {
      return documentsActionsHelper.isDeleteDocumentLinkAvailable(document, undeletableDocumentPublicIds) ? "ico_delete.png" : "ico_delete_disabled.png" 
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 66, column 87
    function label_15 () : java.lang.Object {
      return document.Name
    }
    
    // 'label' attribute on Link (id=DocumentsLV_ActionsDisabled) at DocumentsLV.pcf: line 108, column 75
    function label_39 () : java.lang.Object {
      return documentsActionsHelper.AsynchronousActionsMessage
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentsLV.pcf: line 66, column 87
    function tooltip_16 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at DocumentsLV.pcf: line 77, column 77
    function tooltip_21 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 86, column 90
    function tooltip_26 () : java.lang.String {
      return documentsActionsHelper.DownloadDocumentContentTooltip
    }
    
    // 'tooltip' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 94, column 88
    function tooltip_32 () : java.lang.String {
      return documentsActionsHelper.UploadDocumentContentTooltip
    }
    
    // 'tooltip' attribute on Link (id=DocumentsLV_DeleteLink) at DocumentsLV.pcf: line 103, column 85
    function tooltip_37 () : java.lang.String {
      return documentsActionsHelper.DeleteDocumentTooltip(document, undeletableDocumentPublicIds)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type) at DocumentsLV.pcf: line 115, column 45
    function valueRoot_42 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type) at DocumentsLV.pcf: line 115, column 45
    function value_40 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status) at DocumentsLV.pcf: line 120, column 51
    function value_43 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author) at DocumentsLV.pcf: line 125, column 36
    function value_46 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified) at DocumentsLV.pcf: line 134, column 24
    function value_49 () : java.util.Date {
      return document.DateModified
    }
    
    // 'visible' attribute on Link (id=DownloadLink) at DocumentsLV.pcf: line 86, column 90
    function visible_23 () : java.lang.Boolean {
      return documentsActionsHelper.isDownloadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=UploadLink) at DocumentsLV.pcf: line 94, column 88
    function visible_28 () : java.lang.Boolean {
      return documentsActionsHelper.isUploadDocumentContentVisible(document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_DeleteLink) at DocumentsLV.pcf: line 103, column 85
    function visible_34 () : java.lang.Boolean {
      return documentsActionsHelper.isDeleteDocumentLinkVisible(document)
    }
    
    // 'visible' attribute on Link (id=DocumentsLV_ActionsDisabled) at DocumentsLV.pcf: line 108, column 75
    function visible_38 () : java.lang.Boolean {
      return documentsActionsHelper.isDocumentPending(document)
    }
    
    // 'visible' attribute on LinkCell (id=HiddenDocument) at DocumentsLV.pcf: line 141, column 61
    function visible_53 () : java.lang.Boolean {
      return documentSearchCriteria.IncludeObsoletes
    }
    
    property get document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  
}