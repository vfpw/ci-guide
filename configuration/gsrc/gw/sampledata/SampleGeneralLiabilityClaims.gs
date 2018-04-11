package gw.sampledata

uses gw.pl.persistence.core.Bundle
uses java.util.HashMap
uses gw.api.databuilder.AccountSpecialHandlingBuilder

@Export
class SampleGeneralLiabilityClaims extends SampleDataBase 
{
  var accountHolders = new HashMap<String,Company>()

  construct(inCache : SampleDataCache) {
    super(inCache)
  }

  override property get Description() : String {
    return "General Liability Claims and associated Contacts, Policies, Exposures, Notes, ClaimContacts, Activities and Financials"
  }
  
  private function createAccountHolders(bundle:Bundle) {
    var armstrong = new gw.api.databuilder.CompanyBuilder()
        .withPublicId("ab:3220")
        .withLocalizedTaxID()
        //.withTaxID("155-55-7896")
        .withPrimaryPhone(TC_WORK)
        .withPrimaryAddressSetEarly( new gw.api.databuilder.AddressBuilder()
          .withAddressLine1("2000 Park Avenue")
          .withCountry(TC_US)
          .withPostalCode("61571")
          .withState(State.TC_IL)
          .withAddressType(TC_BUSINESS)
          .withCity("Washington"))
        .withWorkPhone("626-473-9576")
        .withName("Armstrong Cleaners")
        .create(bundle)
     accountHolders[armstrong.PublicID] = armstrong
     
     var capital = new gw.api.databuilder.CompanyBuilder()
        .withPublicId("ab:30002")
        .withLocalizedTaxID()
        //.withTaxID("150-55-7844")
        .withPrimaryPhone(TC_WORK)
        .withPrimaryAddressSetEarly( new gw.api.databuilder.AddressBuilder()
          .withAddressLine1("1246 Fair Oaks Ave")
          .withCountry(TC_US)
          .withPostalCode("91101")
          .withState(State.TC_CA)
          .withAddressType(TC_BUSINESS)
          .withCity("Pasadena"))
        .withWorkPhone("847-279-3400")
        .withName("Capital Investment Inc")
        .create(bundle)
     accountHolders[capital.PublicID] = capital
  }
    
  override function testSampleData(bundle : Bundle) {
    {
      createAccountHolders(bundle)
      
      var contactDemoSample322 = new gw.api.databuilder.CompanyBuilder()
        .withPublicId("demo_sample:322")
        .withPrimaryPhone(TC_WORK)
        .withPrimaryAddressSetEarly( new gw.api.databuilder.AddressBuilder()
          .withAddressLine1("2000 Park Avenue")
          .withCountry(TC_US)
          .withPostalCode("61571")
          .withState(State.TC_IL)
          .withAddressType(TC_BUSINESS)
          .withCity("Washington"))
        .withWorkPhone("626-473-9576")
        .withName("Armstrong Cleaners")
        .create(bundle)

      var accountSample1 = gw.api.databuilder.AccountBuilder
        .forHolder(createLocalFromAB("demo_acct:322", accountHolders["ab:3220"], bundle))
        .withPublicId("sample_account:8081")
        .withAccountNumber("ACC12250")
        .withSpecialHandling(new AccountSpecialHandlingBuilder())
        .create(bundle)

      var contactDemoSample512 = new gw.api.databuilder.PersonBuilder()
        .withLastName("Jackson")
        .withPublicId("demo_sample:512")
        .withFirstName("Brad")
        .withPrimaryPhone(TC_WORK)
        .withPrimaryAddressSetEarly( new gw.api.databuilder.AddressBuilder()
          .withAddressLine1("52 Dove Ct.")
          .withCountry(TC_US)
          .withPostalCode("91006")
          .withState(State.TC_CA)
          .withAddressType(TC_HOME)
          .withCity("Riverside"))
        .withWorkPhone("626-473-9576")
        .create(bundle)

      var claim = new gw.api.databuilder.ClaimBuilder()
        .withIncidentReport(false)
        .withWeather(TC_CL)
        .withAssignmentStatus(TC_ASSIGNED)
        .withLossDate(BaseDate.addDays(-5))
        .withCurrency(gw.api.util.CurrencyUtil.getDefaultCurrency())
        .withAssignmentDate(BaseDate.addDays(0))
        .withFlagged(TC_NEVERFLAGGED)
        .withLossLocation(new gw.api.databuilder.AddressBuilder()
          .withCountry(TC_US)
          .withPostalCode("28150")
          .withState(State.TC_NC)
          .withAddressType(TC_BUSINESS)
          .withCity("Charlotte"))
        .withFaultRating(FaultRating.TC_THIRDPARTY)
        .withLossCause(TC_ASSAULT)
        .withClaimNumber("345-50-123321")
        .withMainContactType(TC_EMPLOYEE)
        .withReportedByType(TC_EMPLOYEE)
        .withLossType(TC_GL)
        .withValidationLevel(TC_NEWLOSS)
        .withPolicy( new gw.api.databuilder.PolicyBuilder()
          .withExpirationDate(BaseDate.addDays(275))
          .withUnderwritingCo(TC_PARENT)
          .withVerified(true)
          .withOrigEffectiveDate(BaseDate.addDays(-1915))
          .withCurrency(gw.api.util.CurrencyUtil.getDefaultCurrency())
          .withUnderwritingGroup(TC_ACME_PROP)
          .withEffectiveDate(BaseDate.addDays(-90))
          .withStatus(TC_INFORCE)
          .withPolicyNumber("74-123192")
          .withPublicId("demo_glsample:1")
          .withTotalProperties(0)
          .withPolicyType(TC_GENERALLIABILITY)
          .withTotalVehicles(0)
          .withPolicyAccount(accountSample1)
          .withContactInRole(contactDemoSample322, TC_INSURED))
        .withFault(100)
        .withAssignedGroup(findGroupByName("Eastern Auto Group"))
        .withJurisdictionState(TC_NC)
        .withReportedDate(BaseDate.addDays(-1))
        .withCoverageInQuestion(false)
        .withLOBCode(TC_GLLINE)
        .withPublicID("gl:1")
        .withDescription("Customer attacked by other customer")
        .withState(TC_OPEN)
        .withAssignedUser(findUserByUserName("wgompers"))
        .withContactInRole(contactDemoSample512, TC_REPORTER)
        .withContactInRole(contactDemoSample512, TC_MAINCONTACT)
        .create(bundle)
    }


    {
      var policyLocationDemoSample301 = new gw.api.databuilder.PolicyLocationBuilder()
        .withAddress( new gw.api.databuilder.AddressBuilder()
          .withAddressLine1("5 Commerce Way")
          .withCountry(TC_US)
          .withPostalCode("91155")
          .withState(State.TC_CA)
          .withAddressType(TC_BUSINESS)
          .withCity("Los Angeles"))
        .create(bundle)

      var contactDemoSample30002 = new gw.api.databuilder.CompanyBuilder()
        .withPublicId("demo_sample:30002")
        .withPrimaryPhone(TC_WORK)
        .withPrimaryAddressSetEarly( new gw.api.databuilder.AddressBuilder()
          .withAddressLine1("1246 Fair Oaks Ave")
          .withCountry(TC_US)
          .withPostalCode("91101")
          .withState(State.TC_CA)
          .withAddressType(TC_BUSINESS)
          .withCity("Pasadena"))
        .withWorkPhone("847-279-3400")
        .withName("Capital Investment Inc")
        .create(bundle)
        
     var sampleAccount2 = gw.api.databuilder.AccountBuilder
        .forHolder(createLocalFromAB("demo_acct:30002", accountHolders["ab:30002"], bundle))
        .withPublicId("sample_account:8082")
        .withAccountNumber("ACC12251")
        .withSpecialHandling(new AccountSpecialHandlingBuilder())
        .create(bundle)

      var claim = new gw.api.databuilder.ClaimBuilder()
        .withIncidentReport(false)
        .withWeather(TC_CL)
        .withAssignmentStatus(TC_ASSIGNED)
        .withLossDate(BaseDate.addDays(-5))
        .withCurrency(gw.api.util.CurrencyUtil.getDefaultCurrency())
        .withAssignmentDate(BaseDate.addDays(0))
        .withFlagged(TC_NEVERFLAGGED)
        .withLossLocation(new gw.api.databuilder.AddressBuilder()
          .withAddressLine1("3232 Brooklyn Drive")
          .withCountry(TC_US)
          .withPostalCode("60706")
          .withState(State.TC_IL)
          .withAddressType(TC_BUSINESS)
          .withCity("Norridge"))
        .withFaultRating(FaultRating.TC_THIRDPARTY)
        .withLossCause(TC_ASSAULT)
        .withClaimNumber("345-50-300321")
        .withMainContactType(TC_EMPLOYEE)
        .withReportedByType(TC_EMPLOYEE)
        .withLossType(TC_GL)
        .withValidationLevel(TC_NEWLOSS)
        .withPolicy( new gw.api.databuilder.PolicyBuilder()
          .withExpirationDate(BaseDate.addDays(275))
          .withUnderwritingCo(TC_PARENT)
          .withVerified(true)
          .withOrigEffectiveDate(BaseDate.addDays(-1915))
          .withCurrency(gw.api.util.CurrencyUtil.getDefaultCurrency())
          .withUnderwritingGroup(TC_ACME_PROP)
          .withEffectiveDate(BaseDate.addDays(-90))
          .withStatus(TC_INFORCE)
          .withPolicyNumber("74-301192")
          .withPublicId("demo_glsample:301")
          .withTotalProperties(2)
          .withPolicyType(TC_GENERALLIABILITY)
          .withTotalVehicles(0)
          .withRiskUnit( new gw.api.databuilder.GeneralLiabilityRUBuilder()
            .withRUNumber(1)
            .withPolicyLocation(policyLocationDemoSample301)
/* KenB 7/3/10: new equivalent coverage in the new PC codes
            .withCoverage( new gw.api.databuilder.PropertyCoverageBuilder()
              .withIncidentLimit(100000)
              .withType("TERR")
              .withDeductible(1000))
*/
            .withCoverage( new gw.api.databuilder.PropertyCoverageBuilder()
              .withIncidentLimit(25000bd.ofDefaultCurrency())
              .withType(TC_GLLIQUORENDORSEMENT)
              .withDeductible(500bd.ofDefaultCurrency())))
          .withRiskUnit( new gw.api.databuilder.GeneralLiabilityRUBuilder()
            .withRUNumber(2)
            .withPolicyLocation(policyLocationDemoSample301)
/* KenB 7/3/10: new equivalent coverage in the new PC codes
            .withCoverage( new gw.api.databuilder.PropertyCoverageBuilder()
              .withIncidentLimit(100000)
              .withType("TERR")
              .withDeductible(1000))
*/
            .withCoverage( new gw.api.databuilder.PropertyCoverageBuilder()
              .withIncidentLimit(25000bd.ofDefaultCurrency())
              .withType(TC_GLLIQUORENDORSEMENT)
              .withDeductible(500bd.ofDefaultCurrency())))
          .withPolicyAccount(sampleAccount2)
          .withContactInRole(contactDemoSample30002, TC_INSURED))
        .withFault(100)
        .withAssignedGroup(findGroupByName("Eastern Auto Group"))
        .withJurisdictionState(TC_NC)
        .withReportedDate(BaseDate.addDays(-1))
        .withCoverageInQuestion(false)
        .withLOBCode(TC_GLLINE)
        .withPublicID("demo_sample:30001")
        .withDescription("Customer attacked by other customer")
        .withState(TC_OPEN)
        .withAssignedUser(findUserByUserName("wgompers"))
        .withContactInRole(contactDemoSample30002, TC_REPORTER)
        .create(bundle)

      var claimInfoDemoSample30001 = new gw.api.databuilder.ClaimInfoBuilder()
        .withRootPublicId("demo_sample:30001")
        .withClaimNumber("345-50-300321")
        .onClaim(claim)
        .create(bundle)
    }

  }
}