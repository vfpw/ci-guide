package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/reinsurance/AgreementDetailsDV.FacNetExcessOfLossRIAgreement.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AgreementDetailsDV_FacNetExcessOfLossRIAgreement extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($agreement :  RIAgreement) : void {
    __widgetOf(this, pcf.AgreementDetailsDV_FacNetExcessOfLossRIAgreement, SECTION_WIDGET_CLASS).setVariables(false, {$agreement})
  }
  
  function refreshVariables ($agreement :  RIAgreement) : void {
    __widgetOf(this, pcf.AgreementDetailsDV_FacNetExcessOfLossRIAgreement, SECTION_WIDGET_CLASS).setVariables(true, {$agreement})
  }
  
  
}