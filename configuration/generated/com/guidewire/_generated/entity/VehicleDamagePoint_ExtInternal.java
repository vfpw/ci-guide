package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "VehicleDamagePoint_Ext.eti;VehicleDamagePoint_Ext.eix;VehicleDamagePoint_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface VehicleDamagePoint_ExtInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the damagePoint field.
   * The Point on a vehicle that got damaged
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.VehicleDamagePoints_Ext getdamagePoint();
  
  
  /**
   * Gets the value of the vechicle field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.VehicleIncident getvechicle();
  
  
  public gw.pl.persistence.core.Key getvechicleID();
  
  
  /**
   * Gets the value of the isDamaged field.
   * If the part is damaged
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isisDamaged();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the damagePoint field.
   */
  public void setdamagePoint(typekey.VehicleDamagePoints_Ext value);
  
  
  /**
   * Sets the value of the isDamaged field.
   */
  public void setisDamaged(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the vechicle field.
   */
  public void setvechicle(entity.VehicleIncident value);
  
  
  public void setvechicleID(gw.pl.persistence.core.Key value);
  
  
  
}