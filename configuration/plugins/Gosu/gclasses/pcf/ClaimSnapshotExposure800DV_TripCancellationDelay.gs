package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/800/ClaimSnapshotExposure800DV.TripCancellationDelay.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotExposure800DV_TripCancellationDelay extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $Exposure :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotExposure800DV_TripCancellationDelay, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $Exposure})
  }
  
  function refreshVariables ($Claim :  Claim, $Exposure :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotExposure800DV_TripCancellationDelay, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $Exposure})
  }
  
  
}