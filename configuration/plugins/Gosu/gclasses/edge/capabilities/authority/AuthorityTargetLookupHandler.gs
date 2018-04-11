package edge.capabilities.authority
uses java.util.List

uses gw.plugin.contact.ContactSystemPlugin
uses gw.plugin.contact.search.ContactSearchFilter
uses typekey.State
uses entity.ContactSearchCriteria
uses gw.plugin.Plugins
uses edge.exception.IllegalStateException
uses edge.jsonrpc.IRpcHandler
uses edge.di.annotations.InjectableNode
uses edge.PlatformSupport.Bundle
uses java.lang.IllegalArgumentException
uses edge.jsonrpc.annotation.JsonRpcUnauthenticatedMethod

/**
 * Returns human readable representations for opaque authority tartget attributes such as UUIDs
 */ 
class AuthorityTargetLookupHandler implements IRpcHandler {
  private static final var DEFAULT_MAX_SEARCH_RESULTS = 500
  
  private var _addressBookAdapter : ContactSystemPlugin
  
  @InjectableNode
  construct() {
    _addressBookAdapter = Plugins.get(ContactSystemPlugin)
  }

  
  
  /**
   * Lookup target display names for vendor contacts
   * 
   * </br>
   * Throws -
   * <ul>
   * <li>IllegalDtoStateException If trying to return non vendor contacts and if insufficient search criteria is provided</li>
   * </ul>
   * @param contactSearchCriteria contact search criteria
   * @return authority target lookups
   */ 
  @JsonRpcUnauthenticatedMethod
  function searchVendorContacts(searchDTO: VendorSearchCriteriaDTO) : List<AuthorityTargetLookup>{
    var searchCriteria : ContactSearchCriteria
    final var vendorType = searchDTO.SearchCriteria.get("VendorType")

    if(vendorType == null or (vendorType != typekey.Contact.TC_COMPANYVENDOR.Code && vendorType != typekey.Contact.TC_PERSONVENDOR.Code)){
      throw new IllegalStateException(){
        :Message = "Returned contacts must be vendors",
        :Data = vendorType
      }
    }

    return Bundle.resolveInTransaction(\bundle -> {
      searchCriteria = createSearchCriteria(bundle, searchDTO)
      final var resultSpec = new ContactSearchFilter()
      resultSpec.MaxResults = (searchDTO.MaxResults != null) ? searchDTO.MaxResults : DEFAULT_MAX_SEARCH_RESULTS

      final var contactSearchResults = _addressBookAdapter.searchContacts(searchCriteria, resultSpec)

      if (contactSearchResults.NumberOfResults > 10) {
        throw new IllegalStateException(){
            :Message = "Insufficent search criteria provided",
            :Data = searchCriteria
            }
      }
      return contactSearchResults.Contacts.map(
          \contact -> new AuthorityTargetLookup(contact.DisplayName, contact.AddressBookUID))
    }).toList()
  }


  protected function createSearchCriteria(bundle : Bundle, searchDTO: VendorSearchCriteriaDTO) : ContactSearchCriteria {
    final var vendorType = searchDTO.SearchCriteria.get("VendorType")

    if (vendorType == null) {
      throw new IllegalArgumentException("Missing vendor type")
    }

    final var searchCriteria = new ContactSearchCriteria(bundle.PlatformBundle)
    switch(vendorType) {
      case typekey.Contact.TC_COMPANYVENDOR.Code:
        searchCriteria.ContactSubtype = typekey.Contact.TC_COMPANYVENDOR
        searchCriteria.Address.State = State.get(searchDTO.SearchCriteria.get("State"))
        searchCriteria.Keyword = searchDTO.SearchCriteria.get("Company")
        searchCriteria.ExternalSearchEnabled = true
        return searchCriteria
      case typekey.Contact.TC_PERSONVENDOR.Code:
        searchCriteria.ContactSubtype = typekey.Contact.TC_PERSONVENDOR
        searchCriteria.FirstName = searchDTO.SearchCriteria.get("FirstName")
        searchCriteria.Keyword = searchDTO.SearchCriteria.get("LastName")
        searchCriteria.Address.State = State.get(searchDTO.SearchCriteria.get("State"))
        searchCriteria.ExternalSearchEnabled = true
        return searchCriteria
      default:
        throw new IllegalStateException(){
            :Message = "Returned contacts must be vendors",
            :Data = vendorType
        }
    }
  }
}
