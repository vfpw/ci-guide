package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotGeneral800PanelSet.Pr.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotGeneral800PanelSet_Pr extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $Snapshot :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotGeneral800PanelSet_Pr, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $Snapshot})
  }
  
  function refreshVariables ($Claim :  Claim, $Snapshot :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotGeneral800PanelSet_Pr, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $Snapshot})
  }
  
  
}