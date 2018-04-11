package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TimelineLink_Ext.eti;TimelineLink_Ext.eix;TimelineLink_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TimelineLink_ExtInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Gets the value of the ArbitraryLinkEnum field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getArbitraryLinkEnum();
  
  
  /**
   * Gets the value of the BeanID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBeanID();
  
  
  /**
   * Gets the value of the BeanType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBeanType();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the Sequence field.
   * Order that timeline links are inserted in the TimelineEntry summary
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence();
  
  
  /**
   * Gets the value of the TimelineEntry field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TimelineEntry_Ext getTimelineEntry();
  
  
  public gw.pl.persistence.core.Key getTimelineEntryID();
  
  
  /**
   * Sets the value of the ArbitraryLinkEnum field.
   */
  public void setArbitraryLinkEnum(java.lang.String value);
  
  
  /**
   * Sets the value of the BeanID field.
   */
  public void setBeanID(java.lang.String value);
  
  
  /**
   * Sets the value of the BeanType field.
   */
  public void setBeanType(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the TimelineEntry field.
   */
  public void setTimelineEntry(entity.TimelineEntry_Ext value);
  
  
  public void setTimelineEntryID(gw.pl.persistence.core.Key value);
  
  
  
}