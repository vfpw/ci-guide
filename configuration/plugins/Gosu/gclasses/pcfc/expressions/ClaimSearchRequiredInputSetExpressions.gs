package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimSearchRequiredInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/claims/ClaimSearchRequiredInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimSearchRequiredInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 10, column 49
    function action_29 () : void {
      pcf.GroupSearchPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 13, column 49
    function action_31 () : void {
      pcf.OrganizationGroupTreePopup.push()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 9, column 49
    function action_51 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 12, column 49
    function action_53 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 9, column 49
    function action_67 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 12, column 49
    function action_69 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 10, column 49
    function action_dest_30 () : pcf.api.Destination {
      return pcf.GroupSearchPopup.createDestination()
    }
    
    // 'action' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 13, column 49
    function action_dest_32 () : pcf.api.Destination {
      return pcf.OrganizationGroupTreePopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 9, column 49
    function action_dest_52 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 12, column 49
    function action_dest_54 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 9, column 49
    function action_dest_68 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 12, column 49
    function action_dest_70 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'available' attribute on GroupInput (id=AssignedToGroup) at ClaimSearchRequiredInputSet.pcf: line 60, column 68
    function available_27 () : java.lang.Boolean {
      return liveClaimFlag
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 43, column 54
    function def_onEnter_13 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 43, column 54
    function def_onEnter_15 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 46, column 54
    function def_onEnter_18 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 46, column 54
    function def_onEnter_20 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.onEnter(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 43, column 54
    function def_refreshVariables_14 (def :  pcf.GlobalPersonNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 43, column 54
    function def_refreshVariables_16 (def :  pcf.GlobalPersonNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 46, column 54
    function def_refreshVariables_19 (def :  pcf.GlobalContactNameInputSet_Japan) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'def' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 46, column 54
    function def_refreshVariables_21 (def :  pcf.GlobalContactNameInputSet_default) : void {
      def.refreshVariables(new gw.api.name.SearchNameOwner(ClaimSearchCriteria.NameCriteria))
    }
    
    // 'value' attribute on TextInput (id=LicensePlate) at ClaimSearchRequiredInputSet.pcf: line 107, column 49
    function defaultSetter_100 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.licensePlate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=SearchFor) at ClaimSearchRequiredInputSet.pcf: line 40, column 54
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameSearchType = (__VALUE_TO_SET as typekey.ClaimSearchNameSearchType)
    }
    
    // 'value' attribute on TextInput (id=TaxID) at ClaimSearchRequiredInputSet.pcf: line 52, column 55
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.NameCriteria.TaxId = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber) at ClaimSearchRequiredInputSet.pcf: line 26, column 48
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.ClaimNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 7, column 52
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AssignedToGroup.AssignedToGroup = (__VALUE_TO_SET as entity.Group)
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups) at ClaimSearchRequiredInputSet.pcf: line 66, column 69
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AssignedToGroup.IncludeSubGroups = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 6, column 85
    function defaultSetter_57 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.AssignedToUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber) at ClaimSearchRequiredInputSet.pcf: line 32, column 49
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 6, column 85
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.CreatedByUser = (__VALUE_TO_SET as entity.User)
    }
    
    // 'value' attribute on RangeInput (id=CatNumber) at ClaimSearchRequiredInputSet.pcf: line 93, column 39
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.Catastrophe = (__VALUE_TO_SET as entity.Catastrophe)
    }
    
    // 'value' attribute on TextInput (id=VinNumber) at ClaimSearchRequiredInputSet.pcf: line 100, column 46
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      ClaimSearchCriteria.vinNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ClaimSearchRequiredInputSet.pcf: line 18, column 23
    function initialValue_0 () : boolean {
      return ClaimSearchCriteria.ClaimSearchType == ClaimSearchType.TC_ACTIVE
    }
    
    // 'mode' attribute on InputSetRef at ClaimSearchRequiredInputSet.pcf: line 43, column 54
    function mode_17 () : java.lang.Object {
      return gw.api.name.NameLocaleSettings.PCFMode
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 7, column 52
    function valueRange_37 () : java.lang.Object {
      return gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 6, column 85
    function valueRange_59 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber) at ClaimSearchRequiredInputSet.pcf: line 93, column 39
    function valueRange_87 () : java.lang.Object {
      return gw.api.admin.CatastropheUtil.getCatastrophes()
    }
    
    // 'value' attribute on TextInput (id=TaxID) at ClaimSearchRequiredInputSet.pcf: line 52, column 55
    function valueRoot_26 () : java.lang.Object {
      return ClaimSearchCriteria.NameCriteria
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 7, column 52
    function valueRoot_36 () : java.lang.Object {
      return ClaimSearchCriteria.AssignedToGroup
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber) at ClaimSearchRequiredInputSet.pcf: line 26, column 48
    function valueRoot_4 () : java.lang.Object {
      return ClaimSearchCriteria
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber) at ClaimSearchRequiredInputSet.pcf: line 26, column 48
    function value_1 () : java.lang.String {
      return ClaimSearchCriteria.ClaimNumber
    }
    
    // 'value' attribute on TextInput (id=TaxID) at ClaimSearchRequiredInputSet.pcf: line 52, column 55
    function value_23 () : java.lang.String {
      return ClaimSearchCriteria.NameCriteria.TaxId
    }
    
    // 'value' attribute on GroupInput (id=AssignedToGroup) at ClaimSearchRequiredInputSet.pcf: line 60, column 68
    function value_28 () : entity.Group {
      return ClaimSearchCriteria.AssignedToGroup.AssignedToGroup
    }
    
    // 'value' attribute on BooleanRadioInput (id=IncludeSubGroups) at ClaimSearchRequiredInputSet.pcf: line 66, column 69
    function value_44 () : java.lang.Boolean {
      return ClaimSearchCriteria.AssignedToGroup.IncludeSubGroups
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber) at ClaimSearchRequiredInputSet.pcf: line 32, column 49
    function value_5 () : java.lang.String {
      return ClaimSearchCriteria.PolicyNumber
    }
    
    // 'value' attribute on UserInput (id=AssignedToUser) at ClaimSearchRequiredInputSet.pcf: line 75, column 32
    function value_50 () : entity.User {
      return ClaimSearchCriteria.AssignedToUser
    }
    
    // 'value' attribute on UserInput (id=CreatedBy) at ClaimSearchRequiredInputSet.pcf: line 83, column 32
    function value_66 () : entity.User {
      return ClaimSearchCriteria.CreatedByUser
    }
    
    // 'value' attribute on RangeInput (id=CatNumber) at ClaimSearchRequiredInputSet.pcf: line 93, column 39
    function value_82 () : entity.Catastrophe {
      return ClaimSearchCriteria.Catastrophe
    }
    
    // 'value' attribute on TypeKeyInput (id=SearchFor) at ClaimSearchRequiredInputSet.pcf: line 40, column 54
    function value_9 () : typekey.ClaimSearchNameSearchType {
      return ClaimSearchCriteria.NameSearchType
    }
    
    // 'value' attribute on TextInput (id=VinNumber) at ClaimSearchRequiredInputSet.pcf: line 100, column 46
    function value_91 () : java.lang.String {
      return ClaimSearchCriteria.vinNumber
    }
    
    // 'value' attribute on TextInput (id=LicensePlate) at ClaimSearchRequiredInputSet.pcf: line 107, column 49
    function value_97 () : java.lang.String {
      return ClaimSearchCriteria.licensePlate
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_38 ($$arg :  entity.Group[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_38 ($$arg :  gw.api.database.IQueryBeanResult<entity.Group>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 7, column 52
    function verifyValueRangeIsAllowedType_38 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_60 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_60 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_60 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_76 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_76 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_76 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber) at ClaimSearchRequiredInputSet.pcf: line 93, column 39
    function verifyValueRangeIsAllowedType_88 ($$arg :  entity.Catastrophe[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber) at ClaimSearchRequiredInputSet.pcf: line 93, column 39
    function verifyValueRangeIsAllowedType_88 ($$arg :  gw.api.database.IQueryBeanResult<entity.Catastrophe>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber) at ClaimSearchRequiredInputSet.pcf: line 93, column 39
    function verifyValueRangeIsAllowedType_88 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on GroupInput (id=AssignedToGroup) at GroupWidget.xml: line 7, column 52
    function verifyValueRange_39 () : void {
      var __valueRangeArg = gw.api.admin.BaseAdminUtil.getGroupsForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_38(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=AssignedToUser) at UserWidget.xml: line 6, column 85
    function verifyValueRange_61 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_60(__valueRangeArg)
    }
    
    // 'valueRange' attribute on UserInput (id=CreatedBy) at UserWidget.xml: line 6, column 85
    function verifyValueRange_77 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_76(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=CatNumber) at ClaimSearchRequiredInputSet.pcf: line 93, column 39
    function verifyValueRange_89 () : void {
      var __valueRangeArg = gw.api.admin.CatastropheUtil.getCatastrophes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_88(__valueRangeArg)
    }
    
    property get ClaimSearchCriteria () : ClaimSearchCriteria {
      return getRequireValue("ClaimSearchCriteria", 0) as ClaimSearchCriteria
    }
    
    property set ClaimSearchCriteria ($arg :  ClaimSearchCriteria) {
      setRequireValue("ClaimSearchCriteria", 0, $arg)
    }
    
    property get liveClaimFlag () : boolean {
      return getVariableValue("liveClaimFlag", 0) as java.lang.Boolean
    }
    
    property set liveClaimFlag ($arg :  boolean) {
      setVariableValue("liveClaimFlag", 0, $arg)
    }
    
    
  }
  
  
}