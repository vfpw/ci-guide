package com.guidewire._generated.security;

import com.guidewire.cc.domain.claim.impl.ClaimFinancialsPermissionHandler;
import com.guidewire.cc.domain.claim.impl.ClaimPermissionHandler;
import com.guidewire.pl.system.security.ObjectPermissionKey;
import com.guidewire.pl.system.security.PermissionKey;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;

@Generated(comments = "security-config-app.xml;security-config-pl.xml;security-config.xml", date = "", value = "com.guidewire.pl.permissions.codegen.EntityPermissionsGenerator")
public class ReserveSetPermKeys {
  public static final ObjectPermissionKey DELETE = new ObjectPermissionKey("delete", entity.ReserveSet.class.getSimpleName(), new ClaimFinancialsPermissionHandler(com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("resdelete").withDescription("Permission to delete a reserve set").build()));
  
  public static final ObjectPermissionKey EDIT = new ObjectPermissionKey("edit", entity.ReserveSet.class.getSimpleName(), new ClaimFinancialsPermissionHandler(com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("resedit").withDescription("Permission to edit an existing reserve set").build()));
  
  public static final ObjectPermissionKey VIEW = new ObjectPermissionKey("view", entity.ReserveSet.class.getSimpleName(), new ClaimPermissionHandler(com.guidewire.pl.system.security.PermissionHandlerConfig.builder().withPermissions("claimviewres").withDescription("Permission to view a reserve set").build()));
  
  public static List<PermissionKey> getPermissionKeys() {
    List<PermissionKey> permissionKeys = new ArrayList<>();
    permissionKeys.add(DELETE);
    permissionKeys.add(EDIT);
    permissionKeys.add(VIEW);
    return java.util.Collections.unmodifiableList(permissionKeys);
  }
  
  
}