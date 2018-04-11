package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSummaryExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/ClaimSummary.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSummaryExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    static function __constructorIndex (Claim :  Claim, excludeConfidentialNotes :  boolean) : int {
      return 1
    }
    
    // 'beforeCommit' attribute on Page (id=ClaimSummary) at ClaimSummary.pcf: line 10, column 64
    function beforeCommit_20 (pickedValue :  java.lang.Object) : void {
      operationCallbackHelper.BeforeCommitAction()
    }
    
    // 'canVisit' attribute on Page (id=ClaimSummary) at ClaimSummary.pcf: line 10, column 64
    static function canVisit_21 (Claim :  Claim, excludeConfidentialNotes :  boolean) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.System.viewclaimsummary and (Claim.State != ClaimState.TC_DRAFT)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 32, column 56
    function def_onEnter_1 (def :  pcf.ClaimSummaryHeadlinePanelSet) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 61, column 51
    function def_onEnter_11 (def :  pcf.ClaimSummaryActivitiesLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 68, column 75
    function def_onEnter_14 (def :  pcf.ClaimSummaryMattersLV) : void {
      def.onEnter(Claim.Matters, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 74, column 77
    function def_onEnter_16 (def :  pcf.ClaimSummaryAssociatedClaimsLV) : void {
      def.onEnter(Claim, Claim.Associations)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 82, column 104
    function def_onEnter_18 (def :  pcf.NotesLV) : void {
      def.onEnter(excludeConfidentialNotes ? Claim.NonconfidentialNotes : Claim.ViewableNotes)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 34, column 41
    function def_onEnter_3 (def :  pcf.ClaimSummaryDV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 39, column 74
    function def_onEnter_5 (def :  pcf.ServiceRequestLV) : void {
      def.onEnter(Claim, true, operationCallbackHelper)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 45, column 67
    function def_onEnter_7 (def :  pcf.ClaimSummaryExposuresLV) : void {
      def.onEnter(Claim, Claim.Exposures)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 55, column 75
    function def_onEnter_9 (def :  pcf.PeopleInvolvedLV) : void {
      def.onEnter(Claim, Claim.getContactsWithPreload())
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 55, column 75
    function def_refreshVariables_10 (def :  pcf.PeopleInvolvedLV) : void {
      def.refreshVariables(Claim, Claim.getContactsWithPreload())
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 61, column 51
    function def_refreshVariables_12 (def :  pcf.ClaimSummaryActivitiesLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 68, column 75
    function def_refreshVariables_15 (def :  pcf.ClaimSummaryMattersLV) : void {
      def.refreshVariables(Claim.Matters, Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 74, column 77
    function def_refreshVariables_17 (def :  pcf.ClaimSummaryAssociatedClaimsLV) : void {
      def.refreshVariables(Claim, Claim.Associations)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 82, column 104
    function def_refreshVariables_19 (def :  pcf.NotesLV) : void {
      def.refreshVariables(excludeConfidentialNotes ? Claim.NonconfidentialNotes : Claim.ViewableNotes)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 32, column 56
    function def_refreshVariables_2 (def :  pcf.ClaimSummaryHeadlinePanelSet) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 34, column 41
    function def_refreshVariables_4 (def :  pcf.ClaimSummaryDV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 39, column 74
    function def_refreshVariables_6 (def :  pcf.ServiceRequestLV) : void {
      def.refreshVariables(Claim, true, operationCallbackHelper)
    }
    
    // 'def' attribute on PanelRef at ClaimSummary.pcf: line 45, column 67
    function def_refreshVariables_8 (def :  pcf.ClaimSummaryExposuresLV) : void {
      def.refreshVariables(Claim, Claim.Exposures)
    }
    
    // 'initialValue' attribute on Variable at ClaimSummary.pcf: line 25, column 73
    function initialValue_0 () : gw.vendormanagement.ServiceRequestOperationCallbackHelper {
      return new gw.vendormanagement.ServiceRequestOperationCallbackHelper()
    }
    
    // Page (id=ClaimSummary) at ClaimSummary.pcf: line 10, column 64
    static function parent_22 (Claim :  Claim, excludeConfidentialNotes :  boolean) : pcf.api.Destination {
      return pcf.ClaimSummaryGroup.createDestination(Claim)
    }
    
    // 'visible' attribute on PanelRef at ClaimSummary.pcf: line 68, column 75
    function visible_13 () : java.lang.Boolean {
      return perm.Matter.view(Claim) and perm.System.viewmatters
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimSummary {
      return super.CurrentLocation as pcf.ClaimSummary
    }
    
    property get excludeConfidentialNotes () : boolean {
      return getVariableValue("excludeConfidentialNotes", 0) as java.lang.Boolean
    }
    
    property set excludeConfidentialNotes ($arg :  boolean) {
      setVariableValue("excludeConfidentialNotes", 0, $arg)
    }
    
    property get operationCallbackHelper () : gw.vendormanagement.ServiceRequestOperationCallbackHelper {
      return getVariableValue("operationCallbackHelper", 0) as gw.vendormanagement.ServiceRequestOperationCallbackHelper
    }
    
    property set operationCallbackHelper ($arg :  gw.vendormanagement.ServiceRequestOperationCallbackHelper) {
      setVariableValue("operationCallbackHelper", 0, $arg)
    }
    
    
  }
  
  
}