package edge.capabilities.claim.lob

uses edge.di.annotations.ForAllGwNodes

class AllSupportedLobsPlugin implements ISupportedLobsPlugin {

  @ForAllGwNodes("agentclaim")
  @ForAllGwNodes("agentfnol")
  @ForAllGwNodes("agentdocument")
  construct() {

  }

  override function getSupportedLobs(): PolicyType[] {
    return PolicyType.getTypeKeys(true).toTypedArray()
  }
}
