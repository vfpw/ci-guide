package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimLossDetailsDV.Gl.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimLossDetailsDV_Gl extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim) : void {
    __widgetOf(this, pcf.NewClaimLossDetailsDV_Gl, SECTION_WIDGET_CLASS).setVariables(false, {$Claim})
  }
  
  function refreshVariables ($Claim :  Claim) : void {
    __widgetOf(this, pcf.NewClaimLossDetailsDV_Gl, SECTION_WIDGET_CLASS).setVariables(true, {$Claim})
  }
  
  
}