package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.SIUClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimIndicatorInputSet_SIUClaimIndicatorExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.SIUClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimIndicatorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'icon' attribute on Link (id=SIUStatusIcon) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 18, column 35
    function icon_1 () : java.lang.String {
      return indicator.Icon
    }
    
    // 'label' attribute on Link (id=SIUStatusText) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 21, column 33
    function label_3 () : java.lang.Object {
      return indicator.Text
    }
    
    // 'label' attribute on TypeKeyInput (id=SIURefer) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 32, column 34
    function label_6 () : java.lang.Object {
      return DisplayKey.get("Web.Claim.SIUClaimIndicator.ReferSIULabel") 
    }
    
    // 'tooltip' attribute on Link (id=SIUStatusIcon) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 18, column 35
    function tooltip_2 () : java.lang.String {
      return indicator.HoverText
    }
    
    // 'value' attribute on TypeKeyInput (id=SIURefer) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 32, column 34
    function valueRoot_10 () : java.lang.Object {
      return indicator.Claim
    }
    
    // 'value' attribute on TextInput (id=SIUScore) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 27, column 38
    function value_4 () : java.lang.Integer {
      return util.SIUTotalScore.getSIUTotalScore(indicator.Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=SIURefer) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 32, column 34
    function value_7 () : typekey.YesNo {
      return indicator.Claim.SIEscalateSIU
    }
    
    // 'visible' attribute on Link (id=SIUStatusIcon) at ClaimIndicatorInputSet.SIUClaimIndicator.pcf: line 18, column 35
    function visible_0 () : java.lang.Boolean {
      return indicator.IsOn
    }
    
    property get indicator () : ClaimIndicator {
      return getRequireValue("indicator", 0) as ClaimIndicator
    }
    
    property set indicator ($arg :  ClaimIndicator) {
      setRequireValue("indicator", 0, $arg)
    }
    
    
  }
  
  
}