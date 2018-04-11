package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/TransactionSetDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionSetDocumentsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/TransactionSetDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TransactionSetDocumentsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function action_11 () : void {
      DocumentDetailsPopup.push(document, false)
    }
    
    // 'action' attribute on Link (id=DocumentsLV_RemoveLink) at TransactionSetDocumentsLV.pcf: line 57, column 38
    function action_16 () : void {
      TransactionSet.removeLinkedDocument(document)
    }
    
    // 'action' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function action_7 () : void {
      document.downloadContent()
    }
    
    // 'action' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function action_dest_12 () : pcf.api.Destination {
      return pcf.DocumentDetailsPopup.createDestination(document, false)
    }
    
    // 'available' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function available_10 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'available' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function available_6 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document)
    }
    
    // 'icon' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function icon_13 () : java.lang.String {
      return documentsActionsHelper.DocumentMetadataActionsAvailable ? "info_16.png" : "info_16_disabled.png"
    }
    
    // 'icon' attribute on Link (id=DocumentsLV_RemoveLink) at TransactionSetDocumentsLV.pcf: line 57, column 38
    function icon_17 () : java.lang.String {
      return documentsActionsHelper.DocumentMetadataActionsAvailable ? "remove_document_16.png" : "remove_document_disabled_16.png"  
    }
    
    // 'icon' attribute on BooleanRadioCell (id=Icon) at TransactionSetDocumentsLV.pcf: line 27, column 32
    function icon_5 () : java.lang.String {
      return document.Icon
    }
    
    // 'label' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function label_8 () : java.lang.Object {
      return document.Name
    }
    
    // 'tooltip' attribute on Link (id=ViewPropertiesLink) at TransactionSetDocumentsLV.pcf: line 51, column 77
    function tooltip_14 () : java.lang.String {
      return documentsActionsHelper.ViewDocumentPropertiesTooltip
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at TransactionSetDocumentsLV.pcf: line 40, column 87
    function tooltip_9 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type) at TransactionSetDocumentsLV.pcf: line 64, column 45
    function valueRoot_20 () : java.lang.Object {
      return document
    }
    
    // 'value' attribute on TypeKeyCell (id=Type) at TransactionSetDocumentsLV.pcf: line 64, column 45
    function value_18 () : typekey.DocumentType {
      return document.Type
    }
    
    // 'value' attribute on TypeKeyCell (id=Status) at TransactionSetDocumentsLV.pcf: line 69, column 51
    function value_21 () : typekey.DocumentStatusType {
      return document.Status
    }
    
    // 'value' attribute on TextCell (id=Author) at TransactionSetDocumentsLV.pcf: line 74, column 36
    function value_24 () : java.lang.String {
      return document.Author
    }
    
    // 'value' attribute on DateCell (id=DateModified) at TransactionSetDocumentsLV.pcf: line 83, column 24
    function value_27 () : java.util.Date {
      return document.DateModified
    }
    
    property get document () : entity.Document {
      return getIteratedValue(1) as entity.Document
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/newtransaction/shared/TransactionSetDocumentsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionSetDocumentsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at TransactionSetDocumentsLV.pcf: line 14, column 52
    function initialValue_0 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'value' attribute on RowIterator at TransactionSetDocumentsLV.pcf: line 64, column 45
    function sortValue_1 (document :  entity.Document) : java.lang.Object {
      return document.Type
    }
    
    // 'value' attribute on RowIterator at TransactionSetDocumentsLV.pcf: line 69, column 51
    function sortValue_2 (document :  entity.Document) : java.lang.Object {
      return document.Status
    }
    
    // 'value' attribute on RowIterator at TransactionSetDocumentsLV.pcf: line 74, column 36
    function sortValue_3 (document :  entity.Document) : java.lang.Object {
      return document.Author
    }
    
    // 'value' attribute on RowIterator at TransactionSetDocumentsLV.pcf: line 83, column 24
    function sortValue_4 (document :  entity.Document) : java.lang.Object {
      return document.DateModified
    }
    
    // 'value' attribute on RowIterator at TransactionSetDocumentsLV.pcf: line 20, column 37
    function value_30 () : entity.Document[] {
      return TransactionSet.LinkedDocuments.where( \ d -> perm.Document.view(d) )
    }
    
    property get TransactionSet () : TransactionSet {
      return getRequireValue("TransactionSet", 0) as TransactionSet
    }
    
    property set TransactionSet ($arg :  TransactionSet) {
      setRequireValue("TransactionSet", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    
  }
  
  
}