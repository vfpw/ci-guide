package edge.capabilities.claim.lob.impl.personalauto

uses edge.capabilities.claim.lob.impl.personalauto.dto.VehicleIncidentDTO

/**
 * Plugin to work with vehicle incidents.
 */
interface IVehicleIncidentPlugin {
  public function toDTO(incident : VehicleIncident) : VehicleIncidentDTO
  
  
  public function updateIncident(incident : VehicleIncident, dto : VehicleIncidentDTO)
}
