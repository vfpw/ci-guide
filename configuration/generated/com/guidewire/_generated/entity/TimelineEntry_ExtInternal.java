package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TimelineEntry_Ext.eti;TimelineEntry_Ext.eix;TimelineEntry_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TimelineEntry_ExtInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Adds the given element to the TimelineLinks array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTimelineLinks(entity.TimelineLink_Ext element);
  
  
  /**
   * Gets the value of the EventDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEventDate();
  
  
  /**
   * Gets the value of the Importance field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TimelineImportance_Ext getImportance();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Summary field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getSummary();
  
  
  /**
   * Gets the value of the Timeline field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Timeline_Ext getTimeline();
  
  
  /**
   * Gets the value of the TimelineCategory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.TimelineCategory_Ext getTimelineCategory();
  
  
  public gw.pl.persistence.core.Key getTimelineID();
  
  
  /**
   * Gets the value of the TimelineLinks field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TimelineLink_Ext[] getTimelineLinks();
  
  
  /**
   * Gets the value of the PossibleDuplicate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPossibleDuplicate();
  
  
  /**
   * Removes the given element from the TimelineLinks array. This is achieved by marking the element for removal.
   */
  public void removeFromTimelineLinks(entity.TimelineLink_Ext element);
  
  
  /**
   * Removes the given element from the TimelineLinks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTimelineLinks(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the EventDate field.
   */
  public void setEventDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Importance field.
   */
  public void setImportance(typekey.TimelineImportance_Ext value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the PossibleDuplicate field.
   */
  public void setPossibleDuplicate(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Summary field.
   */
  public void setSummary(java.lang.String value);
  
  
  /**
   * Sets the value of the Timeline field.
   */
  public void setTimeline(entity.Timeline_Ext value);
  
  
  /**
   * Sets the value of the TimelineCategory field.
   */
  public void setTimelineCategory(typekey.TimelineCategory_Ext value);
  
  
  public void setTimelineID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the TimelineLinks field.
   */
  public void setTimelineLinks(entity.TimelineLink_Ext[] value);
  
  
  
}