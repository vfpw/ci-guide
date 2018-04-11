package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "JurisdictionCondition.eti;JurisdictionCondition.eix;JurisdictionCondition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface JurisdictionConditionInternal extends com.guidewire._generated.entity.ClassificationConditionInternal {
  /**
   * Adds the given element to the ConditionFilters array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToConditionFilters(entity.JurisdictionConditionFilter element);
  
  
  /**
   * Gets the value of the ConditionFilters field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.JurisdictionConditionFilter[] getConditionFilters();
  
  
  /**
   * Removes the given element from the ConditionFilters array. This is achieved by marking the element for removal.
   */
  public void removeFromConditionFilters(entity.JurisdictionConditionFilter element);
  
  
  /**
   * Removes the given element from the ConditionFilters array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromConditionFilters(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ConditionFilters field.
   */
  public void setConditionFilters(entity.JurisdictionConditionFilter[] value);
  
  
  
}