package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccidentDiagramDataPEL.eti;AccidentDiagramDataPEL.eix;AccidentDiagramDataPEL.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface AccidentDiagramDataPELInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the AccidentCircumstance field.
   * General circumstances of the accident
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccidentCircumstancePEL getAccidentCircumstance();
  
  
  /**
   * Gets the value of the AccidentDetail field.
   * Description of the accident scenario
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccidentDetailPEL getAccidentDetail();
  
  
  /**
   * Gets the value of the BlueCarFaultPercentage field.
   * Fault percent of the green car
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBlueCarFaultPercentage();
  
  
  /**
   * Gets the value of the DirectionOfTravel field.
   * General direction of travel
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DirectionOfTravelPEL getDirectionOfTravel();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RedCarFaultPercentage field.
   * Fault percent of the red car
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getRedCarFaultPercentage();
  
  
  /**
   * Gets the value of the Intersection field.
   * Indicates if this scenario can occur at an intersection
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIntersection();
  
  
  /**
   * Gets the value of the LaneChange field.
   * Indicates if this scenario can occur during lane change
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLaneChange();
  
  
  /**
   * Gets the value of the Parking field.
   * Indicates if this scenario can occur during parking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isParking();
  
  
  /**
   * Gets the value of the Roundabout field.
   * Indicates if this scenario can occur at a roundabout
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isRoundabout();
  
  
  /**
   * Gets the value of the Turning field.
   * Indicates if this scenario can occur while turning
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isTurning();
  
  
  /**
   * Sets the value of the AccidentCircumstance field.
   */
  public void setAccidentCircumstance(typekey.AccidentCircumstancePEL value);
  
  
  /**
   * Sets the value of the AccidentDetail field.
   */
  public void setAccidentDetail(typekey.AccidentDetailPEL value);
  
  
  /**
   * Sets the value of the BlueCarFaultPercentage field.
   */
  public void setBlueCarFaultPercentage(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DirectionOfTravel field.
   */
  public void setDirectionOfTravel(typekey.DirectionOfTravelPEL value);
  
  
  /**
   * Sets the value of the Intersection field.
   */
  public void setIntersection(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LaneChange field.
   */
  public void setLaneChange(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the Parking field.
   */
  public void setParking(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the RedCarFaultPercentage field.
   */
  public void setRedCarFaultPercentage(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Roundabout field.
   */
  public void setRoundabout(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Turning field.
   */
  public void setTurning(java.lang.Boolean value);
  
  
  
}