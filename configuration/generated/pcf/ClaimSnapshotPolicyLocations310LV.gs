package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/310/ClaimSnapshotPolicyLocations310LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotPolicyLocations310LV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyLocations310LV, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $SnapshotParam})
  }
  
  function refreshVariables ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyLocations310LV, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $SnapshotParam})
  }
  
  
}