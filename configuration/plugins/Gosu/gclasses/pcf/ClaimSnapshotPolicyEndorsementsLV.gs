package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/default/ClaimSnapshotPolicyEndorsementsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotPolicyEndorsementsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyEndorsementsLV, SECTION_WIDGET_CLASS).setVariables(false, {$Claim, $SnapshotParam})
  }
  
  function refreshVariables ($Claim :  Claim, $SnapshotParam :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotPolicyEndorsementsLV, SECTION_WIDGET_CLASS).setVariables(true, {$Claim, $SnapshotParam})
  }
  
  
}