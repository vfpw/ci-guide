package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotVehicleIncidentScreen.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotVehicleIncidentScreen_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $IncidentParam :  dynamic.Dynamic, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotVehicleIncidentScreen_default, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $IncidentParam, $SnapshotParam})
  }
  
  function refreshVariables ($Claim :  Claim, $IncidentParam :  dynamic.Dynamic, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotVehicleIncidentScreen_default, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $IncidentParam, $SnapshotParam})
  }
  
  
}