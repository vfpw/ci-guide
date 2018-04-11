package typekey;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AccidentDetailPEL.tti;AccidentDetailPEL.tix;AccidentDetailPEL.ttx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
public class AccidentDetailPEL implements gw.entity.TypeKey {
  /**
   * Collision at 4-way stop
   * In case of an accident occurring at an intersection equipped with a stop sign on each corner, defective or inoperative traffic lights, the driver of the vehicle first in the intersection has the right of way
   */
  public static final typekey.AccidentDetailPEL TC_4_WAY_STOP = new typekey.AccidentDetailPEL("4_way_stop");
  
  /**
   * Chain reaction collision
   * In chain reaction accidents, the owner of the leading vehicle not having had prior contact with another vehicle or object, is completely indemnified for the physical damage sustained by his vehicle. Owners of all other vehicles following are indemnified for 50% of the front and 100% of the rear end damage, except however the last vehicle for which no indemnity is payable.
   */
  public static final typekey.AccidentDetailPEL TC_CHAINREACTION = new typekey.AccidentDetailPEL("chainreaction");
  
  /**
   * Collision in car park lot alley (no traffic signs)
   * Red vehicle leaving a side alley must yield to blue vehicle travelling on a main alley.
   */
  public static final typekey.AccidentDetailPEL TC_COLL_CAR_PARK_ALLEY = new typekey.AccidentDetailPEL("coll_car_park_alley");
  
  /**
   * Collision exiting parking space in car park
   * Red vehicle leaving a parking space must yield to blue vehicle travelling on a side or main alley.
   */
  public static final typekey.AccidentDetailPEL TC_COLL_CAR_PARK_EXIT_PARKING_SPACE = new typekey.AccidentDetailPEL("coll_car_park_exit_parking_space");
  
  /**
   * Collision involving failure to obey no entry or one way sign
   * Red vehicle fails to obey a do not enter sign (one way)
   */
  public static final typekey.AccidentDetailPEL TC_COLL_FAIL_NO_ENTRY_SIGN = new typekey.AccidentDetailPEL("coll_fail_no_entry_sign");
  
  /**
   * Collision involving failure to obey no turn sign
   * Red vehicle fails to obey a no turn sign, either left or right
   */
  public static final typekey.AccidentDetailPEL TC_COLL_FAIL_NO_TURN_SIGN = new typekey.AccidentDetailPEL("coll_fail_no_turn_sign");
  
  /**
   * Collision involving failure to obey right of way signage
   * Red vehicle fails to obey a stop sign, a yield sign, a flashing red light or other similar sign, particularly flares and other signals on the ground
   */
  public static final typekey.AccidentDetailPEL TC_COLL_FAIL_ONE_WAY_SIGN = new typekey.AccidentDetailPEL("coll_fail_one_way_sign");
  
  /**
   * Collision on a roadway having no determined centerline or having a broken line, and turning on an intersection (4-way) while other vehicle is attempting to pass.
   * Red vehicle going over the centerline in an intersection, while blue vehicle is turning, is fully responsible.
   */
  public static final typekey.AccidentDetailPEL TC_COLL_ON_4_WAY_INTERSECTION = new typekey.AccidentDetailPEL("coll_on_4_way_intersection");
  
  /**
   * Collision involving turning right on a red
   * Red vehicle causes the collision by turning on a red while blue vehicle has a green
   */
  public static final typekey.AccidentDetailPEL TC_COLL_ON_RIGHT_TURN_ON_RED = new typekey.AccidentDetailPEL("coll_on_right_turn_on_red");
  
  /**
   * Collision on a roadway having no determined centerline or having a broken line, and turning on an intersection (T-junction) while other vehicle is attempting to pass.
   * Red vehicle going over the centerline in an intersection, while blue vehicle is turning left, is fully responsible.
   */
  public static final typekey.AccidentDetailPEL TC_COLL_ON_T_JUNCTION = new typekey.AccidentDetailPEL("coll_on_t_junction");
  
  /**
   * Collision involving turning on an unprotected green light
   * Red vehicle turns on an unprotected green and strikes blue vehicle while blue vehicle is proceeding on a green light
   */
  public static final typekey.AccidentDetailPEL TC_COLL_ON_UNPROTECTED_GREEN = new typekey.AccidentDetailPEL("coll_on_unprotected_green");
  
  /**
   * Collision involving vehicle leaving side road
   * This case applies when red vehicle leaves a roadway with no traffic signs or lights (a parking lot, an alley or a place not open to public traffic) and blue vehicle is travelling in its own lane.
   */
  public static final typekey.AccidentDetailPEL TC_COLL_VEH_SIDE_ROAD = new typekey.AccidentDetailPEL("coll_veh_side_road");
  
  /**
   * Collision involving opening of door
   * This applies when the door of red vehicle is in motion or when the action has just been completed
   */
  public static final typekey.AccidentDetailPEL TC_COLL_WITH_OPENING_DOOR = new typekey.AccidentDetailPEL("coll_with_opening_door");
  
  /**
   * Collision involving vehicle reversing
   * Red vehicle is reversing and causes a collision with forward moving blue vehicle
   */
  public static final typekey.AccidentDetailPEL TC_COLL_WITH_REVERSING_VEH = new typekey.AccidentDetailPEL("coll_with_reversing_veh");
  
  /**
   * Collision involving vehicle making a U Turn
   * Red vehicle causes a collision by making a U turn in the path of blue vehicle
   */
  public static final typekey.AccidentDetailPEL TC_COLL_WITH_VEH_U_TURN = new typekey.AccidentDetailPEL("coll_with_veh_u_turn");
  
  /**
   * Collision as a result of encroachment of turning car
   * This case applies when blue vehicle is travelling in its own lane and red vehicle encroaches on the centerline of the roadway, whether to turn left or not.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_COLL_WHILE_TURNING = new typekey.AccidentDetailPEL("encroachment_coll_while_turning");
  
  /**
   * Collision as a result of encroachment of turning car (vehicle positions undetermined)
   * This case applies wherever the position on the roadway in respect to the centerline is undetermined or if it cannot be established that a specific vehicle was travelling to its left of the centerline. The mere fact of skidding, when other precise information is lacking, is not sufficient to establish that a vehicle was encroaching on the centerline.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_COLL_WHILE_TURNING_OTHER = new typekey.AccidentDetailPEL("encroachment_coll_while_turning_other");
  
  /**
   * Frontal collision as a result of centre line encroachment
   * This case applies when blue vehicle is travelling in its own lane and red vehicle encroaches on the centerline of the roadway, whether to turn left or not.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_FRONTAL_COLL = new typekey.AccidentDetailPEL("encroachment_frontal_coll");
  
  /**
   * Frontal collision as a result of encroachment (vehicle positions undetermined)
   * This case applies wherever the position on the roadway in respect to the centerline is undetermined or if it cannot be established that a specific vehicle was travelling to its left of the centerline. The mere fact of skidding, when other precise information is lacking, is not sufficient to establish that a vehicle was encroaching on the centerline.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_FRONTAL_COLL_OTHER = new typekey.AccidentDetailPEL("encroachment_frontal_coll_other");
  
  /**
   * Frontal collision at intersection where vehicles right of way is violated
   * At an intersection where there are no traffic signs, blue vehicle has the right of way in own lane (if remaining within its own lane), and red vehicle is therefore fully responsible.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_FRONTAL_COLL_VIOLATED_RIGHT_OF_WAY = new typekey.AccidentDetailPEL("encroachment_frontal_coll_violated_right_of_way");
  
  /**
   * Collision during turn as a result of lane encroachment by other vehicle
   * This case applies when blue vehicle is travelling in its own lane and red vehicle encroaches on the centerline of the roadway, whether to turn left or not.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_LANE_COLL_WHILE_TURNING = new typekey.AccidentDetailPEL("encroachment_lane_coll_while_turning");
  
  /**
   * Collision during turn as a result of lane encroachment by other vehicle (vehicle positions undetermined)
   * This case applies wherever the position on the roadway in respect to the centerline is undetermined or if it cannot be established that a specific vehicle was travelling to its left of the centerline. The mere fact of skidding, when other precise information is lacking, is not sufficient to establish that a vehicle was encroaching on the centerline.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_LANE_COLL_WHILE_TURNING_OTHER = new typekey.AccidentDetailPEL("encroachment_lane_coll_while_turning_other");
  
  /**
   * Collision with encroachment on solid white line and vehicle turning onto road
   * This case applies when red vehicle leaves a roadway (a parking lot, an alley or a place not open to public traffic) and blue vehicle, travelling in the opposite direction, encroaches on or crosses a solid line. Settlement is based on an equal division of liability in view of equal fault of both.
   */
  public static final typekey.AccidentDetailPEL TC_ENCROACHMENT_SOLID_LINE_TURNING = new typekey.AccidentDetailPEL("encroachment_solid_line_turning");
  
  /**
   * Frontal/Rear collision while leaving parking space
   * Blue vehicle strikes red vehicle in the rear while red vehicle pulls out in front of blue vehicle while leaving parking space
   */
  public static final typekey.AccidentDetailPEL TC_FRONT_REAR_COLL_LEAVING_PARKING_SPACE = new typekey.AccidentDetailPEL("front_rear_coll_leaving_parking_space");
  
  /**
   * Frontal/Side collision while leaving parking space
   * Blue vehicle strikes red vehicle in the side while red vehicle pulls out in front of blue vehicle while leaving parking space
   */
  public static final typekey.AccidentDetailPEL TC_FRONT_SIDE_COLL_LEAVING_PARKING_SPACE = new typekey.AccidentDetailPEL("front_side_coll_leaving_parking_space");
  
  /**
   * Collision while changing lanes to the left
   * Red vehicle strikes blue vehicle while changing lanes to the left
   */
  public static final typekey.AccidentDetailPEL TC_LANE_CHANGE_LEFT = new typekey.AccidentDetailPEL("lane_change_left");
  
  /**
   * Collision while changing lanes trying to park
   * Red vehicle strikes blue vehicle while changing lanes during parking maneuver
   */
  public static final typekey.AccidentDetailPEL TC_LANE_CHANGE_PARK = new typekey.AccidentDetailPEL("lane_change_park");
  
  /**
   * Collision while changing lanes to right
   * Red vehicle strikes blue vehicle while changing lanes to the right
   */
  public static final typekey.AccidentDetailPEL TC_LANE_CHANGE_RIGHT = new typekey.AccidentDetailPEL("lane_change_right");
  
  /**
   * Collision involving left turn while being over taken (involving dotted line)
   * Blue vehicle travelling on a roadway having no determined centerline or having a broken line, and turning left into an entranceway while red vehicle is attempting to pass.
   */
  public static final typekey.AccidentDetailPEL TC_LEFT_TURN_IN_DOTTED_LINE = new typekey.AccidentDetailPEL("left_turn_in_dotted_line");
  
  /**
   * Collision involving left turn while being over taken (involving solid line)
   * Blue vehicle turning left into an entranceway, over a solid single or double line or a double line consisting of a broken line and a solid line, the latter being adjacent to the lane in which blue vehicle is moving, while red vehicle is attempting to pass.
   */
  public static final typekey.AccidentDetailPEL TC_LEFT_TURN_IN_SOLID_LINE = new typekey.AccidentDetailPEL("left_turn_in_solid_line");
  
  /**
   * Collision involving left turn while being over taken (Designated turn area)
   * Blue vehicle making a proper left turn into an entranceway while red vehicle is attempting to pass despite a solid single or double line.
   */
  public static final typekey.AccidentDetailPEL TC_LEFT_TURN_IN_TURN_AREA = new typekey.AccidentDetailPEL("left_turn_in_turn_area");
  
  /**
   * Collision while vehicle is parked
   * Red vehicle strikes blue vehicle while blue vehicle is parked legally
   */
  public static final typekey.AccidentDetailPEL TC_PARKED = new typekey.AccidentDetailPEL("parked");
  
  /**
   * Collision while vehicle is parked illegally
   * Red vehicle strikes blue vehicle while blue vehicle is parked illegally
   */
  public static final typekey.AccidentDetailPEL TC_PARKED_ILLEGALLY = new typekey.AccidentDetailPEL("parked_illegally");
  
  /**
   * Pile-up collision
   * Pile-ups occur and when liability/causing vehicle cannot be determined
   */
  public static final typekey.AccidentDetailPEL TC_PILEUP = new typekey.AccidentDetailPEL("pileup");
  
  /**
   * Rear collision at an angle
   * Red vehicle strikes blue vehicle in the rear at an angle
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_ANGLE = new typekey.AccidentDetailPEL("rear_coll_angle");
  
  /**
   * Rear Collision on a curve
   * Red vehicle strikes blue vehicle in the rear on a curve
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_CURVE = new typekey.AccidentDetailPEL("rear_coll_curve");
  
  /**
   * Rear collision while parking in car park/drive on left or right
   * Red vehicle strikes blue vehicle in the rear while blue vehicle enters car park on left or right
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_IN_CAR_PARK = new typekey.AccidentDetailPEL("rear_coll_in_car_park");
  
  /**
   * Rear collision on left turn
   * Red vehicle strikes blue vehicle in the rear when blue vehicle is turning left
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_LEFT_TURN = new typekey.AccidentDetailPEL("rear_coll_left_turn");
  
  /**
   * Rear collision on turn on a one way street
   * Red vehicle strikes blue vehicle in the rear when blue vehicle is turning on a one way street
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_ON_1_WAY_ST = new typekey.AccidentDetailPEL("rear_coll_on_1_way_st");
  
  /**
   * Rear collision on right turn
   * Red vehicle strikes blue vehicle in the rear when blue vehicle is turning right
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_RIGHT_TURN = new typekey.AccidentDetailPEL("rear_coll_right_turn");
  
  /**
   * Rear Collision in a straight line
   * Red vehicle strikes blue vehicle in the rear in a straight line
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_STRAIGHT_LINE = new typekey.AccidentDetailPEL("rear_coll_straight_line");
  
  /**
   * Rear collision when parking on the left
   * Red vehicle strikes blue vehicle in the rear while blue vehicle is entering parking space on the left 
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_WHEN_PARKING_LEFT = new typekey.AccidentDetailPEL("rear_coll_when_parking_left");
  
  /**
   * Rear collision when parking on right
   * Red vehicle strikes blue vehicle in the rear while blue vehicle is entering parking space on right
   */
  public static final typekey.AccidentDetailPEL TC_REAR_COLL_WHEN_PARKING_RIGHT = new typekey.AccidentDetailPEL("rear_coll_when_parking_right");
  
  /**
   * Side collision on curve or roundabout
   * Blue vehicle and red vehicle have a side collision passing without changing lanes or in cases where roadway narrows, unless one of the drivers has violated a no passing sign or solid line
   */
  public static final typekey.AccidentDetailPEL TC_SIDE_COLL_CURVE = new typekey.AccidentDetailPEL("side_coll_curve");
  
  /**
   * Side collision at intersection where turning vehicle hits vehicle going straight
   * At an intersection where there are no traffic signs, blue vehicle has the right of way in own lane (if remaining within its own lane), and red vehicle is therefore fully responsible.
   */
  public static final typekey.AccidentDetailPEL TC_SIDE_COLL_INTERSECTION_VEH_TURNING = new typekey.AccidentDetailPEL("side_coll_intersection_veh_turning");
  
  /**
   * Side collision while leaving a parking space
   * Red vehicle strikes blue vehicle in the side while red vehicle is leaving a parking space
   */
  public static final typekey.AccidentDetailPEL TC_SIDE_COLL_LEAVING_PARKING_SPACE = new typekey.AccidentDetailPEL("side_coll_leaving_parking_space");
  
  /**
   * Side collision in straight line 
   * Blue vehicle and red vehicle have a side collision passing without changing lanes or in cases where roadway narrows, unless one of the drivers has violated a no passing sign or solid line
   */
  public static final typekey.AccidentDetailPEL TC_SIDE_COLL_STRAIGHT_LINE = new typekey.AccidentDetailPEL("side_coll_straight_line");
  
  /**
   * Side collision while turning
   * Blue vehicle and red vehicle have a side collision passing without changing lanes or in cases where roadway narrows, unless one of the drivers has violated a no passing sign or solid line
   */
  public static final typekey.AccidentDetailPEL TC_SIDE_COLL_TURNING = new typekey.AccidentDetailPEL("side_coll_turning");
  
  /**
   * Side collision caused by vehicle entering highway
   * The driver entering a roadway or leaving a limited access highway must give way to other vehicles.
   */
  public static final typekey.AccidentDetailPEL TC_SIDE_COLL_VEH_ENTERING_HIGHWAY = new typekey.AccidentDetailPEL("side_coll_veh_entering_highway");
  
  /**
   * Side/Frontal collision caused by vehicle entering highway
   * The driver entering a roadway or leaving a limited access highway must yield to other vehicles.
   */
  public static final typekey.AccidentDetailPEL TC_SIDE_FRONT_COLL_VEH_ENTERING_HIGHWAY = new typekey.AccidentDetailPEL("side_front_coll_veh_entering_highway");
  
  /**
   * T junction collision at intersection where vehicles right of way is violated
   * At an intersection where there are no traffic signs, blue vehicle has the right of way in own lane (if remaining within its own lane), and red vehicle is therefore fully responsible.
   */
  public static final typekey.AccidentDetailPEL TC_T_JUNCTION_COLL_VIOLATED_RIGHT_OF_WAY = new typekey.AccidentDetailPEL("t_junction_coll_violated_right_of_way");
  
  public static final gw.pl.persistence.type.TypeListTypeReference<typekey.AccidentDetailPEL> TYPE = new com.guidewire.commons.metadata.types.TypeListIntrinsicTypeCache<typekey.AccidentDetailPEL>("AccidentDetailPEL");
  
  private final com.guidewire.commons.typelist.TypeKeyImplManager _typeKeyImplManager;
  
  private AccidentDetailPEL(java.lang.String code)  {
    _typeKeyImplManager  =  com.guidewire.commons.typelist.TypeKeyImplManager.newInstance(this, code);
  }
  
  public int compareTo(gw.entity.TypeKey arg0) {
    return _typeKeyImplManager.getTypeKeyImpl().compareTo(arg0);
  }
  
  /**
   * 
   * @deprecated Use this object instead.
   */
  @java.lang.Deprecated
  public typekey.AccidentDetailPEL get() {
    return this;
  }
  
  public static typekey.AccidentDetailPEL get(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  public static java.util.List<typekey.AccidentDetailPEL> getAllTypeKeys() {
    return TYPE.get().getTypeKeys(true);
  }
  
  /**
   * Returns the list of categories that this key belongs to
   * @return the categories that this key belongs to
   */
  public gw.entity.TypeKey[] getCategories() {
    return _typeKeyImplManager.getTypeKeyImpl().getCategories();
  }
  
  public java.lang.String getCode() {
    return _typeKeyImplManager.getCode();
  }
  
  /**
   * Returns the description for this typekey for the current locale.
   * @return the description for this typekey
   */
  public java.lang.String getDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription();
  }
  
  /**
   * Returns the description of this typekey for the given locale.
   * @param locale the locale to use to get the description
   * @return a description for this typekey for the given locale
   */
  public java.lang.String getDescription(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDescription(locale);
  }
  
  public java.lang.String getDisplayName() {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName();
  }
  
  /**
   * Returns the name of this typekey for the given locale.
   * @param locale 
   */
  public java.lang.String getDisplayName(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getDisplayName(locale);
  }
  
  /**
   * Gets the entity type associated with this typekey, if any. Returns null if this is not a subtype typekey.
   */
  public gw.entity.IEntityType getEntityType() {
    return _typeKeyImplManager.getTypeKeyImpl().getEntityType();
  }
  
  /**
   * Returns the owning type for this key.
   * @return 
   */
  public gw.entity.ITypeList getIntrinsicType() {
    return _typeKeyImplManager.getTypeKeyImpl().getIntrinsicType();
  }
  
  /**
   * A string containing the typelist name.
   */
  public java.lang.String getListName() {
    return _typeKeyImplManager.getTypeKeyImpl().getListName();
  }
  
  /**
   * Returns the value of the "name" attribute for this typekey.
   * @return the name of this typekey
   * @deprecated Use {@link #getDisplayName()} or {@link #getUnlocalizedName()} instead, as appropriate.
   */
  @java.lang.Deprecated
  public java.lang.String getName() {
    return _typeKeyImplManager.getTypeKeyImpl().getName();
  }
  
  public int getOrdinal() {
    return _typeKeyImplManager.getTypeKeyImpl().getOrdinal();
  }
  
  /**
   * Returns the priority for this type key
   * @return the priority for this type key
   */
  public int getPriority() {
    return _typeKeyImplManager.getTypeKeyImpl().getPriority();
  }
  
  /**
   * Returns the sort order for this type key in the specified language.
   * @param locale 
   * @return the sort order for this type key
   */
  public int getSortOrder(gw.i18n.ILocale locale) {
    return _typeKeyImplManager.getTypeKeyImpl().getSortOrder(locale);
  }
  
  public static typekey.AccidentDetailPEL getTypeKey(java.lang.String code) {
    return TYPE.get().getTypeKey(code);
  }
  
  /**
   * All of the typekeys in this list, including retired typekeys.
   * @deprecated Use getTypeKeys(boolean)
   */
  @java.lang.Deprecated
  public static typekey.AccidentDetailPEL[] getTypeKeys() {
    return TYPE.get().getTypeKeys(true).toArray(new typekey.AccidentDetailPEL[]{});
  }
  
  public static java.util.List<typekey.AccidentDetailPEL> getTypeKeys(boolean includeRetired) {
    return TYPE.get().getTypeKeys(includeRetired);
  }
  
  /**
   * Returns the (non-localized) description of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDescription()} instead.
   * @return the non-localized description of this typekey
   */
  public java.lang.String getUnlocalizedDescription() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedDescription();
  }
  
  /**
   * Returns the (non-localized) name of this typekey. Generally should not be used by application code. To get a
   * displayable string, use {@link #getDisplayName()} instead. To get a unique string identifier for this typekey,
   * use {@link #getCode()} instead.
   * @return the non-localized name of this typekey
   */
  public java.lang.String getUnlocalizedName() {
    return _typeKeyImplManager.getTypeKeyImpl().getUnlocalizedName();
  }
  
  public typekey.AccidentDetailPEL getValue() {
    return this;
  }
  
  /**
   * Checks to see if this typekey has a category corresponding to the given
   * typekey.  For a match to be found, this typekey has to have a category
   * with the same typelist and code as the given typekey.
   * @param categoryToCheck 
   * @return 
   */
  public boolean hasCategory(gw.entity.TypeKey categoryToCheck) {
    return _typeKeyImplManager.getTypeKeyImpl().hasCategory(categoryToCheck);
  }
  
  /**
   * A boolean that indicates a type code is for internal use by Guidewire software. Internal type codes cannot be
   * removed or modified.
   */
  public boolean isInternal() {
    return _typeKeyImplManager.getTypeKeyImpl().isInternal();
  }
  
  /**
   * Returns true if this type key is retired.  Retired type keys will not show up in the UI.
   * @return true if this type key is retired false if not.
   */
  public boolean isRetired() {
    return _typeKeyImplManager.getTypeKeyImpl().isRetired();
  }
  
  private java.lang.Object readObject(java.io.ObjectInputStream in) throws java.io.InvalidObjectException {
    throw new java.io.InvalidObjectException("Proxy required");
  }
  
  public java.lang.String toString() {
    return getDisplayName();
  }
  
  private java.lang.Object writeReplace() {
    return new com.guidewire.commons.typelist.TypeKeySerializationProxy(this);
  }
  
  static {
    com.guidewire._generated.typekey.AccidentDetailPELInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.TypeKeyFriendAccess<typekey.AccidentDetailPEL>() {
      public void clearCache(typekey.AccidentDetailPEL typeKey) {
        typeKey._typeKeyImplManager.resetTypeKeyImpl();
      }
      
      public com.guidewire.commons.entity.type2.TypeKeyInternal getInternalInterface(typekey.AccidentDetailPEL typeKey) {
        return typeKey._typeKeyImplManager.getTypeKeyImpl();
      }
      
      public typekey.AccidentDetailPEL newInstance(java.lang.String code) {
        return new typekey.AccidentDetailPEL(code);
      }
      
      
    });
  }
}