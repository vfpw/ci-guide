package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/users/UserDetailToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserDetailToolbarButtonSetExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/users/UserDetailToolbarButtonSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserDetailToolbarButtonSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=UserDetailToolbarButtons_DeleteUserButton) at UserDetailToolbarButtonSet.pcf: line 33, column 83
    function action_6 () : void {
      gw.api.admin.AdminUtil.deleteUser(user); AdminWelcome.go();
    }
    
    // 'initialValue' attribute on Variable at UserDetailToolbarButtonSet.pcf: line 22, column 46
    function initialValue_0 () : gw.api.admin.UserContactHandle {
      return new gw.api.admin.UserContactHandle(user)
    }
    
    // EditButtons at UserDetailToolbarButtonSet.pcf: line 25, column 45
    function label_3 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailToolbarButtonSet.pcf: line 37, column 24
    function toolbarButtonSet_onEnter_7 (def :  pcf.LinkContactToolbarButtonSet) : void {
      def.onEnter(contactHandle, linkStatus)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailToolbarButtonSet.pcf: line 39, column 110
    function toolbarButtonSet_onEnter_9 (def :  pcf.ViewAddressBookToolbarButtonSet) : void {
      def.onEnter(contactHandle, linkStatus, allowEditInAddressBook)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailToolbarButtonSet.pcf: line 39, column 110
    function toolbarButtonSet_refreshVariables_10 (def :  pcf.ViewAddressBookToolbarButtonSet) : void {
      def.refreshVariables(contactHandle, linkStatus, allowEditInAddressBook)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at UserDetailToolbarButtonSet.pcf: line 37, column 24
    function toolbarButtonSet_refreshVariables_8 (def :  pcf.LinkContactToolbarButtonSet) : void {
      def.refreshVariables(contactHandle, linkStatus)
    }
    
    // 'editVisible' attribute on EditButtons at UserDetailToolbarButtonSet.pcf: line 25, column 45
    function visible_1 () : java.lang.Boolean {
      return isObfuscatedEditable
    }
    
    // 'visible' attribute on ToolbarButton (id=UserDetailToolbarButtons_DeleteUserButton) at UserDetailToolbarButtonSet.pcf: line 33, column 83
    function visible_5 () : java.lang.Boolean {
      return  user.SafeToDelete and perm.User.delete and isObfuscatedEditable
    }
    
    property get allowEditInAddressBook () : boolean {
      return getRequireValue("allowEditInAddressBook", 0) as java.lang.Boolean
    }
    
    property set allowEditInAddressBook ($arg :  boolean) {
      setRequireValue("allowEditInAddressBook", 0, $arg)
    }
    
    property get contactHandle () : gw.api.admin.UserContactHandle {
      return getVariableValue("contactHandle", 0) as gw.api.admin.UserContactHandle
    }
    
    property set contactHandle ($arg :  gw.api.admin.UserContactHandle) {
      setVariableValue("contactHandle", 0, $arg)
    }
    
    property get isObfuscatedEditable () : boolean {
      return getRequireValue("isObfuscatedEditable", 0) as java.lang.Boolean
    }
    
    property set isObfuscatedEditable ($arg :  boolean) {
      setRequireValue("isObfuscatedEditable", 0, $arg)
    }
    
    property get linkStatus () : gw.api.contact.ContactSystemLinkStatus {
      return getRequireValue("linkStatus", 0) as gw.api.contact.ContactSystemLinkStatus
    }
    
    property set linkStatus ($arg :  gw.api.contact.ContactSystemLinkStatus) {
      setRequireValue("linkStatus", 0, $arg)
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}