package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/activity/ActivityDetailScreen.editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailScreen_editableExpressions {
  @javax.annotation.Generated("config/web/pcf/workspace/activity/ActivityDetailScreen.editable.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Edit) at ActivityDetailScreen.editable.pcf: line 26, column 67
    function action_1 () : void {
      CurrentLocation.startEditing()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_AssignButton) at ActivityDetailScreen.editable.pcf: line 66, column 41
    function action_11 () : void {
      assignActivity()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_CreateEMailButton) at ActivityDetailScreen.editable.pcf: line 73, column 51
    function action_13 () : void {
      EmailWorksheet.push(Activity)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_ActionButton) at ActivityDetailScreen.editable.pcf: line 81, column 127
    function action_17 () : void {
      gw.api.activity.ActivityUtil.createDocumentFromTemplate(CurrentLocation,Activity)
    }
    
    // 'action' attribute on ToolbarButton (id=Update) at ActivityDetailScreen.editable.pcf: line 32, column 23
    function action_2 () : void {
      CurrentLocation.commit(); activityDetailHelper.doReturn(Activity)
    }
    
    // 'action' attribute on PickerToolbarButton (id=ActivityDetailScreen_AddDocumentButton) at ActivityDetailScreen.editable.pcf: line 90, column 100
    function action_20 () : void {
      PickExistingDocumentPopup.push(Activity.Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_NotesButton) at ActivityDetailScreen.editable.pcf: line 98, column 83
    function action_24 () : void {
      ActivityNotesPage.goInMain(Activity.Claim, Activity)
    }
    
    // 'action' attribute on ToolbarButton (id=Close) at ActivityDetailScreen.editable.pcf: line 104, column 68
    function action_26 () : void {
      gw.api.web.workspace.WorkspaceUtil.closeActiveWorksheet(); activityDetailHelper.worksheetClosed(Activity)
    }
    
    // 'action' attribute on ToolbarButton (id=Cancel) at ActivityDetailScreen.editable.pcf: line 38, column 23
    function action_3 () : void {
      CurrentLocation.cancel(); activityDetailHelper.doReturn(Activity)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_CompleteButton) at ActivityDetailScreen.editable.pcf: line 46, column 43
    function action_5 () : void {
      completeActivity()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_RecurButton) at ActivityDetailScreen.editable.pcf: line 52, column 40
    function action_7 () : void {
      completeActivityAndGoToNew()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_SkipButton) at ActivityDetailScreen.editable.pcf: line 59, column 39
    function action_9 () : void {
      skipActivity()
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_CreateEMailButton) at ActivityDetailScreen.editable.pcf: line 73, column 51
    function action_dest_14 () : pcf.api.Destination {
      return pcf.EmailWorksheet.createDestination(Activity)
    }
    
    // 'action' attribute on PickerToolbarButton (id=ActivityDetailScreen_AddDocumentButton) at ActivityDetailScreen.editable.pcf: line 90, column 100
    function action_dest_21 () : pcf.api.Destination {
      return pcf.PickExistingDocumentPopup.createDestination(Activity.Claim)
    }
    
    // 'action' attribute on ToolbarButton (id=ActivityDetailScreen_NotesButton) at ActivityDetailScreen.editable.pcf: line 98, column 83
    function action_dest_25 () : pcf.api.Destination {
      return pcf.ActivityNotesPage.createDestination(Activity.Claim, Activity)
    }
    
    // 'available' attribute on ToolbarButton (id=ActivityDetailScreen_ActionButton) at ActivityDetailScreen.editable.pcf: line 81, column 127
    function available_15 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentTemplateActionsAvailable
    }
    
    // 'available' attribute on PickerToolbarButton (id=ActivityDetailScreen_AddDocumentButton) at ActivityDetailScreen.editable.pcf: line 90, column 100
    function available_18 () : java.lang.Boolean {
      return documentsActionsHelper.DocumentMetadataActionsAvailable
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.editable.pcf: line 120, column 45
    function def_onEnter_30 (def :  pcf.ActivityDV_catastrophe_review) : void {
      def.onEnter(Activity)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.editable.pcf: line 120, column 45
    function def_onEnter_32 (def :  pcf.ActivityDV_default) : void {
      def.onEnter(Activity)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.editable.pcf: line 120, column 45
    function def_refreshVariables_31 (def :  pcf.ActivityDV_catastrophe_review) : void {
      def.refreshVariables(Activity)
    }
    
    // 'def' attribute on PanelRef at ActivityDetailScreen.editable.pcf: line 120, column 45
    function def_refreshVariables_33 (def :  pcf.ActivityDV_default) : void {
      def.refreshVariables(Activity)
    }
    
    // 'initialValue' attribute on Variable at ActivityDetailScreen.editable.pcf: line 20, column 52
    function initialValue_0 () : gw.document.DocumentsActionsUIHelper {
      return new gw.document.DocumentsActionsUIHelper()
    }
    
    // 'mode' attribute on PanelRef at ActivityDetailScreen.editable.pcf: line 120, column 45
    function mode_34 () : java.lang.Object {
      return Activity.ActivityPattern.Code
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=ActivityDetailScreen_AddDocumentButton) at ActivityDetailScreen.editable.pcf: line 90, column 100
    function onPick_22 (PickedValue :  Document) : void {
      gw.api.activity.ActivityUIHelper.onPickDocument(PickedValue, Activity)
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailScreen_AssignButton) at ActivityDetailScreen.editable.pcf: line 66, column 41
    function visible_10 () : java.lang.Boolean {
      return Activity.canAssign()
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailScreen_CreateEMailButton) at ActivityDetailScreen.editable.pcf: line 73, column 51
    function visible_12 () : java.lang.Boolean {
      return Activity.EmailTemplate != null
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailScreen_ActionButton) at ActivityDetailScreen.editable.pcf: line 81, column 127
    function visible_16 () : java.lang.Boolean {
      return (Activity.DocumentTemplate != null) and (Activity.DocumentTemplate != "") and Activity.canEdit()
    }
    
    // 'visible' attribute on PickerToolbarButton (id=ActivityDetailScreen_AddDocumentButton) at ActivityDetailScreen.editable.pcf: line 90, column 100
    function visible_19 () : java.lang.Boolean {
      return Activity.canEdit() and perm.Claim.view(Activity.Claim) and perm.System.viewdocs
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailScreen_NotesButton) at ActivityDetailScreen.editable.pcf: line 98, column 83
    function visible_23 () : java.lang.Boolean {
      return perm.Claim.view(Activity.Claim) and perm.System.viewclaimnotes
    }
    
    // 'visible' attribute on AlertBar (id=IDCSDisabledAlert) at ActivityDetailScreen.editable.pcf: line 109, column 66
    function visible_27 () : java.lang.Boolean {
      return not documentsActionsHelper.ContentSourceEnabled
    }
    
    // 'visible' attribute on AlertBar (id=IDCSUnavailableAlert) at ActivityDetailScreen.editable.pcf: line 113, column 70
    function visible_28 () : java.lang.Boolean {
      return documentsActionsHelper.ShowContentServerDownWarning
    }
    
    // 'visible' attribute on AlertBar (id=IDMSUnavailableAlert) at ActivityDetailScreen.editable.pcf: line 117, column 71
    function visible_29 () : java.lang.Boolean {
      return documentsActionsHelper.ShowMetadataServerDownWarning
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailScreen_CompleteButton) at ActivityDetailScreen.editable.pcf: line 46, column 43
    function visible_4 () : java.lang.Boolean {
      return Activity.canComplete()
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailScreen_RecurButton) at ActivityDetailScreen.editable.pcf: line 52, column 40
    function visible_6 () : java.lang.Boolean {
      return Activity.canRecur()
    }
    
    // 'visible' attribute on ToolbarButton (id=ActivityDetailScreen_SkipButton) at ActivityDetailScreen.editable.pcf: line 59, column 39
    function visible_8 () : java.lang.Boolean {
      return Activity.canSkip()
    }
    
    property get Activity () : Activity {
      return getRequireValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setRequireValue("Activity", 0, $arg)
    }
    
    property get activityDetailHelper () : gw.api.activity.ActivityDetailHelper {
      return getRequireValue("activityDetailHelper", 0) as gw.api.activity.ActivityDetailHelper
    }
    
    property set activityDetailHelper ($arg :  gw.api.activity.ActivityDetailHelper) {
      setRequireValue("activityDetailHelper", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get hasParent () : boolean {
      return getRequireValue("hasParent", 0) as java.lang.Boolean
    }
    
    property set hasParent ($arg :  boolean) {
      setRequireValue("hasParent", 0, $arg)
    }
    
    
    /* completes and commits the activity */
    function completeActivity() {
      if (!CurrentLocation.isInEditMode()) {
        CurrentLocation.startEditing()
      }
      Activity.complete()
      var commited = false
      try {
        CurrentLocation.commit()
        commited = true
      } finally {
        if (!commited) {
          Activity.Status = Activity.getOriginalValue(Activity#Status)
        }
      }
    }
    
      /* completes and commits the activity, and navigates to the NewActivity page */
      function completeActivityAndGoToNew() {
        completeActivity()
        NewActivity.goInMain(Activity.Claim, Activity.ActivityPattern)
      }
    
      /* skips and commits the activity */
      function skipActivity() {
        if (!CurrentLocation.isInEditMode()) {
          CurrentLocation.startEditing()
        }
        Activity.skip()
        commitAndClose()
      }
    
      function assignActivity() {
        commitAndClose()
        if (hasParent) {
          ActivityDetailForward.goInWorkspace(Activity.Claim, Activity) // original behavior
        } else {
          pcf.ActivityDetailViaClaimWorksheet.goInWorkspace(Activity.Claim, Activity)
        }
        gw.api.assignment.AssignmentUtil.assignActivity(Activity)
      }
    
      function commitAndClose() {
        CurrentLocation.commit()
        activityDetailHelper.worksheetClosed(Activity)
      }
    
    
  }
  
  
}