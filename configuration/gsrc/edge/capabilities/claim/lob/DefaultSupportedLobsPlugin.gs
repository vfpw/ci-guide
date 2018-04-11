package edge.capabilities.claim.lob
uses edge.di.annotations.ForAllGwNodes
uses edge.capabilities.claim.lob.impl.personalauto.PaTypeCode


/**
 * Default supported lobs.
 */
class DefaultSupportedLobsPlugin implements ISupportedLobsPlugin {
  @ForAllGwNodes("claim")
  @ForAllGwNodes("fnol")
  @ForAllGwNodes("document")
  construct() {

  }

  override function getSupportedLobs() : PolicyType[] {
    return {PaTypeCode.PersonalAuto, PolicyType.TC_HOMEOWNERS, PolicyType.TC_BUSINESSOWNERS}
  }

}
