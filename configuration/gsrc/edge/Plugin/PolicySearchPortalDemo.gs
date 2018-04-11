package edge.Plugin

uses gw.plugin.policy.PolicySearchDataStore
uses gw.plugin.policy.base.PolicySearchPluginBase
uses gw.plugin.policy.impl.PolicySearchPolicyGenerator

/**
 * The demo version of the IPolicySearchAdapter.
 */
class PolicySearchPortalDemo extends PolicySearchPluginBase  {

  var _policyStore : PolicySearchPortalDemoDataStore
  
  /**
   * Lazily creates and gets the underlying demo policies.
   */
  override protected property get DataStore() : PolicySearchDataStore {
    if ( _policyStore == null ) {
      _policyStore = new PolicySearchPortalDemoDataStore(\ -> new PolicySearchPolicyGenerator().generatePolicies())
    }
    return _policyStore
  }
  
}
