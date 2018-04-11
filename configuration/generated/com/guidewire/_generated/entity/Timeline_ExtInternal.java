package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Timeline_Ext.eti;Timeline_Ext.eix;Timeline_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface Timeline_ExtInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Adds the given element to the TimelineEntries array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTimelineEntries(entity.TimelineEntry_Ext element);
  
  
  /**
   * Gets the value of the Claim field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Claim getClaim();
  
  
  public gw.pl.persistence.core.Key getClaimID();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RestoreDate field.
   * Date when the timeline starts watching the bundle for commits of entities to create timeline entries
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRestoreDate();
  
  
  /**
   * Gets the value of the TimelineEntries field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TimelineEntry_Ext[] getTimelineEntries();
  
  
  /**
   * Gets the value of the TimelineStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TimelineStatus_Ext getTimelineStatus();
  
  
  /**
   * Removes the given element from the TimelineEntries array. This is achieved by marking the element for removal.
   */
  public void removeFromTimelineEntries(entity.TimelineEntry_Ext element);
  
  
  /**
   * Removes the given element from the TimelineEntries array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTimelineEntries(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Claim field.
   */
  public void setClaim(entity.Claim value);
  
  
  public void setClaimID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the RestoreDate field.
   */
  public void setRestoreDate(java.util.Date value);
  
  
  /**
   * Sets the value of the TimelineEntries field.
   */
  public void setTimelineEntries(entity.TimelineEntry_Ext[] value);
  
  
  /**
   * Sets the value of the TimelineStatus field.
   */
  public void setTimelineStatus(typekey.TimelineStatus_Ext value);
  
  
  
}