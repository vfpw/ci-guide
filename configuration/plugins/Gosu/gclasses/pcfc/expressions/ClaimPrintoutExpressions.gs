package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimPrintoutExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 159, column 53
    function locationRef_22 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Associations1Section) at ClaimPrintout.pcf: line 154, column 48
    function printable_24 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // PrintSection (id=Associations1Section) at ClaimPrintout.pcf: line 154, column 48
    function visible_23 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 560, column 46
    function locationRef_136 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 556, column 52
    function locationRef_137 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Associations2Section) at ClaimPrintout.pcf: line 551, column 48
    function printable_139 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // PrintSection (id=Associations2Section) at ClaimPrintout.pcf: line 551, column 48
    function visible_138 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Associations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function defaultSetter_370 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1212, column 53
    function locationRef_363 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1222, column 46
    function locationRef_364 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1218, column 52
    function locationRef_365 () : pcf.api.Destination {
      return pcf.ClaimAssociations.createDestination(Claim)
    }
    
    // PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function value_367 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function visible_366 () : java.lang.Boolean {
      return perm.ClaimAssociation.view
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function visible_368 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Associations3Section) at ClaimPrintout.pcf: line 1207, column 48
    function visible_372 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 296, column 57
    function locationRef_62 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Checks1Section) at ClaimPrintout.pcf: line 291, column 52
    function printable_64 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // PrintSection (id=Checks1Section) at ClaimPrintout.pcf: line 291, column 52
    function visible_63 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 769, column 39
    function locationRef_196 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 765, column 56
    function locationRef_197 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Checks2Section) at ClaimPrintout.pcf: line 760, column 52
    function printable_199 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // PrintSection (id=Checks2Section) at ClaimPrintout.pcf: line 760, column 52
    function visible_198 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Checks3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function defaultSetter_556 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1687, column 57
    function locationRef_549 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1697, column 39
    function locationRef_550 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1693, column 56
    function locationRef_551 () : pcf.api.Destination {
      return pcf.ClaimFinancialsChecks.createDestination(Claim)
    }
    
    // PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function value_553 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function visible_552 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function visible_554 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Checks3Section) at ClaimPrintout.pcf: line 1682, column 52
    function visible_558 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiability1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 202, column 121
    function label_38 () : java.lang.String {
      return CoverageSubtype.TC_WCEMPLIABCOV.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 207, column 70
    function locationRef_36 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 202, column 121
    function printable_39 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiability1Section) at ClaimPrintout.pcf: line 202, column 121
    function visible_37 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiability2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 604, column 121
    function label_153 () : java.lang.String {
      return CoverageSubtype.TC_WCEMPLIABCOV.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 609, column 70
    function locationRef_151 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 604, column 121
    function printable_154 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiability2Section) at ClaimPrintout.pcf: line 604, column 121
    function visible_152 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossEmployerLiabilitySectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function defaultSetter_413 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function label_411 () : java.lang.Object {
      return CoverageSubtype.TC_WCEMPLIABCOV.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function label_417 () : java.lang.String {
      return CoverageSubtype.TC_WCEMPLIABCOV.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1271, column 70
    function locationRef_407 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(employerLiability)
    }
    
    // PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function value_409 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function visible_408 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and employerLiability != null and perm.Exposure.view(employerLiability)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function visible_410 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossEmployerLiabilitySection) at ClaimPrintout.pcf: line 1266, column 121
    function visible_416 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 190, column 119
    function label_34 () : java.lang.String {
      return CoverageSubtype.TC_WCWORKERSCOMPWAGES.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 195, column 69
    function locationRef_32 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 190, column 119
    function printable_35 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss1Section) at ClaimPrintout.pcf: line 190, column 119
    function visible_33 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 592, column 119
    function label_149 () : java.lang.String {
      return CoverageSubtype.TC_WCWORKERSCOMPWAGES.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 597, column 69
    function locationRef_147 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 592, column 119
    function printable_150 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss2Section) at ClaimPrintout.pcf: line 592, column 119
    function visible_148 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossIndemityTimeLoss3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function defaultSetter_401 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function label_399 () : java.lang.Object {
      return CoverageSubtype.TC_WCWORKERSCOMPWAGES.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function label_405 () : java.lang.String {
      return CoverageSubtype.TC_WCWORKERSCOMPWAGES.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1259, column 69
    function locationRef_395 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(indemityTimeLoss)
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function value_397 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function visible_396 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and indemityTimeLoss != null and perm.Exposure.view(indemityTimeLoss)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function visible_398 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossIndemityTimeLoss3Section) at ClaimPrintout.pcf: line 1254, column 119
    function visible_404 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 178, column 115
    function label_30 () : java.lang.String {
      return CoverageSubtype.TC_WCWORKERSCOMPMED.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 183, column 67
    function locationRef_28 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 178, column 115
    function printable_31 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail1Section) at ClaimPrintout.pcf: line 178, column 115
    function visible_29 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 580, column 115
    function label_145 () : java.lang.String {
      return CoverageSubtype.TC_WCWORKERSCOMPMED.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 585, column 67
    function locationRef_143 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 580, column 115
    function printable_146 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail2Section) at ClaimPrintout.pcf: line 580, column 115
    function visible_144 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimLossMedicalDetail3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function defaultSetter_389 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function label_387 () : java.lang.Object {
      return CoverageSubtype.TC_WCWORKERSCOMPMED.Description
    }
    
    // 'label' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function label_393 () : java.lang.String {
      return CoverageSubtype.TC_WCWORKERSCOMPMED.Description
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1247, column 67
    function locationRef_383 () : pcf.api.Destination {
      return pcf.TopLevelExposureDetail.createDestination(medicalDetails)
    }
    
    // PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function value_385 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function visible_384 () : java.lang.Boolean {
      return helper.isWorkersCompClaim() and medicalDetails != null and perm.Exposure.view(medicalDetails)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function visible_386 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimLossMedicalDetail3Section) at ClaimPrintout.pcf: line 1242, column 115
    function visible_392 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimPrintoutExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'action' attribute on NonDownloadPrintOutButton at ClaimPrintout.pcf: line 101, column 58
    function action_10 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on PrintOutButton (id=ClaimPrint) at ClaimPrintout.pcf: line 98, column 21
    function action_9 () : void {
      gw.api.print.PrintOutAction.printPrintOut(printSettings)
    }
    
    // 'canVisit' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    static function canVisit_662 (Claim :  Claim) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.Claim.print(Claim)
    }
    
    // 'value' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    function defaultSetter_88 (__VALUE_TO_SET :  java.lang.Object) : void {
      Choice = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 63, column 48
    function initialValue_0 () : gw.api.print.ClaimPrintoutHelper {
      return new gw.api.print.ClaimPrintoutHelper(Claim)
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 67, column 42
    function initialValue_1 () : gw.api.print.PrintSettings {
      return helper.createPrintSettings()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 71, column 24
    function initialValue_2 () : Exposure {
      return helper.getMedicalDetails()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 75, column 24
    function initialValue_3 () : Exposure {
      return helper.getIndemityTimeLoss()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 79, column 24
    function initialValue_4 () : Exposure {
      return helper.getEmployerLiability()
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 83, column 23
    function initialValue_5 () : boolean {
      return (helper.isWorkersCompClaim() or helper.isHomeownersClaim()) and (gw.api.policy.PolicyTabUtil.hasTab(Claim, "Properties") or gw.api.policy.PolicyTabUtil.hasTab(Claim, "Classcodes"))
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 87, column 23
    function initialValue_6 () : boolean {
      return helper.isTravelClaim() and (gw.api.policy.PolicyTabUtil.hasTab(Claim, "Trips") or gw.api.policy.PolicyTabUtil.hasTab(Claim, "Classcodes"))
    }
    
    // 'initialValue' attribute on Variable at ClaimPrintout.pcf: line 91, column 23
    function initialValue_7 () : boolean {
      return (helper.isWorkersCompClaim() or helper.isHomeownersClaim()) and gw.api.policy.PolicyTabUtil.hasTab(Claim, "Statcodes")
    }
    
    // 'label' attribute on PrintGroup (id=AllClaimPagesWithDetails) at ClaimPrintout.pcf: line 393, column 230
    function label_8 () : java.lang.Object {
      return (Claim.LossType == LossType.TC_WC)? DisplayKey.get("Java.PrintClaimOptionsForm.Label.AllClaimPagesWithDetailsForWC") : DisplayKey.get("Java.PrintClaimOptionsForm.Label.AllClaimPagesWithDetails")
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 925, column 32
    function locationRef_247 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 930, column 40
    function locationRef_248 (ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
      return pcf.ClaimAssociationDetail.createDestination(Claim, ClaimAssociation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 935, column 32
    function locationRef_249 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 941, column 36
    function locationRef_250 (selectedClaimContact :  ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 946, column 38
    function locationRef_251 (ClaimUserModel :  ClaimUserModel) : pcf.api.Destination {
      return pcf.ClaimUserPrintDetails.createDestination(Claim, ClaimUserModel)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 953, column 33
    function locationRef_252 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 960, column 38
    function locationRef_254 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 966, column 35
    function locationRef_256 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 972, column 32
    function locationRef_257 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 978, column 38
    function locationRef_258 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 983, column 39
    function locationRef_259 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 988, column 33
    function locationRef_260 (CheckView :  CheckView) : pcf.api.Destination {
      return pcf.ClaimFinancialsChecksDetailPrint.createDestination(Claim, CheckView)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 993, column 32
    function locationRef_261 (DocumentParam :  Document) : pcf.api.Destination {
      return pcf.DocumentDetailsPrint.createDestination(Claim, DocumentParam)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 999, column 34
    function locationRef_262 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 1005, column 35
    function locationRef_263 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 1010, column 30
    function locationRef_264 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'printable' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 953, column 33
    function printable_253 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintLocationDetail at ClaimPrintout.pcf: line 960, column 38
    function printable_255 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'value' attribute on PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    function value_87 () : java.lang.String {
      return Choice
    }
    
    // PrintOut (id=ClaimPrintout) at ClaimPrintout.pcf: line 53, column 89
    function value_89 () : java.lang.Object {
      return Choice
    }
    
    property get Choice () : java.lang.String {
      return getVariableValue("Choice", 0) as java.lang.String
    }
    
    property set Choice ($arg :  java.lang.String) {
      setVariableValue("Choice", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ClaimPrintout {
      return super.CurrentLocation as pcf.ClaimPrintout
    }
    
    property get canShowClaimPolicyLocations () : boolean {
      return getVariableValue("canShowClaimPolicyLocations", 0) as java.lang.Boolean
    }
    
    property set canShowClaimPolicyLocations ($arg :  boolean) {
      setVariableValue("canShowClaimPolicyLocations", 0, $arg)
    }
    
    property get canShowClaimPolicyTrips () : boolean {
      return getVariableValue("canShowClaimPolicyTrips", 0) as java.lang.Boolean
    }
    
    property set canShowClaimPolicyTrips ($arg :  boolean) {
      setVariableValue("canShowClaimPolicyTrips", 0, $arg)
    }
    
    property get canShowPolicyStatCodes () : boolean {
      return getVariableValue("canShowPolicyStatCodes", 0) as java.lang.Boolean
    }
    
    property set canShowPolicyStatCodes ($arg :  boolean) {
      setVariableValue("canShowPolicyStatCodes", 0, $arg)
    }
    
    property get employerLiability () : Exposure {
      return getVariableValue("employerLiability", 0) as Exposure
    }
    
    property set employerLiability ($arg :  Exposure) {
      setVariableValue("employerLiability", 0, $arg)
    }
    
    property get helper () : gw.api.print.ClaimPrintoutHelper {
      return getVariableValue("helper", 0) as gw.api.print.ClaimPrintoutHelper
    }
    
    property set helper ($arg :  gw.api.print.ClaimPrintoutHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get indemityTimeLoss () : Exposure {
      return getVariableValue("indemityTimeLoss", 0) as Exposure
    }
    
    property set indemityTimeLoss ($arg :  Exposure) {
      setVariableValue("indemityTimeLoss", 0, $arg)
    }
    
    property get medicalDetails () : Exposure {
      return getVariableValue("medicalDetails", 0) as Exposure
    }
    
    property set medicalDetails ($arg :  Exposure) {
      setVariableValue("medicalDetails", 0, $arg)
    }
    
    property get printSettings () : gw.api.print.PrintSettings {
      return getVariableValue("printSettings", 0) as gw.api.print.PrintSettings
    }
    
    property set printSettings ($arg :  gw.api.print.PrintSettings) {
      setVariableValue("printSettings", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshot2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 872, column 54
    function locationRef_222 () : pcf.api.Destination {
      return pcf.ClaimSnapshotLossDetails.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 875, column 55
    function locationRef_224 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPartiesInvolved.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 878, column 84
    function locationRef_226 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPolicy.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 881, column 85
    function locationRef_228 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 884, column 53
    function locationRef_230 () : pcf.api.Destination {
      return pcf.ClaimSnapshotNotes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 887, column 47
    function locationRef_232 () : pcf.api.Destination {
      return pcf.ClaimSnapshotDocuments.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 890, column 54
    function locationRef_234 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExtraFields.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 872, column 54
    function printable_221 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 875, column 55
    function printable_223 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 878, column 84
    function printable_225 () : java.lang.Boolean {
      return perm.Policy.view(Claim.Policy) and perm.System.viewpolicy
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 881, column 85
    function printable_227 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 884, column 53
    function printable_229 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 887, column 47
    function printable_231 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'printable' attribute on PrintSection (id=ClaimSnapshot2Section) at ClaimPrintout.pcf: line 866, column 52
    function printable_236 () : java.lang.Boolean {
      return helper.canPrintClaimSnapshot()
    }
    
    // PrintSection (id=ClaimSnapshot2Section) at ClaimPrintout.pcf: line 866, column 52
    function visible_235 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSnapshot3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function defaultSetter_641 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'label' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function label_639 () : java.lang.Object {
      return (Claim.LossType == LossType.TC_WC) ? DisplayKey.get("Java.PrintClaimOptionsForm.Options.FirstReportOfInjurySnapshot") : DisplayKey.get("Java.PrintClaimOptionsForm.Options.FNOLSnapshot")
    }
    
    // 'label' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function label_645 () : java.lang.String {
      return (Claim.LossType == LossType.TC_WC) ? DisplayKey.get("Java.PrintClaimOptionsForm.Options.FirstReportOfInjurySnapshot") : DisplayKey.get("Java.PrintClaimOptionsForm.Options.FNOLSnapshot")
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1831, column 54
    function locationRef_623 () : pcf.api.Destination {
      return pcf.ClaimSnapshotLossDetails.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1834, column 55
    function locationRef_625 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPartiesInvolved.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1837, column 84
    function locationRef_627 () : pcf.api.Destination {
      return pcf.ClaimSnapshotPolicy.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1840, column 85
    function locationRef_629 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1843, column 53
    function locationRef_631 () : pcf.api.Destination {
      return pcf.ClaimSnapshotNotes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1846, column 47
    function locationRef_633 () : pcf.api.Destination {
      return pcf.ClaimSnapshotDocuments.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1849, column 54
    function locationRef_635 () : pcf.api.Destination {
      return pcf.ClaimSnapshotExtraFields.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1831, column 54
    function printable_622 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1834, column 55
    function printable_624 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1837, column 84
    function printable_626 () : java.lang.Boolean {
      return perm.Policy.view(Claim.Policy) and perm.System.viewpolicy
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1840, column 85
    function printable_628 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1843, column 53
    function printable_630 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1846, column 47
    function printable_632 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function value_637 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function visible_636 () : java.lang.Boolean {
      return helper.canPrintClaimSnapshot()
    }
    
    // 'childrenVisible' attribute on PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function visible_638 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=ClaimSnapshot3Section) at ClaimPrintout.pcf: line 1825, column 52
    function visible_644 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 320, column 61
    function locationRef_68 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'printable' attribute on PrintSection (id=Documents1Section) at ClaimPrintout.pcf: line 315, column 42
    function printable_70 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=Documents1Section) at ClaimPrintout.pcf: line 315, column 42
    function visible_69 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 794, column 61
    function locationRef_203 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'printable' attribute on PrintSection (id=Documents2Section) at ClaimPrintout.pcf: line 789, column 42
    function printable_205 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // PrintSection (id=Documents2Section) at ClaimPrintout.pcf: line 789, column 42
    function visible_204 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Documents3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function defaultSetter_576 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1728, column 61
    function locationRef_570 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, true)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1734, column 62
    function locationRef_571 () : pcf.api.Destination {
      return pcf.ClaimDocumentsPrint.createDestination(Claim, false)
    }
    
    // PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function value_573 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function visible_572 () : java.lang.Boolean {
      return perm.System.viewdocs
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function visible_574 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Documents3Section) at ClaimPrintout.pcf: line 1723, column 42
    function visible_578 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 332, column 52
    function locationRef_71 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations1Section) at ClaimPrintout.pcf: line 327, column 48
    function printable_73 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // PrintSection (id=Evaluations1Section) at ClaimPrintout.pcf: line 327, column 48
    function visible_72 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 811, column 40
    function locationRef_206 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 807, column 51
    function locationRef_207 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations2Section) at ClaimPrintout.pcf: line 801, column 48
    function printable_209 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // PrintSection (id=Evaluations2Section) at ClaimPrintout.pcf: line 801, column 48
    function visible_208 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Evaluations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function defaultSetter_587 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1746, column 52
    function locationRef_580 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1757, column 40
    function locationRef_581 (Evaluation :  Evaluation) : pcf.api.Destination {
      return pcf.ClaimEvaluationPrintDetail.createDestination(Evaluation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1753, column 51
    function locationRef_582 () : pcf.api.Destination {
      return pcf.ClaimEvaluations.createDestination(Claim)
    }
    
    // PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function value_584 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function visible_583 () : java.lang.Boolean {
      return perm.System.viewclaimevals
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function visible_585 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Evaluations3Section) at ClaimPrintout.pcf: line 1741, column 48
    function visible_589 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 220, column 50
    function locationRef_40 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Exposures1Section) at ClaimPrintout.pcf: line 215, column 80
    function printable_42 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // PrintSection (id=Exposures1Section) at ClaimPrintout.pcf: line 215, column 80
    function visible_41 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 626, column 38
    function locationRef_155 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 622, column 49
    function locationRef_156 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Exposures2Section) at ClaimPrintout.pcf: line 617, column 80
    function printable_158 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // PrintSection (id=Exposures2Section) at ClaimPrintout.pcf: line 617, column 80
    function visible_157 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Exposures3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function defaultSetter_426 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1284, column 50
    function locationRef_419 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1294, column 38
    function locationRef_420 (Exposure :  Exposure) : pcf.api.Destination {
      return pcf.ExposureDetail.createDestination(Exposure)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1290, column 49
    function locationRef_421 () : pcf.api.Destination {
      return pcf.ClaimExposures.createDestination(Claim)
    }
    
    // PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function value_423 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function visible_422 () : java.lang.Boolean {
      return !helper.isWorkersCompClaim() and perm.System.viewexposures
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function visible_424 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Exposures3Section) at ClaimPrintout.pcf: line 1279, column 80
    function visible_428 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 257, column 63
    function locationRef_49 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 259, column 73
    function locationRef_50 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 261, column 77
    function locationRef_51 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 263, column 73
    function locationRef_52 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 265, column 73
    function locationRef_53 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 267, column 78
    function locationRef_54 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 269, column 82
    function locationRef_55 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 271, column 81
    function locationRef_56 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary1Section) at ClaimPrintout.pcf: line 252, column 44
    function printable_58 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // PrintSection (id=FinancialsSummary1Section) at ClaimPrintout.pcf: line 252, column 44
    function visible_57 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 722, column 63
    function locationRef_182 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 724, column 73
    function locationRef_183 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 726, column 77
    function locationRef_184 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 728, column 73
    function locationRef_185 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 730, column 73
    function locationRef_186 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 732, column 78
    function locationRef_187 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 734, column 82
    function locationRef_188 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 736, column 81
    function locationRef_189 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary2Section) at ClaimPrintout.pcf: line 717, column 44
    function printable_191 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // PrintSection (id=FinancialsSummary2Section) at ClaimPrintout.pcf: line 717, column 44
    function visible_190 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsSummary3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function defaultSetter_514 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1501, column 63
    function locationRef_488 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1503, column 73
    function locationRef_489 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1505, column 77
    function locationRef_490 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1507, column 73
    function locationRef_491 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1509, column 73
    function locationRef_492 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1511, column 78
    function locationRef_493 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1513, column 82
    function locationRef_494 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1515, column 81
    function locationRef_495 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1521, column 63
    function locationRef_496 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1523, column 73
    function locationRef_497 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposurePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1529, column 63
    function locationRef_498 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1531, column 77
    function locationRef_499 () : pcf.api.Destination {
      return pcf.FinancialsSummaryExposureOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1537, column 63
    function locationRef_500 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1539, column 73
    function locationRef_501 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimantPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1545, column 63
    function locationRef_502 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1547, column 73
    function locationRef_503 () : pcf.api.Destination {
      return pcf.FinancialsSummaryCoveragePrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1553, column 63
    function locationRef_504 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1555, column 78
    function locationRef_505 () : pcf.api.Destination {
      return pcf.FinancialsSummaryClaimCostOnlyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1561, column 63
    function locationRef_506 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1563, column 82
    function locationRef_507 () : pcf.api.Destination {
      return pcf.FinancialsSummaryReservingCurrencyPrint.createDestination(Claim, false)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1569, column 63
    function locationRef_508 () : pcf.api.Destination {
      return pcf.FinancialsSummaryTitlePrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1571, column 81
    function locationRef_509 () : pcf.api.Destination {
      return pcf.FinancialsSummaryRecoveryCategoryPrint.createDestination(Claim, false)
    }
    
    // PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function value_511 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function visible_510 () : java.lang.Boolean {
      return perm.System.viewfinsum
    }
    
    // 'childrenVisible' attribute on PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function visible_512 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=FinancialsSummary3Section) at ClaimPrintout.pcf: line 1496, column 44
    function visible_516 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransaction1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 284, column 125
    function locationRef_59 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransaction1Section) at ClaimPrintout.pcf: line 278, column 62
    function printable_61 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // PrintSection (id=FinancialsTransaction1Section) at ClaimPrintout.pcf: line 278, column 62
    function visible_60 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransaction2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 752, column 45
    function locationRef_192 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 748, column 124
    function locationRef_193 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransaction2Section) at ClaimPrintout.pcf: line 743, column 62
    function printable_195 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // PrintSection (id=FinancialsTransaction2Section) at ClaimPrintout.pcf: line 743, column 62
    function visible_194 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FinancialsTransactionSectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function defaultSetter_545 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1584, column 125
    function locationRef_518 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1594, column 45
    function locationRef_519 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1590, column 124
    function locationRef_520 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.ALL)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1603, column 129
    function locationRef_521 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RESERVE)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1614, column 45
    function locationRef_523 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1610, column 128
    function locationRef_524 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RESERVE)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1623, column 129
    function locationRef_526 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.PAYMENT)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1634, column 45
    function locationRef_528 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1630, column 128
    function locationRef_529 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.PAYMENT)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1643, column 130
    function locationRef_531 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1654, column 45
    function locationRef_533 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1650, column 129
    function locationRef_534 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1663, column 138
    function locationRef_536 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY_RESERVE)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1674, column 45
    function locationRef_538 (TransactionView :  TransactionView) : pcf.api.Destination {
      return pcf.TransactionDetailPrint.createDestination(Claim, TransactionView)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1670, column 137
    function locationRef_539 () : pcf.api.Destination {
      return pcf.ClaimFinancialsTransactionsPrint.createDestination(Claim, gw.api.financials.ClaimFinancialsTransactionsOption.RECOVERY_RESERVE)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionReservesWithoutDetailsOption) at ClaimPrintout.pcf: line 1601, column 54
    function printable_522 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionPaymentsWithoutDetailsOption) at ClaimPrintout.pcf: line 1621, column 54
    function printable_527 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionRecoveriesWithoutDetailsOption) at ClaimPrintout.pcf: line 1641, column 56
    function printable_532 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=FinancialsTransactionRecoveryReservesWithoutDetailsOption) at ClaimPrintout.pcf: line 1661, column 119
    function printable_537 () : java.lang.Boolean {
      return perm.Claim.viewrecoveryreserves(Claim) and gw.api.print.ClaimPrintoutHelper.UseRecoveryReserves
    }
    
    // PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function value_542 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function visible_541 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Claim)
    }
    
    // 'childrenVisible' attribute on PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function visible_543 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=FinancialsTransactionSection) at ClaimPrintout.pcf: line 1578, column 62
    function visible_547 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 384, column 48
    function filter_83 (VALUE :  gw.entity.TypeKey) : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 384, column 48
    function locationRef_84 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=History1Section) at ClaimPrintout.pcf: line 377, column 50
    function printable_86 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // PrintSection (id=History1Section) at ClaimPrintout.pcf: line 377, column 50
    function visible_85 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 905, column 48
    function filter_237 (VALUE :  gw.entity.TypeKey) : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 905, column 48
    function locationRef_238 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=History2Section) at ClaimPrintout.pcf: line 898, column 50
    function printable_240 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // PrintSection (id=History2Section) at ClaimPrintout.pcf: line 898, column 50
    function visible_239 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class History3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function defaultSetter_655 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1864, column 48
    function filter_647 (VALUE :  gw.entity.TypeKey) : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filter' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1872, column 48
    function filter_649 (VALUE :  HistoryType) : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return new gw.api.filters.TypeKeyFilter(VALUE, History#Type.PropertyInfo as gw.entity.ITypekeyPropertyInfo)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1864, column 48
    function locationRef_648 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1872, column 48
    function locationRef_650 () : pcf.api.Destination {
      return pcf.ClaimHistory.createDestination(Claim)
    }
    
    // PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function value_652 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function visible_651 () : java.lang.Boolean {
      return perm.System.viewclaimhistory
    }
    
    // 'childrenVisible' attribute on PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function visible_653 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=History3Section) at ClaimPrintout.pcf: line 1857, column 50
    function visible_657 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HomeownerPropertyIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 506, column 106
    function locationRef_118 () : pcf.api.Destination {
      return pcf.DwellingIncidentPrint.createDestination(Claim, helper.DwellingIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 510, column 122
    function locationRef_120 () : pcf.api.Destination {
      return pcf.PropertyContentsIncidentPrint.createDestination(Claim, helper.PersonalPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 514, column 118
    function locationRef_122 () : pcf.api.Destination {
      return pcf.OtherStructureIncidentPrint.createDestination(Claim, helper.OtherStructureIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 518, column 118
    function locationRef_124 () : pcf.api.Destination {
      return pcf.LivingExpensesIncidentPrint.createDestination(Claim, helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 506, column 106
    function printable_117 () : java.lang.Boolean {
      return helper.DwellingIncident != null and perm.Incident.view(helper.DwellingIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 510, column 122
    function printable_119 () : java.lang.Boolean {
      return helper.PersonalPropertyIncident != null and perm.Incident.view(helper.PersonalPropertyIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 514, column 118
    function printable_121 () : java.lang.Boolean {
      return helper.OtherStructureIncident != null and perm.Incident.view(helper.OtherStructureIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 518, column 118
    function printable_123 () : java.lang.Boolean {
      return helper.LivingExpensesIncident != null and perm.Incident.view(helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOption (id=HomeownerIncidentOption) at ClaimPrintout.pcf: line 502, column 50
    function printable_125 () : java.lang.Boolean {
      return helper.isHomeownersClaim()
    }
    
    // PrintSection (id=HomeownerPropertyIncident2Section) at ClaimPrintout.pcf: line 498, column 48
    function visible_126 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class HomeownerPropertyIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function defaultSetter_345 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1162, column 106
    function locationRef_333 () : pcf.api.Destination {
      return pcf.DwellingIncidentPrint.createDestination(Claim, helper.DwellingIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1166, column 122
    function locationRef_335 () : pcf.api.Destination {
      return pcf.PropertyContentsIncidentPrint.createDestination(Claim, helper.PersonalPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1170, column 118
    function locationRef_337 () : pcf.api.Destination {
      return pcf.OtherStructureIncidentPrint.createDestination(Claim, helper.OtherStructureIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1174, column 118
    function locationRef_339 () : pcf.api.Destination {
      return pcf.LivingExpensesIncidentPrint.createDestination(Claim, helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1162, column 106
    function printable_332 () : java.lang.Boolean {
      return helper.DwellingIncident != null and perm.Incident.view(helper.DwellingIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1166, column 122
    function printable_334 () : java.lang.Boolean {
      return helper.PersonalPropertyIncident != null and perm.Incident.view(helper.PersonalPropertyIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1170, column 118
    function printable_336 () : java.lang.Boolean {
      return helper.OtherStructureIncident != null and perm.Incident.view(helper.OtherStructureIncident)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1174, column 118
    function printable_338 () : java.lang.Boolean {
      return helper.LivingExpensesIncident != null and perm.Incident.view(helper.LivingExpensesIncident)
    }
    
    // 'printable' attribute on PrintOption (id=HomeownerIncidentOption) at ClaimPrintout.pcf: line 1158, column 50
    function printable_340 () : java.lang.Boolean {
      return helper.isHomeownersClaim()
    }
    
    // PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function value_342 () : java.lang.Object {
      return null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function visible_343 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=HomeownerPropertyIncident3Section) at ClaimPrintout.pcf: line 1154, column 48
    function visible_347 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 489, column 44
    function locationRef_113 (InjuryIncident :  InjuryIncident) : pcf.api.Destination {
      return pcf.InjuryIncidentDetailPrint.createDestination(InjuryIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 485, column 57
    function locationRef_115 () : pcf.api.Destination {
      return pcf.InjuryIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 485, column 57
    function printable_114 () : java.lang.Boolean {
      return !helper.InjuryIncidents.IsEmpty
    }
    
    // PrintSection (id=InjuryIncident2Section) at ClaimPrintout.pcf: line 479, column 106
    function visible_116 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class InjuryIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function defaultSetter_330 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1145, column 44
    function locationRef_324 (InjuryIncident :  InjuryIncident) : pcf.api.Destination {
      return pcf.InjuryIncidentDetailPrint.createDestination(InjuryIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1141, column 57
    function locationRef_326 () : pcf.api.Destination {
      return pcf.InjuryIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1141, column 57
    function printable_325 () : java.lang.Boolean {
      return !helper.InjuryIncidents.IsEmpty
    }
    
    // PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function value_327 () : java.lang.Object {
      return null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function visible_328 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=InjuryIncident3Section) at ClaimPrintout.pcf: line 1135, column 106
    function visible_331 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 369, column 48
    function locationRef_80 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Litigation1Section) at ClaimPrintout.pcf: line 364, column 45
    function printable_82 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // PrintSection (id=Litigation1Section) at ClaimPrintout.pcf: line 364, column 45
    function visible_81 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 858, column 36
    function locationRef_217 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 854, column 47
    function locationRef_218 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Litigation2Section) at ClaimPrintout.pcf: line 849, column 45
    function printable_220 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // PrintSection (id=Litigation2Section) at ClaimPrintout.pcf: line 849, column 45
    function visible_219 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Litigation3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function defaultSetter_618 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1807, column 48
    function locationRef_611 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1817, column 36
    function locationRef_612 (Matter :  Matter) : pcf.api.Destination {
      return pcf.MatterDetailPage.createDestination(Claim, Matter)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1813, column 47
    function locationRef_613 () : pcf.api.Destination {
      return pcf.ClaimMatters.createDestination(Claim)
    }
    
    // PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function value_615 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function visible_614 () : java.lang.Boolean {
      return perm.System.viewmatters
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function visible_616 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Litigation3Section) at ClaimPrintout.pcf: line 1802, column 45
    function visible_620 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 147, column 52
    function locationRef_19 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails1Section) at ClaimPrintout.pcf: line 142, column 49
    function printable_21 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=LossDetails1Section) at ClaimPrintout.pcf: line 142, column 49
    function visible_20 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 436, column 52
    function locationRef_101 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails2Section) at ClaimPrintout.pcf: line 431, column 49
    function printable_103 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=LossDetails2Section) at ClaimPrintout.pcf: line 431, column 49
    function visible_102 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LossDetails3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function defaultSetter_299 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1091, column 52
    function locationRef_294 () : pcf.api.Destination {
      return pcf.ClaimLossDetails.createDestination(Claim)
    }
    
    // PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function value_296 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function visible_295 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function visible_297 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=LossDetails3Section) at ClaimPrintout.pcf: line 1086, column 49
    function visible_301 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 345, column 53
    function locationRef_74 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations1Section) at ClaimPrintout.pcf: line 339, column 48
    function printable_76 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // PrintSection (id=Negotiations1Section) at ClaimPrintout.pcf: line 339, column 48
    function visible_75 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 829, column 41
    function locationRef_210 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 825, column 52
    function locationRef_211 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations2Section) at ClaimPrintout.pcf: line 819, column 48
    function printable_213 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // PrintSection (id=Negotiations2Section) at ClaimPrintout.pcf: line 819, column 48
    function visible_212 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Negotiations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function defaultSetter_598 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1771, column 53
    function locationRef_591 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1782, column 41
    function locationRef_592 (Negotiation :  Negotiation) : pcf.api.Destination {
      return pcf.ClaimNegotiationPrintDetail.createDestination(Negotiation)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1778, column 52
    function locationRef_593 () : pcf.api.Destination {
      return pcf.ClaimNegotiations.createDestination(Claim)
    }
    
    // PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function value_595 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function visible_594 () : java.lang.Boolean {
      return perm.System.viewclaimngtns
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function visible_596 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Negotiations3Section) at ClaimPrintout.pcf: line 1765, column 48
    function visible_600 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 308, column 54
    function locationRef_65 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Notes1Section) at ClaimPrintout.pcf: line 303, column 48
    function printable_67 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // PrintSection (id=Notes1Section) at ClaimPrintout.pcf: line 303, column 48
    function visible_66 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 782, column 54
    function locationRef_200 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Notes2Section) at ClaimPrintout.pcf: line 777, column 48
    function printable_202 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // PrintSection (id=Notes2Section) at ClaimPrintout.pcf: line 777, column 48
    function visible_201 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Notes3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function defaultSetter_566 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1710, column 65
    function locationRef_560 () : pcf.api.Destination {
      return pcf.ClaimNoConfidentialNotesPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1716, column 54
    function locationRef_561 () : pcf.api.Destination {
      return pcf.ClaimAllNotesPrint.createDestination(Claim)
    }
    
    // PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function value_563 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function visible_562 () : java.lang.Boolean {
      return perm.System.viewclaimnotes
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function visible_564 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Notes3Section) at ClaimPrintout.pcf: line 1705, column 48
    function visible_568 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 232, column 49
    function locationRef_43 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved1Section) at ClaimPrintout.pcf: line 227, column 50
    function printable_45 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // PrintSection (id=PartiesInvolved1Section) at ClaimPrintout.pcf: line 227, column 50
    function visible_44 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 644, column 49
    function locationRef_159 (selectedClaimContact :  entity.ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact) 
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 640, column 48
    function locationRef_160 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved2Section) at ClaimPrintout.pcf: line 634, column 50
    function printable_162 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // PrintSection (id=PartiesInvolved2Section) at ClaimPrintout.pcf: line 634, column 50
    function visible_161 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PartiesInvolved3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function defaultSetter_437 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1307, column 49
    function locationRef_430 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1318, column 42
    function locationRef_431 (selectedClaimContact :  ClaimContact) : pcf.api.Destination {
      return pcf.ClaimContactPrintDetails.createDestination(Claim, selectedClaimContact)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1314, column 48
    function locationRef_432 () : pcf.api.Destination {
      return pcf.ClaimContacts.createDestination(Claim)
    }
    
    // PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function value_434 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function visible_433 () : java.lang.Boolean {
      return perm.System.viewclaimparties
    }
    
    // 'childrenVisible' attribute on PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function visible_435 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=PartiesInvolved3Section) at ClaimPrintout.pcf: line 1302, column 50
    function visible_439 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 245, column 54
    function locationRef_46 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Policy1Section) at ClaimPrintout.pcf: line 239, column 44
    function printable_48 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // PrintSection (id=Policy1Section) at ClaimPrintout.pcf: line 239, column 44
    function visible_47 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 658, column 54
    function locationRef_163 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 666, column 39
    function locationRef_164 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 662, column 46
    function locationRef_166 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 675, column 44
    function locationRef_167 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 671, column 53
    function locationRef_169 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 684, column 36
    function locationRef_170 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 680, column 49
    function locationRef_172 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 692, column 41
    function locationRef_173 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 688, column 58
    function locationRef_174 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 701, column 38
    function locationRef_175 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 697, column 48
    function locationRef_177 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 709, column 44
    function locationRef_178 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 705, column 61
    function locationRef_179 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 662, column 46
    function printable_165 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 671, column 53
    function printable_168 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 680, column 49
    function printable_171 () : java.lang.Boolean {
      return canShowClaimPolicyTrips
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 697, column 48
    function printable_176 () : java.lang.Boolean {
      return canShowPolicyStatCodes
    }
    
    // 'printable' attribute on PrintSection (id=Policy2Section) at ClaimPrintout.pcf: line 652, column 44
    function printable_181 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // PrintSection (id=Policy2Section) at ClaimPrintout.pcf: line 652, column 44
    function visible_180 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Policy3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function defaultSetter_484 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1332, column 54
    function locationRef_441 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1346, column 39
    function locationRef_442 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1342, column 54
    function locationRef_443 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1361, column 44
    function locationRef_445 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1357, column 53
    function locationRef_447 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1375, column 36
    function locationRef_449 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1371, column 51
    function locationRef_450 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1388, column 41
    function locationRef_452 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1384, column 58
    function locationRef_453 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1401, column 38
    function locationRef_454 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1397, column 60
    function locationRef_455 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodesPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1413, column 44
    function locationRef_457 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1409, column 61
    function locationRef_458 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1422, column 54
    function locationRef_459 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1429, column 39
    function locationRef_460 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1425, column 54
    function locationRef_461 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1437, column 54
    function locationRef_463 () : pcf.api.Destination {
      return pcf.ClaimPolicyGeneral.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1445, column 39
    function locationRef_464 (VehicleRU :  VehicleRU) : pcf.api.Destination {
      return pcf.ClaimPolicyVehicleDetail.createDestination(Claim, VehicleRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1441, column 46
    function locationRef_466 () : pcf.api.Destination {
      return pcf.ClaimPolicyVehicles.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1454, column 44
    function locationRef_467 (PolicyLocation :  PolicyLocation) : pcf.api.Destination {
      return pcf.PolicyLocationPrint.createDestination(PolicyLocation, Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1450, column 53
    function locationRef_469 () : pcf.api.Destination {
      return pcf.ClaimPolicyLocations.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1463, column 36
    function locationRef_470 (aTripRU :  TripRU) : pcf.api.Destination {
      return pcf.TripRUPrint.createDestination(Claim, aTripRU)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1459, column 49
    function locationRef_472 () : pcf.api.Destination {
      return pcf.ClaimPolicyTrips.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1471, column 41
    function locationRef_473 (Endorsement :  Endorsement) : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsementDetail.createDestination(Claim, Endorsement)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1467, column 58
    function locationRef_474 () : pcf.api.Destination {
      return pcf.ClaimPolicyEndorsements.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1480, column 38
    function locationRef_475 (StatCode :  StatCode) : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodeDetail.createDestination(Claim, StatCode)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1476, column 48
    function locationRef_477 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodes.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1488, column 44
    function locationRef_478 (AggregateLimit :  AggregateLimit) : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimitDetail.createDestination(Claim, AggregateLimit)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1484, column 61
    function locationRef_479 () : pcf.api.Destination {
      return pcf.ClaimPolicyAggregateLimits.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOption (id=PolicyVehiclesLocationsOption) at ClaimPrintout.pcf: line 1339, column 44
    function printable_444 () : java.lang.Boolean {
      return helper.isAutoClaim()
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1357, column 53
    function printable_446 () : java.lang.Boolean {
      return canShowClaimPolicyLocations
    }
    
    // 'printable' attribute on PrintOption (id=PolicyTrips) at ClaimPrintout.pcf: line 1368, column 47
    function printable_451 () : java.lang.Boolean {
      return canShowClaimPolicyTrips
    }
    
    // 'printable' attribute on PrintOption (id=PolicyStatCodesOption) at ClaimPrintout.pcf: line 1395, column 46
    function printable_456 () : java.lang.Boolean {
      return canShowPolicyStatCodes
    }
    
    // PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function value_481 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function visible_480 () : java.lang.Boolean {
      return perm.System.viewpolicy
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function visible_482 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Policy3Section) at ClaimPrintout.pcf: line 1326, column 44
    function visible_486 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 471, column 51
    function locationRef_108 (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
      return pcf.FixedPropertyIncidentDetailPrint.createDestination(fixedPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 467, column 64
    function locationRef_110 () : pcf.api.Destination {
      return pcf.FixedPropertyIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 467, column 64
    function printable_109 () : java.lang.Boolean {
      return !helper.FixedPropertyIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintSection (id=PropertyIncident2Section) at ClaimPrintout.pcf: line 461, column 49
    function printable_112 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=PropertyIncident2Section) at ClaimPrintout.pcf: line 461, column 49
    function visible_111 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PropertyIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function defaultSetter_320 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1127, column 51
    function locationRef_313 (fixedPropertyIncident :  FixedPropertyIncident) : pcf.api.Destination {
      return pcf.FixedPropertyIncidentDetailPrint.createDestination(fixedPropertyIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1123, column 64
    function locationRef_315 () : pcf.api.Destination {
      return pcf.FixedPropertyIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1123, column 64
    function printable_314 () : java.lang.Boolean {
      return !helper.FixedPropertyIncidents.IsEmpty
    }
    
    // PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function value_317 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function visible_316 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function visible_318 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=PropertyIncident3Section) at ClaimPrintout.pcf: line 1117, column 49
    function visible_322 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 171, column 45
    function locationRef_25 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations1Section) at ClaimPrintout.pcf: line 166, column 49
    function printable_27 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=SpecialInvestigations1Section) at ClaimPrintout.pcf: line 166, column 49
    function visible_26 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 573, column 45
    function locationRef_140 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations2Section) at ClaimPrintout.pcf: line 568, column 49
    function printable_142 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // PrintSection (id=SpecialInvestigations2Section) at ClaimPrintout.pcf: line 568, column 49
    function visible_141 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SpecialInvestigations3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function defaultSetter_379 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1235, column 45
    function locationRef_374 () : pcf.api.Destination {
      return pcf.SIDetails.createDestination(Claim)
    }
    
    // PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function value_376 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function visible_375 () : java.lang.Boolean {
      return perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function visible_377 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=SpecialInvestigations3Section) at ClaimPrintout.pcf: line 1230, column 49
    function visible_381 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 357, column 54
    function locationRef_77 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation1Section) at ClaimPrintout.pcf: line 352, column 87
    function printable_79 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // PrintSection (id=Subrogation1Section) at ClaimPrintout.pcf: line 352, column 87
    function visible_78 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 842, column 54
    function locationRef_214 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation2Section) at ClaimPrintout.pcf: line 837, column 87
    function printable_216 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // PrintSection (id=Subrogation2Section) at ClaimPrintout.pcf: line 837, column 87
    function visible_215 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Subrogation3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function defaultSetter_607 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1795, column 54
    function locationRef_602 () : pcf.api.Destination {
      return pcf.SubrogationGeneral.createDestination(Claim)
    }
    
    // PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function value_604 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function visible_603 () : java.lang.Boolean {
      return perm.System.viewsubrodetails and Claim.SubrogationSummary != null
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function visible_605 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Subrogation3Section) at ClaimPrintout.pcf: line 1790, column 87
    function visible_609 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 119, column 48
    function locationRef_11 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 121, column 47
    function locationRef_12 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 123, column 51
    function locationRef_13 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Summary1Section) at ClaimPrintout.pcf: line 114, column 50
    function printable_15 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // PrintSection (id=Summary1Section) at ClaimPrintout.pcf: line 114, column 50
    function visible_14 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 403, column 48
    function locationRef_92 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 405, column 47
    function locationRef_93 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 407, column 51
    function locationRef_94 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Summary2Section) at ClaimPrintout.pcf: line 398, column 50
    function printable_96 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // PrintSection (id=Summary2Section) at ClaimPrintout.pcf: line 398, column 50
    function visible_95 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Summary3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function defaultSetter_279 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1028, column 48
    function locationRef_268 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1030, column 47
    function locationRef_269 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1032, column 51
    function locationRef_270 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1038, column 48
    function locationRef_271 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1044, column 54
    function locationRef_272 () : pcf.api.Destination {
      return pcf.ClaimSummary.createDestination(Claim, true)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1050, column 47
    function locationRef_273 () : pcf.api.Destination {
      return pcf.ClaimStatus.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1056, column 51
    function locationRef_274 () : pcf.api.Destination {
      return pcf.ClaimKeyMetrics.createDestination(Claim)
    }
    
    // PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function value_276 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function visible_275 () : java.lang.Boolean {
      return perm.System.viewclaimsummary
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function visible_277 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Summary3Section) at ClaimPrintout.pcf: line 1023, column 50
    function visible_281 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TravelIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 535, column 42
    function locationRef_128 (TripIncident :  TripIncident) : pcf.api.Destination {
      return pcf.TripIncidentDetailPrint.createDestination(Claim, TripIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 531, column 55
    function locationRef_130 () : pcf.api.Destination {
      return pcf.TripIncidentsPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 543, column 45
    function locationRef_131 (BaggageIncident :  BaggageIncident) : pcf.api.Destination {
      return pcf.BaggageIncidentDetailPrint.createDestination(Claim, BaggageIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 539, column 58
    function locationRef_133 () : pcf.api.Destination {
      return pcf.BaggageIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 531, column 55
    function printable_129 () : java.lang.Boolean {
      return !helper.TripIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 539, column 58
    function printable_132 () : java.lang.Boolean {
      return !helper.BaggageIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintSection (id=TravelIncident2Section) at ClaimPrintout.pcf: line 525, column 44
    function printable_135 () : java.lang.Boolean {
      return helper.isTravelClaim()
    }
    
    // PrintSection (id=TravelIncident2Section) at ClaimPrintout.pcf: line 525, column 44
    function visible_134 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TravelIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function defaultSetter_359 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1191, column 42
    function locationRef_349 (TripIncident :  TripIncident) : pcf.api.Destination {
      return pcf.TripIncidentDetailPrint.createDestination(Claim, TripIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1187, column 55
    function locationRef_351 () : pcf.api.Destination {
      return pcf.TripIncidentsPrint.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1199, column 45
    function locationRef_352 (BaggageIncident :  BaggageIncident) : pcf.api.Destination {
      return pcf.BaggageIncidentDetailPrint.createDestination(Claim, BaggageIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1195, column 58
    function locationRef_354 () : pcf.api.Destination {
      return pcf.BaggageIncidentsPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1187, column 55
    function printable_350 () : java.lang.Boolean {
      return !helper.TripIncidents.IsEmpty
    }
    
    // 'printable' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1195, column 58
    function printable_353 () : java.lang.Boolean {
      return !helper.BaggageIncidents.IsEmpty
    }
    
    // PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function value_356 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function visible_355 () : java.lang.Boolean {
      return helper.isTravelClaim()
    }
    
    // 'childrenVisible' attribute on PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function visible_357 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=TravelIncident3Section) at ClaimPrintout.pcf: line 1181, column 44
    function visible_361 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncident2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 452, column 45
    function locationRef_104 (vehicleIncident :  VehicleIncident) : pcf.api.Destination {
      return pcf.VehicleIncidentDetailPrint.createDestination(vehicleIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 448, column 55
    function locationRef_105 () : pcf.api.Destination {
      return pcf.VehicleIncidentPrint.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=VehicleIncident2Section) at ClaimPrintout.pcf: line 443, column 74
    function printable_107 () : java.lang.Boolean {
      return helper.isAutoClaim() and perm.System.viewclaimbasics
    }
    
    // PrintSection (id=VehicleIncident2Section) at ClaimPrintout.pcf: line 443, column 74
    function visible_106 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VehicleIncident3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function defaultSetter_309 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1108, column 45
    function locationRef_303 (vehicleIncident :  VehicleIncident) : pcf.api.Destination {
      return pcf.VehicleIncidentDetailPrint.createDestination(vehicleIncident)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1104, column 55
    function locationRef_304 () : pcf.api.Destination {
      return pcf.VehicleIncidentPrint.createDestination(Claim)
    }
    
    // PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function value_306 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function visible_305 () : java.lang.Boolean {
      return helper.isAutoClaim() and perm.System.viewclaimbasics
    }
    
    // 'childrenVisible' attribute on PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function visible_307 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=VehicleIncident3Section) at ClaimPrintout.pcf: line 1099, column 74
    function visible_311 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan1SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 135, column 49
    function locationRef_16 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Workplan1Section) at ClaimPrintout.pcf: line 130, column 46
    function printable_18 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // PrintSection (id=Workplan1Section) at ClaimPrintout.pcf: line 130, column 46
    function visible_17 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithoutDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan2SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 423, column 38
    function locationRef_97 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 419, column 48
    function locationRef_98 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'printable' attribute on PrintSection (id=Workplan2Section) at ClaimPrintout.pcf: line 414, column 46
    function printable_100 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // PrintSection (id=Workplan2Section) at ClaimPrintout.pcf: line 414, column 46
    function visible_99 () : java.lang.Boolean {
      return Choice == "AllClaimPagesWithDetailsChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/shared/printing/ClaimPrintout.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Workplan3SectionExpressionsImpl extends ClaimPrintoutExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function defaultSetter_290 (__VALUE_TO_SET :  java.lang.Object) : void {
      __selectedValue = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1068, column 49
    function locationRef_283 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // 'locationRef' attribute on PrintDetail at ClaimPrintout.pcf: line 1078, column 38
    function locationRef_284 (Activity :  Activity) : pcf.api.Destination {
      return pcf.ActivityDetailPrint.createDestination(Activity)
    }
    
    // 'locationRef' attribute on PrintOptionLocation at ClaimPrintout.pcf: line 1074, column 48
    function locationRef_285 () : pcf.api.Destination {
      return pcf.ClaimWorkplan.createDestination(Claim)
    }
    
    // PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function value_287 () : java.lang.Object {
      return null
    }
    
    // 'printable' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function visible_286 () : java.lang.Boolean {
      return perm.System.viewworkplan
    }
    
    // 'childrenVisible' attribute on PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function visible_288 () : java.lang.Boolean {
      return __selectedValue
    }
    
    // PrintSection (id=Workplan3Section) at ClaimPrintout.pcf: line 1063, column 46
    function visible_292 () : java.lang.Boolean {
      return Choice == "CustomChoice"
    }
    
    property get __selectedValue () : boolean {
      return getPrintSectionSelectedValue(1) as java.lang.Boolean
    }
    
    property set __selectedValue ($arg :  boolean) {
      setPrintSectionSelectedValue(1, $arg)
    }
    
    
  }
  
  
}