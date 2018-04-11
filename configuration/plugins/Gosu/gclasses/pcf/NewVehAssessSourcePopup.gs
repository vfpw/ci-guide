package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/assessment/AssessmentSource/NewVehAssessSourcePopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewVehAssessSourcePopup extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.NewVehAssessSourcePopup, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination (VehicleIncident :  VehicleIncident) : pcf.api.Destination {
    return __newDestination(config(), {VehicleIncident}, 0)
  }
  
  function pickValueAndCommit (value :  AssessmentSource) : void {
    __widgetOf(this, pcf.NewVehAssessSourcePopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (VehicleIncident :  VehicleIncident) : pcf.api.Location {
    return __newDestination(config(), {VehicleIncident}, 0).push()
  }
  
  
}