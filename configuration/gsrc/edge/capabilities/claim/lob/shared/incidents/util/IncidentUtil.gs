package edge.capabilities.claim.lob.shared.incidents.util

uses java.lang.UnsupportedOperationException
uses edge.capabilities.claim.lob.shared.incidents.dto.FixedPropertyIncidentDTO

final class IncidentUtil {

  private construct() {
    throw new UnsupportedOperationException()
  }



  static function toDTO(incident : FixedPropertyIncident) : FixedPropertyIncidentDTO {
    if (incident == null) {
      return null
    }
    final var res = new FixedPropertyIncidentDTO()
    res.PublicID = incident.PublicID       
    res.Description = incident.Description
    res.PropertyDescription = incident.PropertyDesc        
    return res
  }


  static function updateBaseProperties(incident : FixedPropertyIncident, dto : FixedPropertyIncidentDTO) {
    incident.Description = dto.Description
    incident.PropertyDesc = dto.PropertyDescription
  }
}
