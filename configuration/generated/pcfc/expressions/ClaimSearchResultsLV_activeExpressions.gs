package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.active.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSearchResultsLV_activeExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.active.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSearchResultsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.active.pcf: line 20, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<ClaimSearchView> {
      return claimSearchResults == null ? null : claimSearchResults.getActiveClaimSearchResults() as gw.api.database.IQueryBeanResult<ClaimSearchView>
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.active.pcf: line 24, column 20
    function initialValue_1 () : User {
      return User.util.CurrentUser
    }
    
    // 'sortBy' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 102, column 58
    function sortValue_10 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignmentStatus
    }
    
    // 'sortBy' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 102, column 58
    function sortValue_11 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignedUser
    }
    
    // 'sortBy' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 102, column 58
    function sortValue_12 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignedQueue
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 108, column 43
    function sortValue_13 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.State
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 134, column 61
    function sortValue_15 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.ReportedDate
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 139, column 61
    function sortValue_17 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.AssignedGroup
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 145, column 61
    function sortValue_19 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.LOBCode
    }
    
    // 'sortBy' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 49, column 53
    function sortValue_2 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.Flagged
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 151, column 61
    function sortValue_21 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.JurisdictionState
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 56, column 48
    function sortValue_3 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.ClaimNumber
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 61, column 50
    function sortValue_4 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.InsuredDenorm
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 66, column 49
    function sortValue_5 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.PolicyNumber
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 72, column 63
    function sortValue_7 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.ClaimantDenorm
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 96, column 45
    function sortValue_9 (ClaimSearchView :  entity.ClaimSearchView) : java.lang.Object {
      return ClaimSearchView.LossDate
    }
    
    // 'value' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 32, column 82
    function value_81 () : gw.api.database.IQueryBeanResult<entity.ClaimSearchView> {
      return ClaimSearchViewList
    }
    
    // 'visible' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 134, column 61
    function visible_14 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingCSV()
    }
    
    // 'visible' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 72, column 63
    function visible_6 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 77, column 62
    function visible_8 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    property get ClaimSearchViewList () : gw.api.database.IQueryBeanResult<ClaimSearchView> {
      return getVariableValue("ClaimSearchViewList", 0) as gw.api.database.IQueryBeanResult<ClaimSearchView>
    }
    
    property set ClaimSearchViewList ($arg :  gw.api.database.IQueryBeanResult<ClaimSearchView>) {
      setVariableValue("ClaimSearchViewList", 0, $arg)
    }
    
    property get CurrentUser () : User {
      return getVariableValue("CurrentUser", 0) as User
    }
    
    property set CurrentUser ($arg :  User) {
      setVariableValue("CurrentUser", 0, $arg)
    }
    
    property get claimSearchResults () : gw.api.search.ClaimSearchResults {
      return getRequireValue("claimSearchResults", 0) as gw.api.search.ClaimSearchResults
    }
    
    property set claimSearchResults ($arg :  gw.api.search.ClaimSearchResults) {
      setRequireValue("claimSearchResults", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.active.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends IteratorEntryExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on Link (id=Claimant) at ClaimSearchResultsLV.active.pcf: line 85, column 37
    function label_41 () : java.lang.Object {
      return claimantName
    }
    
    // 'visible' attribute on Link (id=ClaimantSeperator) at ClaimSearchResultsLV.active.pcf: line 89, column 111
    function visible_42 () : java.lang.Boolean {
      return claimantList.length > 1 and claimantName != claimantList[claimantList.length - 1]
    }
    
    property get claimantName () : java.lang.String {
      return getIteratedValue(2) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchResultsLV.active.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimSearchResultsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber) at ClaimSearchResultsLV.active.pcf: line 56, column 48
    function action_27 () : void {
      ClaimForward.go(ClaimSearchView.Claim)
    }
    
    // 'action' attribute on TextCell (id=ClaimNumber) at ClaimSearchResultsLV.active.pcf: line 56, column 48
    function action_dest_28 () : pcf.api.Destination {
      return pcf.ClaimForward.createDestination(ClaimSearchView.Claim)
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchResultsLV.active.pcf: line 36, column 26
    function initialValue_22 () : String[] {
      return ClaimSearchView.getClaimantNames()
    }
    
    // RowIterator (id=ClaimSearchResultsIterator) at ClaimSearchResultsLV.active.pcf: line 32, column 82
    function initializeVariables_79 () : void {
        claimantList = ClaimSearchView.getClaimantNames();

    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged) at ClaimSearchResultsLV.active.pcf: line 49, column 53
    function valueRoot_25 () : java.lang.Object {
      return ClaimSearchView
    }
    
    // 'value' attribute on BooleanRadioCell (id=Flagged) at ClaimSearchResultsLV.active.pcf: line 49, column 53
    function value_23 () : java.lang.Boolean {
      return ClaimSearchView.CurrentlyFlagged
    }
    
    // 'value' attribute on TextCell (id=ClaimNumber) at ClaimSearchResultsLV.active.pcf: line 56, column 48
    function value_26 () : java.lang.String {
      return ClaimSearchView.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=Insured) at ClaimSearchResultsLV.active.pcf: line 61, column 50
    function value_31 () : java.lang.String {
      return ClaimSearchView.InsuredDenorm
    }
    
    // 'value' attribute on TextCell (id=PolicyID) at ClaimSearchResultsLV.active.pcf: line 66, column 49
    function value_34 () : java.lang.String {
      return ClaimSearchView.PolicyNumber
    }
    
    // 'value' attribute on TextCell (id=InjuredWorker) at ClaimSearchResultsLV.active.pcf: line 72, column 63
    function value_38 () : java.lang.String {
      return ClaimSearchView.ClaimantDenorm
    }
    
    // 'value' attribute on LinkIterator (id=ClaimantName) at ClaimSearchResultsLV.active.pcf: line 82, column 44
    function value_43 () : java.lang.String[] {
      return claimantList
    }
    
    // 'value' attribute on DateCell (id=LossDate) at ClaimSearchResultsLV.active.pcf: line 96, column 45
    function value_45 () : java.util.Date {
      return ClaimSearchView.LossDate
    }
    
    // 'value' attribute on TextCell (id=Assignee) at ClaimSearchResultsLV.active.pcf: line 102, column 58
    function value_48 () : java.lang.String {
      return ClaimSearchView.AssigneeDisplayString
    }
    
    // 'value' attribute on TypeKeyCell (id=Status) at ClaimSearchResultsLV.active.pcf: line 108, column 43
    function value_51 () : typekey.ClaimState {
      return ClaimSearchView.State
    }
    
    // 'value' attribute on CurrencyCell (id=RemainingReserves) at ClaimSearchResultsLV.active.pcf: line 115, column 54
    function value_54 () : gw.api.financials.CurrencyAmount {
      return ClaimSearchView.RemainingReserves
    }
    
    // 'value' attribute on CurrencyCell (id=FuturePayments) at ClaimSearchResultsLV.active.pcf: line 122, column 51
    function value_57 () : gw.api.financials.CurrencyAmount {
      return ClaimSearchView.FuturePayments
    }
    
    // 'value' attribute on CurrencyCell (id=TotalPayments) at ClaimSearchResultsLV.active.pcf: line 129, column 50
    function value_60 () : gw.api.financials.CurrencyAmount {
      return ClaimSearchView.TotalPayments
    }
    
    // 'value' attribute on DateCell (id=NoticeDate) at ClaimSearchResultsLV.active.pcf: line 134, column 61
    function value_64 () : java.util.Date {
      return ClaimSearchView.ReportedDate
    }
    
    // 'value' attribute on TextCell (id=AssignedGroup) at ClaimSearchResultsLV.active.pcf: line 139, column 61
    function value_68 () : java.lang.String {
      return ClaimSearchView.AssignedGroup
    }
    
    // 'value' attribute on TypeKeyCell (id=LOBCode) at ClaimSearchResultsLV.active.pcf: line 145, column 61
    function value_72 () : typekey.LOBCode {
      return ClaimSearchView.LOBCode
    }
    
    // 'value' attribute on TypeKeyCell (id=StateOfJurisdiction) at ClaimSearchResultsLV.active.pcf: line 151, column 61
    function value_76 () : typekey.Jurisdiction {
      return ClaimSearchView.JurisdictionState
    }
    
    // 'visible' attribute on TextCell (id=InjuredWorker) at ClaimSearchResultsLV.active.pcf: line 72, column 63
    function visible_37 () : java.lang.Boolean {
      return (CurrentUser.LossType == LossType.TC_WC)
    }
    
    // 'visible' attribute on LinkCell (id=Claimant) at ClaimSearchResultsLV.active.pcf: line 77, column 62
    function visible_44 () : java.lang.Boolean {
      return (CurrentUser.LossType != LossType.TC_WC)
    }
    
    // 'visible' attribute on DateCell (id=NoticeDate) at ClaimSearchResultsLV.active.pcf: line 134, column 61
    function visible_63 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingCSV()
    }
    
    property get ClaimSearchView () : entity.ClaimSearchView {
      return getIteratedValue(1) as entity.ClaimSearchView
    }
    
    property get claimantList () : String[] {
      return getVariableValue("claimantList", 1) as String[]
    }
    
    property set claimantList ($arg :  String[]) {
      setVariableValue("claimantList", 1, $arg)
    }
    
    
  }
  
  
}