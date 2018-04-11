package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PortalRecentlyViewed_Ext.eti;PortalRecentlyViewed_Ext.eix;PortalRecentlyViewed_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PortalRecentlyViewed_ExtInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the PortalClaims array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToPortalClaims(entity.PortalClaim_Ext element);
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PortalClaims field.
   * Array of recently viewed claims in a Guidewire portal.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PortalClaim_Ext[] getPortalClaims();
  
  
  /**
   * Gets the value of the PortalUser field.
   * The username of the portal user
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPortalUser();
  
  
  /**
   * Removes the given element from the PortalClaims array. This is achieved by marking the element for removal.
   */
  public void removeFromPortalClaims(entity.PortalClaim_Ext element);
  
  
  /**
   * Removes the given element from the PortalClaims array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPortalClaims(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PortalClaims field.
   */
  public void setPortalClaims(entity.PortalClaim_Ext[] value);
  
  
  /**
   * Sets the value of the PortalUser field.
   */
  public void setPortalUser(java.lang.String value);
  
  
  
}