package edge.capabilities.servicerequest.summary

uses java.util.ArrayList
uses edge.capabilities.servicerequest.summary.dto.ServiceRequestSummaryDTO
uses edge.util.mapping.Mapper
uses edge.security.authorization.IAuthorizerProviderPlugin
uses edge.di.annotations.ForAllGwNodes

class DefaultServiceRequestSummaryPlugin implements IServiceRequestSummaryPlugin{

  private var _mapper : Mapper as readonly Mapper

  @ForAllGwNodes
  construct(authzProvider:IAuthorizerProviderPlugin) {
    this._mapper = new Mapper(authzProvider)
  }

  private function setDueDate(sr : ServiceRequest, dto : ServiceRequestSummaryDTO){
    if (sr.expectedQuoteCompletionDateApplies()){
      dto.DueDate = sr.ExpectedQuoteCompletionDate
      dto.QuoteDateApplies = true
    }
    if (sr.expectedServiceCompletionDateApplies()){
      dto.DueDate = sr.ExpectedServiceCompletionDate
      dto.ServiceDateApplies = true
    }
  }

  private function setServices(sr: ServiceRequest, dto: ServiceRequestSummaryDTO) {
    var services = new ArrayList<String>()

    for (service in sr.Instruction.OrderedServices) {
      services.add(service.Service.DisplayName)
    }

    dto.Services = services.toTypedArray()
  }

  override function mapSummaries(srs: ServiceRequest[]): ServiceRequestSummaryDTO[] {
    return _mapper.mapArray(srs, \ sr -> toDTOImpl(sr))
  }


  /**
   * Converts service request into DTO <em>without</em> checking access.
   */
  protected function toDTOImpl(sr : ServiceRequest) : ServiceRequestSummaryDTO {
    final var dto = new ServiceRequestSummaryDTO()
    dto.PublicID = sr.PublicID
    dto.ServiceRequestNumber = sr.ServiceRequestNumber
    dto.ClaimID = sr.OwningClaim.ClaimNumber
    dto.Status = sr.Progress
    dto.CustomerContact = sr.Instruction.CustomerContact.getDisplayName()
    dto.PhoneNumber = sr.Instruction.CustomerContact.PrimaryPhoneValue
    dto.NextStep = sr.nextActionDefinition().NextAction.ActionName
    dto.NextStepCode = sr.nextActionDefinition().NextAction
    dto.NextStepOwnerIsSpecialist = sr.Specialist.equals(sr.nextActionDefinition().ActionOwner)
    dto.RequestKind = sr.Kind
    dto.ReferenceNumber = sr.ServiceRequestReferenceNumber
    var stateHandler = sr.createStateHandler()
    var nextActionDefaultOperation = sr.nextActionDefinition(stateHandler).DefaultOperation
    dto.DefaultOperation = sr.operationAvailable(nextActionDefaultOperation,true, stateHandler) ? nextActionDefaultOperation : null
    dto.IsReviseQuote = sr.nextActionDefinition(stateHandler).NextAction.Name == "ReviseQuote"
    dto.CanCancel = !typekey.ServiceRequestProgress.TF_TERMINAL.TypeKeys.contains(sr.Progress)
    setServices(sr, dto)
    setDueDate(sr, dto)

    return dto
  }
  
}
