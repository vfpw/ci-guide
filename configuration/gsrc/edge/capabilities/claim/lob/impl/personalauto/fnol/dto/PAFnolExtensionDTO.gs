package edge.capabilities.claim.lob.impl.personalauto.fnol.dto

uses edge.jsonmapper.JsonProperty
uses edge.capabilities.claim.lob.shared.incidents.dto.FixedPropertyIncidentDTO
uses edge.capabilities.claim.lob.impl.personalauto.dto.VehicleIncidentDTO
uses edge.capabilities.claim.lob.impl.personalauto.dto.VehicleDTO
uses edge.capabilities.claim.lob.fnol.dto.IFnolLobExtensionDTO

/**
 * PA LOB extension for a fnol plugin.
 */
class PAFnolExtensionDTO implements IFnolLobExtensionDTO{
  @JsonProperty  
  var _fixedPropertyIncident : FixedPropertyIncidentDTO as FixedPropertyIncident

  @JsonProperty  // Not in PAFnolLobUpdateExtensionDTO
  var _vehicles : VehicleDTO[] as Vehicles
  
  @JsonProperty
  var _vehicleIncidents : VehicleIncidentDTO[] as VehicleIncidents

}
