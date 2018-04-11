package edge.Plugin.pcintegration.pc900

uses java.util.Map
uses gw.plugin.InitializablePlugin
uses edge.wsi.remote.gw.webservice.pc.pc900.edgeproducerapi.types.complex.ProducerCodeDTO
uses edge.wsi.remote.gw.webservice.pc.pc900.edgeproducerapi.EdgeProducerAPI

class ProducerCodeRetrieverPlugin implements InitializablePlugin {

  function retrieveProducerCodesByUserName(userName : String) : List<ProducerCodeDTO>{

    return ProducerCodeService.getProducerCodesByUserName(userName)

  }

  private property get ProducerCodeService() : EdgeProducerAPI  {

    var pcService = new EdgeProducerAPI()

    return pcService
  }

  override function setParameters(params: Map) {

  }
}
