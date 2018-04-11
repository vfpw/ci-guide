package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RepairOption_Ext.eti;RepairOption_Ext.eix;RepairOption_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RepairOption_ExtInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RepairOptionChoice field.
   * The choice or a repair option
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RepairOptionChoice_Ext getRepairOptionChoice();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RepairOption_Ext getSubtype();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the RepairOptionChoice field.
   */
  public void setRepairOptionChoice(typekey.RepairOptionChoice_Ext value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RepairOption_Ext value);
  
  
  
}