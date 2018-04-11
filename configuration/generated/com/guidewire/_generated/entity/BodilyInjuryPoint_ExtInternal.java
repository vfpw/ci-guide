package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BodilyInjuryPoint_Ext.eti;BodilyInjuryPoint_Ext.eix;BodilyInjuryPoint_Ext.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface BodilyInjuryPoint_ExtInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.ExtractableInternal {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the bodilyInjuryComment field.
   * Comment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getbodilyInjuryComment();
  
  
  /**
   * Gets the value of the injuredParty field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InjuryIncident getinjuredParty();
  
  
  public gw.pl.persistence.core.Key getinjuredPartyID();
  
  
  /**
   * Gets the value of the injuryPoint field.
   * The Point on a person that got injured
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BodilyInjuryPoints_Ext getinjuryPoint();
  
  
  /**
   * Gets the value of the injurySeverity field.
   * The severity of the injury point
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BodilyInjurySeverity_Ext getinjurySeverity();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the bodilyInjuryComment field.
   */
  public void setbodilyInjuryComment(java.lang.String value);
  
  
  /**
   * Sets the value of the injuredParty field.
   */
  public void setinjuredParty(entity.InjuryIncident value);
  
  
  public void setinjuredPartyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the injuryPoint field.
   */
  public void setinjuryPoint(typekey.BodilyInjuryPoints_Ext value);
  
  
  /**
   * Sets the value of the injurySeverity field.
   */
  public void setinjurySeverity(typekey.BodilyInjurySeverity_Ext value);
  
  
  
}