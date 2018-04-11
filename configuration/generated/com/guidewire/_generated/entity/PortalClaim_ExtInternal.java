package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PortalClaim_Ext.eti;PortalClaim_Ext.eix;PortalClaim_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PortalClaim_ExtInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the ClaimInfo field.
   * Reference to Claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClaimInfo getClaimInfo();
  
  
  public gw.pl.persistence.core.Key getClaimInfoID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the PortalRecentlyViewed field.
   * Reference to PortalRecentlyViewed_Ext entity. Allows array of PortalClaim_Ext to exist on PortalRecentlyViewed_Ext
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PortalRecentlyViewed_Ext getPortalRecentlyViewed();
  
  
  public gw.pl.persistence.core.Key getPortalRecentlyViewedID();
  
  
  /**
   * Gets the value of the ViewedDate field.
   * The date the claim was last viewed in the Guidewire portal.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getViewedDate();
  
  
  /**
   * Sets the value of the ClaimInfo field.
   */
  public void setClaimInfo(entity.ClaimInfo value);
  
  
  public void setClaimInfoID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PortalRecentlyViewed field.
   */
  public void setPortalRecentlyViewed(entity.PortalRecentlyViewed_Ext value);
  
  
  public void setPortalRecentlyViewedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ViewedDate field.
   */
  public void setViewedDate(java.util.Date value);
  
  
  
}