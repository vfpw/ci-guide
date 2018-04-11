package edge.capabilities.claim.lob.impl.personalauto.fnol
uses edge.capabilities.claim.lob.fnol.ILobFnolPlugin
uses edge.capabilities.claim.lob.impl.personalauto.IVehicleIncidentPlugin
uses edge.capabilities.claim.lob.impl.personalauto.util.VehicleUtil
uses edge.capabilities.claim.lob.shared.incidents.util.IncidentUtil
uses edge.util.mapping.Mapper
uses edge.util.mapping.ArrayUpdater
uses edge.capabilities.claim.lob.impl.personalauto.dto.VehicleIncidentDTO
uses edge.security.authorization.IAuthorizerProviderPlugin
uses edge.capabilities.claim.lob.impl.personalauto.PaTypeCode
uses edge.capabilities.claim.lob.impl.personalauto.fnol.dto.PAFnolExtensionDTO
uses edge.di.annotations.InjectableNode

/**
 * Personal auto extension for the fnol wizard.
 */
class PAFnolPlugin implements ILobFnolPlugin < PAFnolExtensionDTO, PAFnolExtensionDTO > {
  
  private var _incidentPlugin : IVehicleIncidentPlugin

  private var _mapper : Mapper as Mapper

  private var _vehicleIncidentUpdater : ArrayUpdater<Claim,VehicleIncident,VehicleIncidentDTO> as VehicleIncidentUpdater

  @InjectableNode
  @Param("incidentPlugin", "Plugin used to deal with vehiicle incidents")
  construct(incidentPlugin : IVehicleIncidentPlugin,authzProvider:IAuthorizerProviderPlugin) {
    this._incidentPlugin = incidentPlugin
    this._mapper = new Mapper(authzProvider)
    this._vehicleIncidentUpdater = new ArrayUpdater<Claim,VehicleIncident,VehicleIncidentDTO>(authzProvider){
      : ToCreateAndAdd = \ c,d -> {
        var v= new VehicleIncident()
        c.addToIncidents(v)
        return v
      },
      : ToRemove = \ c, v -> c.removeFromIncidents(v)
    }
  }


  override function toDTO(claim : Claim) : PAFnolExtensionDTO {
    if (claim.Policy.PolicyType != PaTypeCode.PersonalAuto) {
      return null
    }
    
    final var res = new PAFnolExtensionDTO ()
    res.Vehicles = Mapper.mapArray(claim.Policy.Vehicles*.Vehicle,\ v -> VehicleUtil.toDTO(claim, v))
    res.VehicleIncidents = Mapper.mapArray(claim.VehicleIncidentsOnly,\ v -> _incidentPlugin.toDTO(v))
    res.FixedPropertyIncident = Mapper.mapArray(claim.FixedPropertyIncidentsOnly,\ e -> IncidentUtil.toDTO(e)).first()
    
    return res
  }


  override function updateClaim(claim : Claim, dto : PAFnolExtensionDTO) {
    if (claim.Policy.PolicyType != PaTypeCode.PersonalAuto) {
      return
    }
        
    var claimFixedPropertyIncident = claim.FixedPropertyIncidentsOnly.first()
    
    if (dto.FixedPropertyIncident == null || dto.FixedPropertyIncident.PropertyDescription == null) {
      if (claimFixedPropertyIncident != null) {
        claim.removeFromIncidents(claimFixedPropertyIncident)
      }
    } else {
      if (claimFixedPropertyIncident == null) {
        claimFixedPropertyIncident = new FixedPropertyIncident()
        claimFixedPropertyIncident.Property.Address = claim.LossLocation
        claim.addToIncidents(claimFixedPropertyIncident)
      }
      IncidentUtil.updateBaseProperties(claimFixedPropertyIncident, dto.FixedPropertyIncident)
    }

    VehicleIncidentUpdater.updateArray(
        claim,
        claim.VehicleIncidentsOnly,
        dto.VehicleIncidents, \ vi,d -> _incidentPlugin.updateIncident(vi,d)
    )
  }
}
