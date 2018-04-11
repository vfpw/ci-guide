package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/users/UserDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailPageExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/users/UserDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (User :  User) : int {
      return 0
    }
    
    // 'beforeCommit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    function beforeCommit_36 (pickedValue :  java.lang.Object) : void {
      gw.api.admin.UserAuthorityLimitUtil.cleanUpUnusedCustomProfiles(User)
    }
    
    // 'canEdit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    function canEdit_37 () : java.lang.Boolean {
      return perm.User.edit
    }
    
    // 'canVisit' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    static function canVisit_38 (User :  User) : java.lang.Boolean {
      return perm.User.view
    }
    
    // 'initialValue' attribute on Variable at UserDetailPage.pcf: line 20, column 54
    function initialValue_0 () : gw.api.contact.ContactSystemLinkStatus {
      return gw.api.contact.ContactSystemUtil.INSTANCE.generateLinkStatus(User.Contact)
    }
    
    // 'initialValue' attribute on Variable at UserDetailPage.pcf: line 25, column 23
    function initialValue_1 () : boolean {
      return User.isEditable()
    }
    
    // Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    static function parent_39 (User :  User) : pcf.api.Destination {
      return pcf.UserDetailGroup.createDestination(User)
    }
    
    // 'title' attribute on Page (id=UserDetailPage) at UserDetailPage.pcf: line 10, column 80
    static function title_40 (User :  User) : java.lang.Object {
      return DisplayKey.get("Web.Admin.UserDetail", User.DisplayName)
    }
    
    override property get CurrentLocation () : pcf.UserDetailPage {
      return super.CurrentLocation as pcf.UserDetailPage
    }
    
    property get User () : User {
      return getVariableValue("User", 0) as User
    }
    
    property set User ($arg :  User) {
      setVariableValue("User", 0, $arg)
    }
    
    property get isObfuscatedEditable () : boolean {
      return getVariableValue("isObfuscatedEditable", 0) as java.lang.Boolean
    }
    
    property set isObfuscatedEditable ($arg :  boolean) {
      setVariableValue("isObfuscatedEditable", 0, $arg)
    }
    
    property get linkStatus () : gw.api.contact.ContactSystemLinkStatus {
      return getVariableValue("linkStatus", 0) as gw.api.contact.ContactSystemLinkStatus
    }
    
    property set linkStatus ($arg :  gw.api.contact.ContactSystemLinkStatus) {
      setVariableValue("linkStatus", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/users/UserDetailPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailScreenExpressionsImpl extends UserDetailPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 63, column 47
    function def_onEnter_11 (def :  pcf.UserAuthorityLimitsDV) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 73, column 42
    function def_onEnter_14 (def :  pcf.UserAttributesLV) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 87, column 38
    function def_onEnter_17 (def :  pcf.UserRegionLV) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_onEnter_26 (def :  pcf.UserAssignableDV_activity) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_onEnter_28 (def :  pcf.UserAssignableDV_claim) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_onEnter_30 (def :  pcf.UserAssignableDV_exposure) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_onEnter_32 (def :  pcf.UserAssignableDV_matter) : void {
      def.onEnter(User)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 43, column 50
    function def_onEnter_5 (def :  pcf.UserDetailDV) : void {
      def.onEnter(User, linkStatus)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 53, column 51
    function def_onEnter_8 (def :  pcf.UserProfileDV) : void {
      def.onEnter(User, linkStatus)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 63, column 47
    function def_refreshVariables_12 (def :  pcf.UserAuthorityLimitsDV) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 73, column 42
    function def_refreshVariables_15 (def :  pcf.UserAttributesLV) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 87, column 38
    function def_refreshVariables_18 (def :  pcf.UserRegionLV) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_refreshVariables_27 (def :  pcf.UserAssignableDV_activity) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_refreshVariables_29 (def :  pcf.UserAssignableDV_claim) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_refreshVariables_31 (def :  pcf.UserAssignableDV_exposure) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function def_refreshVariables_33 (def :  pcf.UserAssignableDV_matter) : void {
      def.refreshVariables(User)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 43, column 50
    function def_refreshVariables_6 (def :  pcf.UserDetailDV) : void {
      def.refreshVariables(User, linkStatus)
    }
    
    // 'def' attribute on PanelRef at UserDetailPage.pcf: line 53, column 51
    function def_refreshVariables_9 (def :  pcf.UserProfileDV) : void {
      def.refreshVariables(User, linkStatus)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=UserAssignableViewChooser) at UserDetailPage.pcf: line 110, column 58
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      entityType = (__VALUE_TO_SET as typekey.UserDetailAssignable)
    }
    
    // 'initialValue' attribute on Variable at UserDetailPage.pcf: line 31, column 38
    function initialValue_2 () : UserDetailAssignable {
      return UserDetailAssignable.TC_CLAIM
    }
    
    // 'mode' attribute on PanelRef (id=UserAssignables) at UserDetailPage.pcf: line 103, column 31
    function mode_34 () : java.lang.Object {
      return entityType
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailPage.pcf: line 34, column 104
    function toolbarButtonSet_onEnter_3 (def :  pcf.UserDetailToolbarButtonSet) : void {
      def.onEnter(User, linkStatus, true, isObfuscatedEditable)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailPage.pcf: line 34, column 104
    function toolbarButtonSet_refreshVariables_4 (def :  pcf.UserDetailToolbarButtonSet) : void {
      def.refreshVariables(User, linkStatus, true, isObfuscatedEditable)
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserAssignableViewChooser) at UserDetailPage.pcf: line 110, column 58
    function valueRange_23 () : java.lang.Object {
      return UserDetailAssignable.getTypeKeys(false)
    }
    
    // 'value' attribute on ToolbarRangeInput (id=UserAssignableViewChooser) at UserDetailPage.pcf: line 110, column 58
    function value_20 () : typekey.UserDetailAssignable {
      return entityType
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserAssignableViewChooser) at UserDetailPage.pcf: line 110, column 58
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserAssignableViewChooser) at UserDetailPage.pcf: line 110, column 58
    function verifyValueRangeIsAllowedType_24 ($$arg :  typekey.UserDetailAssignable[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ToolbarRangeInput (id=UserAssignableViewChooser) at UserDetailPage.pcf: line 110, column 58
    function verifyValueRange_25 () : void {
      var __valueRangeArg = UserDetailAssignable.getTypeKeys(false)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'visible' attribute on Card (id=BasicsCard) at UserDetailPage.pcf: line 41, column 36
    function visible_7 () : java.lang.Boolean {
      return perm.User.view
    }
    
    property get entityType () : UserDetailAssignable {
      return getVariableValue("entityType", 1) as UserDetailAssignable
    }
    
    property set entityType ($arg :  UserDetailAssignable) {
      setVariableValue("entityType", 1, $arg)
    }
    
    
  }
  
  
}