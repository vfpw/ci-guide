package edge.capabilities.address.dto
uses edge.jsonmapper.JsonProperty
uses edge.aspects.validation.annotations.FilterByCategory
uses edge.aspects.validation.annotations.AddressField
uses edge.aspects.validation.annotations.Required
uses edge.aspects.validation.annotations.Size
uses edge.aspects.validation.annotations.PostalCode


/**
 * Information about an address.
 */
class AddressDTO {

  /**
   * Public identifier for the address within Insurance Suite
   */
  @JsonProperty
  var _publicID : String as PublicID

  /**
   * Display name for the address
   */
  @JsonProperty
  var _displayName : String as DisplayName

  /**
   * First line of the address
   */
  @JsonProperty @Size(0, 60)
  @AddressField
  var _addressLine1 : String as AddressLine1

  /**
   * Kanji representation of the first line of the address
   */
  @JsonProperty @Size(0, 60)
  @AddressField
  var _addressLine1Kanji : String as AddressLine1Kanji

  /**
   * Second line of the address
   */
  @JsonProperty @Size(0, 60)
  @AddressField
  var _addressLine2 : String as AddressLine2

  /**
   * Kanji representation of the second line of the address
   */
  @JsonProperty @Size(0, 60)
  @AddressField
  var _addressLine2Kanji : String as AddressLine2Kanji

  /**
   * Third line of the address
   */
  @JsonProperty @Size(0, 60)
  @AddressField
  var _addressLine3 : String as AddressLine3

  /**
   * City
   */
  @JsonProperty @Size(0, 60)
  @Required
  @AddressField
  var _city : String as City

  /**
   * Kanji representation of the city
   */
  @JsonProperty @Size(0, 60)
  var _cityKanji : String as CityKanji

  /**
   * State
   */
  @JsonProperty @FilterByCategory("Country")
  @Required
  @AddressField
  var _state : typekey.State as State

  /**
   * Postal Code
   */
  @JsonProperty @PostalCode
  var _postalCode : String as PostalCode

  /**
   * Country
   */
  @JsonProperty
  @Required
  @AddressField
  var _country : typekey.Country as Country

  /**
   * Type of the address (e.g. home, work)
   */
  @JsonProperty
  var _addressType : typekey.AddressType as AddressType
     
  /**
   * True when city and state are populated based on the postal code.
   * False when the postal code is not used to populate those fields or when the 
   * autofill logic can't determine citi or state for the postal code.
   */
  @JsonProperty  
  var _autofilled : Boolean as IsAutofilled

  /**
   * A string representation of the address
   */
  override public function toString() : String{
    return("Address Line 1 : " + AddressLine1 + "\n" +
    "Address Line 2 : " + AddressLine2 + "\n" +
    "Address Line 3 : " + AddressLine3 + "\n" +
    "City : " + City + "\n" +
    "State : " + State + "\n" +
    "Postal Code : " + PostalCode + "\n" +
    "Country : " + Country + "\n"
    )
  }
  
  construct(){}
}
