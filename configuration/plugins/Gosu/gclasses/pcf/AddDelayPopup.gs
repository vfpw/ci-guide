package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/AddDelayPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AddDelayPopup extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.AddDelayPopup, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination (serviceRequest :  ServiceRequest) : pcf.api.Destination {
    return __newDestination(config(), {serviceRequest}, 0)
  }
  
  static function push (serviceRequest :  ServiceRequest) : pcf.api.Location {
    return __newDestination(config(), {serviceRequest}, 0).push()
  }
  
  
}