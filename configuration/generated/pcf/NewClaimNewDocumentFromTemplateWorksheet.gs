package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newdocument/NewClaimNewDocumentFromTemplateWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimNewDocumentFromTemplateWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.NewClaimNewDocumentFromTemplateWorksheet, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestination(config(), {Claim}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (Claim :  Claim) : pcf.api.Location {
    return __newDestination(config(), {Claim}, 0).goInWorkspace()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestination(config(), {Claim}, 0).push()
  }
  
  
}