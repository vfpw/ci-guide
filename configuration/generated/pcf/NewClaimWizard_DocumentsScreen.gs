package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimWizard_DocumentsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimWizard_DocumentsScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $Wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.NewClaimWizard_DocumentsScreen, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $Wizard})
  }
  
  function refreshVariables ($Claim :  Claim, $Wizard :  gw.api.claim.NewClaimWizardInfo) : void {
    __widgetOf(this, pcf.NewClaimWizard_DocumentsScreen, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $Wizard})
  }
  
  
}