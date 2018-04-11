package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/activity/ActivitySansNoteDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivitySansNoteDV_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/workspace/activity/ActivitySansNoteDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivitySansNoteDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 14, column 50
    function def_onEnter_0 (def :  pcf.ActivityDetailsInputSet) : void {
      def.onEnter(Activity)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 18, column 48
    function def_onEnter_2 (def :  pcf.ActivityOwnerInputSet) : void {
      def.onEnter(Activity)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 21, column 51
    function def_onEnter_4 (def :  pcf.ActivityDocumentInputSet) : void {
      def.onEnter(Activity)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 25, column 51
    function def_onEnter_6 (def :  pcf.ActivityTrackingInputSet) : void {
      def.onEnter(Activity)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 14, column 50
    function def_refreshVariables_1 (def :  pcf.ActivityDetailsInputSet) : void {
      def.refreshVariables(Activity)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 18, column 48
    function def_refreshVariables_3 (def :  pcf.ActivityOwnerInputSet) : void {
      def.refreshVariables(Activity)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 21, column 51
    function def_refreshVariables_5 (def :  pcf.ActivityDocumentInputSet) : void {
      def.refreshVariables(Activity)
    }
    
    // 'def' attribute on InputSetRef at ActivitySansNoteDV.default.pcf: line 25, column 51
    function def_refreshVariables_7 (def :  pcf.ActivityTrackingInputSet) : void {
      def.refreshVariables(Activity)
    }
    
    property get Activity () : Activity {
      return getRequireValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setRequireValue("Activity", 0, $arg)
    }
    
    
  }
  
  
}