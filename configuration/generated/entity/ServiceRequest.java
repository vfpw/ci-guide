package entity;

/**
 * ServiceRequest
 * 
 *     Represents a unit of work requested of a specialist or vendor, including instructions that describe the work to be
 *     done and the current state of the ServiceRequest.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ServiceRequest.eti;ServiceRequest.eix;ServiceRequest.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ServiceRequest")
public class ServiceRequest extends com.guidewire.pl.persistence.code.BeanBase implements entity.Editable, entity.CCAssignable, entity.Validatable, entity.Extractable, entity.EventAware, gw.api.assignment.CCAssignableMethods, gw.api.vendormanagement.ServiceRequestContactMethods {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ServiceRequest> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ServiceRequest>("entity.ServiceRequest");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> ACTIVITIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Activities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDBYUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedByUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDGROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDQUEUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedQueue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ASSIGNEDUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "AssignedUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ASSIGNMENTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AssignmentDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ASSIGNMENTSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AssignmentStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CANCELEDREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CanceledReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CLAIM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Claim");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CLOSEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CloseDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CURRENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Currency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> DOCUMENTLINKS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "DocumentLinks");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPECTEDQUOTECOMPLETIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpectedQuoteCompletionDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPECTEDSERVICECOMPLETIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpectedServiceCompletionDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> EXPOSURE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Exposure");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> HISTORY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "History");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INCIDENT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Incident");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INSTRUCTION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Instruction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> INSTRUCTIONHISTORY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "InstructionHistory");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> INVOICES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Invoices");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> KIND_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Kind");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LATESTCHANGETIMESTAMPDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LatestChangeTimestampDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> LATESTQUOTE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "LatestQuote");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> MESSAGES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Messages");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> ORIGINATINGSERVICEREQUEST_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "OriginatingServiceRequest");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PREVIOUSGROUP_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PreviousGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PREVIOUSQUEUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PreviousQueue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PREVIOUSUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PreviousUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PROGRESS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Progress");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> QUOTESTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "QuoteStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> QUOTES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Quotes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REQUESTEDQUOTECOMPLETIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RequestedQuoteCompletionDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REQUESTEDSERVICECOMPLETIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RequestedServiceCompletionDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SERVICEREQUESTMETRICS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ServiceRequestMetrics");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SERVICEREQUESTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ServiceRequestNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SERVICEREQUESTPROMOTIONARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ServiceRequestPromotionArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SERVICEREQUESTPROMOTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ServiceRequestPromotions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SERVICEREQUESTREFERENCENUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ServiceRequestReferenceNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SERVREQACTINSTARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ServreqactinstArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> SERVREQLTSTQTEARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ServreqltstqteArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SPECIALIST_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Specialist");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SPECIALISTCOMMMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SpecialistCommMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TIER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Tier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ServiceRequestInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final java.lang.String ASSIGNMENTADDED_EVENT = com.guidewire.pl.domain.assignment.AssignablePublicMethods.ASSIGNMENTADDED_EVENT;
  
  public static final java.lang.String ASSIGNMENTCHANGED_EVENT = com.guidewire.pl.domain.assignment.AssignablePublicMethods.ASSIGNMENTCHANGED_EVENT;
  
  public static final java.lang.String ASSIGNMENTREMOVED_EVENT = com.guidewire.pl.domain.assignment.AssignablePublicMethods.ASSIGNMENTREMOVED_EVENT;
  
  public static final java.lang.String TERMINAL_PROGRESS_FILTER = gw.cc.vendormanagement.entity.ServiceRequest.TERMINAL_PROGRESS_FILTER;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> VALIDATION_RESULTS_DYNPROP = com.guidewire.pl.domain.validation.ValidatablePublicMethods.VALIDATION_RESULTS_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ServiceRequest()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ServiceRequest(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ServiceRequest(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ServiceRequestInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.ServiceRequestInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Associates an event with the bean, which will be fired when the bean is
   * committed. A bean with an event is considered changed.
   * @param strEventId The event id.
   */
  public void addEvent(java.lang.String strEventId) {
    ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
  }
  
  /**
   * Adds the given element to the Activities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToActivities(entity.Activity element) {
    __getInternalInterface().addArrayElement(ACTIVITIES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the DocumentLinks array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToDocumentLinks(entity.ServiceRequestDocumentLink element) {
    __getInternalInterface().addArrayElement(DOCUMENTLINKS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the History array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToHistory(entity.ServiceRequestChange element) {
    __getInternalInterface().addArrayElement(HISTORY_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the InstructionHistory array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInstructionHistory(entity.ServiceRequestInstruction element) {
    __getInternalInterface().addArrayElement(INSTRUCTIONHISTORY_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Invoices array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInvoices(entity.ServiceRequestInvoice element) {
    __getInternalInterface().addArrayElement(INVOICES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Messages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMessages(entity.ServiceRequestMessage element) {
    __getInternalInterface().addArrayElement(MESSAGES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToNotes(entity.Note element) {
    __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the Quotes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToQuotes(entity.ServiceRequestQuote element) {
    __getInternalInterface().addArrayElement(QUOTES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the ServiceRequestMetrics array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToServiceRequestMetrics(entity.ServiceRequestMetric element) {
    __getInternalInterface().addArrayElement(SERVICEREQUESTMETRICS_PROP.get(), element);
  }
  
  /**
   * Returns true if any fields that would be recorded in a ServiceRequestChange have changed on this ServiceRequest in the
   * current bundle.
   * @return true if any fields have changed
   */
  public boolean anyFieldsChanged() {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).anyFieldsChanged();
  }
  
  /**
   * Directly assigns the entity to the specified group and user by setting the assignedGroup and assignedUser fields.
   * If user or group is null returns false and nothing is done.
   * @param group The group to which the entity should be assigned
   * @param user The user to which the entity should be assigned
   * @return true if the assignment is successful
   */
  public boolean assign(entity.Group group, entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(group, user);
  }
  
  /**
   * <p>
   * Invokes the Assignment Engine to assign the item to the specified group and user.  If userID is null,
   * the item will be assigned using the group's assignment rules.  If
   * userID is specified, assignment will be made directly to the group and
   * user.  If the engine cannot assign the item to the requested group/user,
   * it will throw an exception indicating the reason.
   * </p>
   * If a user is specified, caller is responsible for ensuring that the
   * user is a member of group.
   * </p>
   * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
   * @param groupID The group to which the item should be assigned - must be
   *                specified.  If not known, use autoAssign(item) instead.
   * @param userID The user to which the item should be assigned; if null an
   *                appropriate user will be selected by group assignment rules.
   * @throws com.guidewire.pl.system.exception.IllegalAssignmentException if the user does not have permission
   * @throws com.guidewire.pl.system.exception.NoAssignmentFoundException if assignment could not be made
   * @deprecated Use autoAssign(Group, User) instead. Note that that method returns a boolean instead of throwing exceptions
   */
  public void assign(gw.pl.persistence.core.Key groupID, gw.pl.persistence.core.Key userID) throws com.guidewire.pl.system.exception.NoAssignmentFoundException, com.guidewire.pl.system.exception.IllegalAssignmentException {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(groupID, userID);
  }
  
  /**
   * Assign the entity, which must be an Activity to the specified queue. (Currently, only Activities may be assigned
   * to Queues.) The current group is not a parameter - it is derived from the current
   * Assignment Engine state. As a result, this method may only be invoked from within an Assignment Rule.
   * <p/>
   * If there is no current group, nothing is done and a warning is logged. The queue must belong to the current group
   * or nothing is done.  Returns false if the assignable bean is not an activity.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param queue Queue to assign the activity to
   * @return true if the assignment is successful, false otherwise
   * @deprecated use assignActivityToQueue(AssignableQueue, Group) instead, since that method is more widely valid and
   *             is easier to understand because the group is explicit rather than implicit.
   */
  public boolean assignActivityToQueue(entity.AssignableQueue queue) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue);
  }
  
  /**
   * Assign this entity, which must be an Activity,  to the specified queue. The queue should belong to the specified group.
   * Returns false if the assignable bean is not an activity.
   * @param queue Queue to assign the activity to
   * @param group cannot be null
   * @return true if the assignment is successful
   */
  public boolean assignActivityToQueue(entity.AssignableQueue queue, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue, group);
  }
  
  /**
   * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
   * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
   * see the preferred method for details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param attributeBasedAssignmentCriteria The criteria used to perform the search
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
   */
  public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria);
  }
  
  /**
   * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
   * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
   * see the preferred method for details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param attributeBasedAssignmentCriteria The criteria used to perform the search
   * @param includeSubGroups if true, searches  all the users in any subgroups of the current group, as well as those in
   *                         the current group. If false, only searches users in the current group
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
   */
  public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups);
  }
  
  /**
   * Assigns an assignable item to a user who satisfies the constraints defined in the attributeBasedAssignmentCriteria
   * parameter. This is done by:
   * <p/>
   * 1) Find the set of users who are members of the supplied group, and optionally its subgroups, and who satisfy
   * the supplied attribute-based search criteria. (If the group parameter is null, then no group restriction applies)
   * 2) Select from the resulting set of users via the round-robin rotation mechanism. A separate round-robin state will
   * be maintained for each unique assignment criteria entity and group.
   * @param attributeBasedAssignmentCriteria the criteria to be satisfied by the selected user
   * @param includeSubGroups if true, searches  all the users in any subgroups of the group parameter as well as those in
   *                         that group. If false, only searches users in the group
   * @param group the group.
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups, group);
  }
  
  /**
   * Assigns the entity to the group requested.  If group is null, nothing is done.
   * @param group the group to which the entity should be assigned
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroup(entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroup(group);
  }
  
  /**
   * Uses the group type group selector to choose the next subgroup under the "current" group (retrieved from the
   * current state of the Assignment Engine) to receive the assignable. If there is no current group, the root group
   * from the Assignment Engine is used.
   * <p/>
   * This method will search breadth-first through the group tree, starting with the current group, and will
   * return the first group found with the approriate type.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param requiredGroupType A GroupType typecode; the assignment will be restricted to a group of this type. If null, then
   *                          no group will be found.
   * @return true if the assignment is successful, false otherwise
   * @deprecated This method of assignment is deemed useless, because it always returns the first group found with the
   *             required type. Use <code>assignGroupByRoundRobin()</code> instead, so that the assignment will be rotated among
   *             the matching groups.
   */
  public boolean assignGroupByGroupType(typekey.GroupType requiredGroupType) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByGroupType(requiredGroupType);
  }
  
  /**
   * Assigns this entity to a group based on region assignments. This is done in the following manner:
   * <p/>
   * Alternative signature; see <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param address An address to use for location-based assignment
   * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the current group
   *                           but also through all its subgroups.
   * @return true if the assignment is successful, false otherwise
   * @deprecated Use <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> insteaed, to make the recursion explicit.
   */
  public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly);
  }
  
  /**
   * Assigns this entity to a group based on region assignments. This is done in the following manner:
   * <p/>
   * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
   * would typically be the zip code)
   * 2) Search for the groups within the parameter group whose region assignment configuration includes that zip code.
   * 3) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
   * 4) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
   * 5) If more than one group is found, then round-robin among the resulting groups based on the zone which was used to
   * find the match.
   * <p/>
   * For example if we find no groups that match by zip but a few that match by county then
   * assignment will round robin through the ones that match by county and will ignore any others that match by state.
   * Matching is case-insensitive.
   * <p/>
   * Search is restricted to the sub-groups of the specified group and optionally all of its children. If there is no
   * specified group, then the root group is used. Note that starting from the root group is potentially costly in
   * performance time. If invoked from outside an Assignment Rule, this method will take no action and return false.
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param address An address to use for location-based assignment
   * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the parameter
   *                           group but also through all its subgroups.
   * @param parentGroup The group whose subgroups will be considered for assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly, entity.Group parentGroup) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly, parentGroup);
  }
  
  /**
   * Uses the round robin group selector to choose the next subgroup under the current group with the
   * appropriate type to be assigned to this entity.
   * <p/>
   * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
   *                          then no group will be found
   * @return true if the assignment is successful, false otherwise
   * @deprecated Use <code>assignGroupByRoundRogin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
   */
  public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType);
  }
  
  /**
   * Uses the round robin group selector to choose the next subgroup under the current group with the
   * appropriate type to be assigned to this entity.
   * <p/>
   * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
   *                          then no group will be found
   * @param includeSubGroups If true, all the user
   * @return true if the assignment is successful, false otherwise
   * @deprecated Use <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
   */
  public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType, includeSubGroups);
  }
  
  /**
   * Uses the round robin algorithm to choose the next group to receive the assignable.
   * <p/>
   * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
   * taken into account, but each Group's load factor is used to determine relative assignment frequency; essentially, a
   * group with a lower load factor than the others' is periodically skipped.
   * <p/>
   * The round-robin rotation for each group type (and boolean value) is independent of the others, so only identical
   * calls will impact the user who is "next" in the rotation.
   * <p/>
   * If no group is specified, the root group will be used instead. Note that starting from the root group is
   * potentially costly in performance time.
   * <p/>
   * When group type is specified, the load factor is <b>NOT</b> used.
   * @param groupType Only groups whose GroupType property matches this value will be considered
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter
   *                         group's immediate children but also through all its subgroups.
   * @param parentGroup The group whose subgroups will be considered for assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroupByRoundRobin(typekey.GroupType groupType, boolean includeSubGroups, entity.Group parentGroup) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(groupType, includeSubGroups, parentGroup);
  }
  
  /**
   * Uses the supplied dynamic assignment strategy implementation to find a group assignment for the current entity. See
   * {@link gw.api.assignment.DynamicGroupAssignmentStrategy} for more details on what that implementation should look like and how it
   * is used by the implementation of this method.
   * @param dynamicGroupAssignmentStrategy the {@link gw.api.assignment.DynamicGroupAssignmentStrategy} to be used to do the assignment
   * @param parentGroup The group to be used during the assignment (usually the parent group to which the entity is or should be assigned)
   * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignGroupDynamically(gw.api.assignment.DynamicGroupAssignmentStrategy dynamicGroupAssignmentStrategy, entity.Group parentGroup, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupDynamically(dynamicGroupAssignmentStrategy, parentGroup, includeSubGroups);
  }
  
  /**
   * Request manual assignment of the entity to the supplied user.
   * <p/>
   * Request is granted only if the responsible user has review assignment permission.
   * <p/>
   * Successful completion will cause a review activity to be created indicating that the assignment needs to be
   * completed, and that activity will be assigned to the supplied user
   * @param responsibleUser The person who should carry out the assignment
   * @return true if responsibleUser has review assignment permission, false otherwise.
   */
  public boolean assignManually(entity.User responsibleUser) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignManually(responsibleUser);
  }
  
  /**
   * Request manual assignment of the entity, with the responsibilty round-robbined among members of either the
   * currently assigned group or the specified group if no group is currently assigned
   * <p/>
   * {@see assignManually} for more information about "manual" assignment.
   * @param group the group to use if this entity does not have a currently assigned group.
   * @return true if a user was found to give the manual assignment action to, false if no sure user was found
   */
  public boolean assignManuallyByRoundRobin(entity.Group group) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignManuallyByRoundRobin(group);
  }
  
  /**
   * Assigns the entity to the user and group to which the associated claim is currently assigned.
   * Caller is responsible for ensuring that the entity is linked to an assigned claim. If the resulting assignment
   * is invalid for any reason, then an IllegalAssignmentException will be thrown.
   * 
   * Note that this method is currently only valid for an Activity, Exposure, or Matter.
   */
  public void assignToClaimOwner() {
    ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignToClaimOwner();
  }
  
  /**
   * Assign to the claim user with the given role. The search for a user with
   * a matching role is done in the following steps:
   * <ol>
   * <li>If assigning an activity associated with an exposure search the
   *     exposure first
   * <li>Search the claim users
   * <li>If not assigning an activity associated with an exposure, search all
   *     the exposures
   * </ol>
   * If the search finds a match at any step, it stops. If the match is unique
   * it does the assignment and returns true. If the match is not unique it
   * returns false. If the search goes through all steps without finding a
   * match it returns false
   * @param userRole the desired user role
   * @return true if a unique match was found and the assignment was made, false
   *   otherwise
   */
  public boolean assignToClaimUserWithRole(typekey.UserRole userRole) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignToClaimUserWithRole(userRole);
  }
  
  /**
   * Assigns the item to the creator of the supplied entity, and to one of the user's groups. If no group
   * is found for the user, uses the group based on the rule engine state (if available).
   * @param sourceEntity The entity to query for the id of the creator.
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignToCreator(entity.Editable sourceEntity) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity);
  }
  
  /**
   * Assigns this entity to the user who created the supplied entity, and to the first group in the user's list of member groups. In the
   * unlikely case that the user does not belong to any groups, then the entity will be assigned to the supplied
   * default group.
   * <p/>
   * If the supplied entity has not been persisted yet, and therefore has no recorded creator, then the current user will be
   * used instead.
   * @param sourceEntity The entity to query for the id of its creator.
   * @param defaultGroup The default group to use if the assigned user is not a member of any group.
   * @return true if the assignment is successful, false otherwise
   * @deprecated This signature is a little confusing, because the defaultGroup parameter should almost never be
   *             necessary, since in the current system a user almost never belongs to no groups. Use assignToCreator(EditableBean)
   *             instead
   */
  public boolean assignToCreator(entity.Editable sourceEntity, entity.Group defaultGroup) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity, defaultGroup);
  }
  
  /**
   * Another name for {@link #assignToQueue()}, making it more explicit that the activity will be assigned to the FNOL
   * queue. See that method for more details.
   * @return true if the assignment is successful, false otherwise
   * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
   *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
   *             named queue.
   */
  public boolean assignToFNOLQueue() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToFNOLQueue();
  }
  
  /**
   * Assigns this entity to the user and group to which the entity's "issue" is assigned. Which entity is used
   * to find the user and group is application-dependent. For example, in CC this will assign the entity to
   * the owner of the related exposure (if any) or claim. This method is currently only meaningful for CC.
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignToIssueOwner() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToIssueOwner();
  }
  
  /**
   * Assigns the entity to the previously assigned user.  The current group is kept track of for the client.  If there is no current
   * group, nothing is done and a warning is logged.
   * <p/>
   * This is no longer a very useful method, and should be considered deprecated, in favor of simply assigning directly to the
   * PreviousUser and PreviousGroup properties.
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignToPreviousOwner() {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignToPreviousOwner();
  }
  
  /**
   * Assign an activity to the FNOL queue of items assigned to the "current" group (retrieved from the current state of
   * the Assignment Engine). If the entity to be assigned is not an activity nothing is done,
   * false is returned and a warning is logged.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @return true if the assignment is successful, false otherwise
   * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
   *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
   *             named queue.
   */
  public boolean assignToQueue() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToQueue();
  }
  
  /**
   * Assigns the entity to the user requested within the "current" group (retrieved from the current state of
   * the Assignment Engine).  If the user is null or is not a member of the current group, nothing is done and false is returned.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param user the user to be assigned
   * @return true if the assignment is successful
   * @deprecated depends on the Assignment Engine state; use <code>assign(Group, User)</code> instead
   */
  public boolean assignUser(entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUser(user);
  }
  
  /**
   * Directly assigns the entity to the specified user and one of the groups the user belongs to.
   * <p/>
   * If the user does not have sufficient permission to accept the assignment, false is returned
   * @param user The user to which the entity should be assigned
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserAndDefaultGroup(entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserAndDefaultGroup(user);
  }
  
  /**
   * Uses the location-based assigner to assign an Assignable based on a given address.
   * <p/>
   * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use for location-based assignment
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
   */
  public boolean assignUserByLocation(entity.Address address) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address);
  }
  
  /**
   * Uses the location-based assigner to assign an Assignable based on a given address.
   * <p/>
   * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
   *                         current group.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
   */
  public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups);
  }
  
  /**
   * Assigns this entity to a user based on region assignments. This is done in the following manner:
   * <p/>
   * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
   * would typically be the zip code)
   * 2) Search for the users whose region assignment configuration includes that zip code.
   * 3) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
   * 4) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
   * 5) If more than one user is found, then round-robin among the resulting users based on the zone which was used to
   * find the match.
   * <p/>
   * For example if we find no users that match by zip but a few that match by county then
   * assignment will round robin through the ones that match by county and will ignore any others that match by state.
   * Matching is case-insensitive.
   * <p/>
   * Search is restricted to the users of the group (and optionally its subgroups). It is an error if there is no
   * group.
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the parameter group as well as users in
   *                         that group.
   * @param group the group whose users will be considered for the assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups, group);
  }
  
  /**
   * A combination of {@link #assignUserByLocation} and {@link #assignByUserAttributes} .
   * <p/>
   * Alternative signature; see <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use for location-based assignment
   * @param attributeBasedAssignmentCriteria the user attributes to match against
   * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
   *                         current group.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> instead.
   */
  public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups);
  }
  
  /**
   * Assigns this entity to the user matching the attribute criteria whose region assignments contain the supplied location. This method
   * first finds the users in the supplied group (and, possibly, subgroups) who match the attribute criteria, and then
   * once that set is determined it applies the same algorithm used by {@link #assignUserByLocation}
   * to find a user whose region assignments contain the supplied location.
   * <p/>
   * If no users match the supplied criteria, then assignment will fail and false will be returned.
   * @param address An address to use for location-based assignment
   * @param attributeBasedAssignmentCriteria the user attributes to match against
   * @param includeSubGroups if true, then include users in any sub groups of the parameter  group as well as users in
   *                         that group.
   * @param group the group whose members should be considered for the assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups, group);
  }
  
  /**
   * Assigns this entity to the user matching the attribute criteria who is closest to the supplied location. This method
   * first finds the users in the supplied group (and, possibly, subgroups) who match the attribute criteria, and then
   * once that set is determined it applies the same algorithm used by {@link #assignUserByLocationUsingProximitySearch}
   * to choose the closest one.
   * <p/>
   * If no users match the supplied criteria, then assignment will fail and false will be returned.
   * @param address An address to use for location-based assignment
   * @param attributeBasedAssignmentCriteria the user attributes to match against
   * @param includeSubGroups if true, then include users in any sub groups of the supplied group as well as users in the
   *                         parameter group.
   * @param group The group whose users should be considered for the assignment
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByLocationUsingProximityAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximityAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups, group);
  }
  
  /**
   * Assigns this AssignmentBean to the user in the current group with the closest address to the given address,
   * measured by great-circle distance along the surface of the earth.
   * <p/>
   * Alternative signature; see <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use as the center of the proximity search
   * @return true if the assignment is successful
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> instead.
   */
  public boolean assignUserByLocationUsingProximitySearch(entity.Address address) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximitySearch(address);
  }
  
  /**
   * Assigns this AssignmentBean to the user with the closest address to the given address, measured by a great-circle
   * distance along the surface of the earth.
   * <p/>
   * Alternative signature; see <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
   *                         current group.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> instead.
   */
  public boolean assignUserByLocationUsingProximitySearch(entity.Address address, boolean includeSubGroups) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximitySearch(address, includeSubGroups);
  }
  
  /**
   * Assigns this entity to the user with the closest address to the specified address, measured by a great-circle
   * distance along the surface of the earth. This includes the following steps:
   * <p/>
   * 1) Geocode the supplied address which will serve as the center of the search. (If necessary, location may already be geocoded)
   * 2) For each user in the specified group, compute the distance from their location (using their Contact entity's primary address)
   * to the supplied location.
   * 2a) If the includeSubGroups parameter is true, repeat this process with all of the descendant groups of the specified group
   * 3) Return the user who is closest to the specified location
   * <p/>
   * If the geocoding attempt fails for the supplied location, an error will be logged and false returned
   * <p/>
   * Search begins with the users of the parameter group; it is an error if there is no group.
   * @param address An address to use for location-based assignment
   * @param includeSubGroups if true, then include users in any sub groups of the parameter group as well as users in
   *                         that group.
   * @param group the group whose members should be considered for assignment. May not be null
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByLocationUsingProximitySearch(entity.Address address, boolean includeSubGroups, entity.Group group) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximitySearch(address, includeSubGroups, group);
  }
  
  /**
   * !WARNING! This can be very slow compared to other assignment operations.
   * <p/>
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * If there is more than one user in the returned search, selects one of them
   * based on regular round-robin search.
   * <p/>
   * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.Geocode.setupUserProximitySearch()
   * in order to ensure that the proximity search criteria are set up properly.
   * <p/>
   * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
   * @param asc a valid User Search Criteria
   * @return true if the assignment is successful
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
   */
  public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc);
  }
  
  /**
   * !WARNING! This can be very slow compared to other assignment operations.
   * <p/>
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * If there is more than one user in the returned search, selects one of them
   * based on regular round-robin search. (To always assign to the closest user,
   * set the cap to 1.)
   * <p/>
   * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
   * in order to ensure that the proximity search criteria are set up properly.
   * <p/>
   * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
   * @param asc a valid CC Assignment Search Criteria
   * @param includeSubGroups include subgroups in search
   * @return true if the assignment is successful
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
   */
  public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, boolean includeSubGroups) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, includeSubGroups);
  }
  
  /**
   * !WARNING! This can be very slow compared to other assignment operations.
   * <p/>
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * If there is more than one user in the returned search, selects one of them
   * based on regular round-robin search. (To always assign to the closest user,
   * set the cap to 1.)
   * <p/>
   * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
   * in order to ensure that the proximity search criteria are set up properly.
   * <p/>
   * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
   * @param asc a valid User Search Criteria
   * @param cap the maximum number of users to return in the search
   * @return true if the assignment is successful
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
   */
  public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, int cap) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, cap);
  }
  
  /**
   * !WARNING! This can be very slow compared to other assignment operations.
   * <p/>
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * If there is more than one user in the returned search, selects one of them
   * based on regular round-robin search. (To always assign to the closest user,
   * set the cap to 1.)
   * <p/>
   * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
   * in order to ensure that the proximity search criteria are set up properly.
   * <p/>
   * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
   * @param asc a valid CC Assignment Search Criteria
   * @param cap the maximum number of users to return in the search
   * @param includeSubGroups include subgroups in search
   * @return true if the assignment is successful
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
   */
  public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, int cap, boolean includeSubGroups) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, cap, includeSubGroups);
  }
  
  /**
   * !WARNING! This can be very slow compared to other assignment operations.
   * <p/>
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * If there is more than one user in the returned search, selects one of them
   * based on regular round-robin search. (To always assign to the closest user,
   * set the cap to 1.)
   * <p/>
   * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
   * in order to ensure that the proximity search criteria are set up properly.
   * <p/>
   * @param asc a valid CC Assignment Search Criteria
   * @param cap the maximum number of users to return in the search
   * @param includeSubGroups include subgroups in search
   * @param currentGroup the group within which the search will be performed
   * @return true if the assignment is successful
   */
  public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, int cap, boolean includeSubGroups, entity.Group currentGroup) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, cap, includeSubGroups, currentGroup);
  }
  
  /**
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * <p/>
   * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * <p/>
   * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
   * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
   * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
   * and should be used with care.
   * @param usc a valid User Search Criteria
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
   */
  public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc);
  }
  
  /**
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * <p/>
   * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * <p/>
   * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
   * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
   * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
   * and should be used with care.
   * @param usc a valid User Search Criteria
   * @param includeSubGroups include subgroups in search
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
   */
  public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, boolean includeSubGroups) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, includeSubGroups);
  }
  
  /**
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * <p/>
   * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * <p/>
   * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
   * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
   * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
   * and should be used with care.
   * @param usc a valid User Search Criteria
   * @param cap the maximum number of users to return in the search
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
   */
  public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, int cap) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, cap);
  }
  
  /**
   * Assigns this AssignmentBean to a user based on a User Search by Proximity.
   * <p/>
   * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * <p/>
   * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
   * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
   * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
   * and should be used with care.
   * @param usc a valid User Search Criteria
   * @param cap the maximum number of users to return in the search
   * @param includeSubGroups include subgroups in search
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
   */
  public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, int cap, boolean includeSubGroups) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, cap, includeSubGroups);
  }
  
  /**
   * Assigns this entity to a user based on a User Search by Proximity. This includes the following steps:
   * <p/>
   * 1) Geocode the location which will serve as the center of the search, accessed through <code>usc.getContact().getAddress()</code>.
   * (If necessary; the location may already be geocoded)
   * 2) Finds a list of users who satisfy the user search criteria, which may include proximity restrictions.
   * The specified cap is used to limit the number of users in this list; in the case of proximity restrictions, the users farthest from the search center are trimmed.
   * 3) Use the round-robin algorithm to pick one of the users. This means that repeated, identical calls to this
   * method will rotate through the resulting set of users to find the user to return.
   * <p/>
   * Note that the round-robin rotation is based on the exact UserSearchCriteria used. One implication of this is that
   * the location used should be as general as possible (such as just a city, state or zip, rather than a specific
   * street address) to get the benefit of the round-robin processing and reduce the load on the system.
   * <p/>
   * To always assign to the closest user, set the cap to 1.
   * <p/>
   * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
   * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
   * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
   * and should be used with care.
   * <p/>
   * The user search criteria should be set up via gw.api.geocode.GeocodeScriptHelper.setupUserProximitySearch()
   * in order to ensure that the proximity search criteria are set up properly.
   * <p/>
   * The group parameter may be null. If it is not null, it will be used as part of the search
   * @param usc a valid User Search Criteria, may not be null
   * @param cap If greater than zero, the maximum number of users to include for round robin from the search results.
   *                         If -1, all users from the search results will be included in the round robin.
   * @param includeSubGroups if the sub group should be used for search
   * @param group The group from where the search should be conducted
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, int cap, boolean includeSubGroups, entity.Group group) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, cap, includeSubGroups, group);
  }
  
  /**
   * Assigns a user within the "current" group (retrieved from the current state of
   * the Assignment Engine), rotating through the set of users in the group each time the method is called.
   * <p/>
   * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
   */
  public boolean assignUserByRoundRobin() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin();
  }
  
  /**
   * Assigns a user within the "current" group (retrieved from the current state of
   * the Assignment Engine), rotating through the set of users in the group each time the method is called.
   * <p/>
   * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
   * <p/>
   * If invoked from outside an Assignment Rule, will take no action and return false.
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the current group
   *                         but also through all its subgroups.
   * @return true if the assignment is successful, false otherwise
   * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
   */
  public boolean assignUserByRoundRobin(boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups);
  }
  
  /**
   * Uses the round robin algorithm to choose the next user from the specified group or to receive the assignable.
   * <p/>
   * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
   * taken into account, but each User's load factor is used to determine relative assignment frequency; essentially, a
   * user with a lower load factor than the others' is periodically skipped.
   * <p/>
   * The round-robin rotation for each group (and boolean value) is independent of the others, so only identical
   * calls will impact the user who is "next" in the rotation.
   * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter group
   *                         but also through all its subgroups.
   * @param group may not be null
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserByRoundRobin(boolean includeSubGroups, entity.Group group) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups, group);
  }
  
  /**
   * Uses the supplied dynamic assignment strategy implementation to find an assignment for the current entity. See
   * {@link gw.api.assignment.DynamicUserAssignmentStrategy} for more details on what that implementation should look like and how it
   * is used by the implementation of this method.
   * @param dynamicUserAssignmentStrategy the {@link gw.api.assignment.DynamicUserAssignmentStrategy} to be used to do the assignment
   * @param group The group to be used during the assignment (usually the group to which the entity is or should be assigned)
   * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
   * @return true if the assignment is successful, false otherwise
   */
  public boolean assignUserDynamically(gw.api.assignment.DynamicUserAssignmentStrategy dynamicUserAssignmentStrategy, entity.Group group, boolean includeSubGroups) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserDynamically(dynamicUserAssignmentStrategy, group, includeSubGroups);
  }
  
  /**
   * Invokes the Assignment Engine, which will process the configured Assignment Rules to come up with an assignment
   * for the current entity.
   * <p/>
   * May not be invoked from within an Assignment Rule, since the Assignment Engine may not be invoked recursively. If invoked
   * from within an Assigment Rule, an error will be logged and false will be returned.
   * @return true if an assignment has been found, false otherwise
   */
  public boolean autoAssign() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign();
  }
  
  /**
   * <p>
   * Invokes the Assignment Enging to assign the item to the specified group and user.
   * If userID is null, the item will be assigned using the group's assignment rules.
   * If userID is specified, assignment will be made directly to the group and
   * user.  If the engine cannot assign the item to the requested group/user,
   * it will throw an exception indicating the reason.
   * </p>
   * If a user is specified, caller is responsible for ensuring that the
   * user is a member of group.
   * </p>
   * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
   * @param group The group to which the item should be assigned - must be
   *              specified.  If not known, use autoAssign(item) instead.
   * @param user The user to which the item should be assigned; if null an
   *              appropriate user will be selected by group assignment rules.
   * @return true if the assignment is successufl, false otherwise
   */
  public boolean autoAssign(entity.Group group, entity.User user) {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign(group, user);
  }
  
  /**
   * This method is only available inside the Assignment Engine. Request manual confirmation of the entity's current assignment by the specified user.
   * <p/>
   * If the specified user does not have the review assignment permission, then does nothing and returns false.
   * Otherwise, a review Activity will be created and assigned to the user for further processing.
   * @param responsibleUser The person who should confirm the assignment
   * @return true if responsibleUser has review assignment permission, false otherwise.
   */
  public boolean confirmManually(entity.User responsibleUser) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).confirmManually(responsibleUser);
  }
  
  /**
   * Request manual confirmation of the entity's current assignment, with the responsibility round-robined among members
   * of the given group.
   * <p/>
   * Only users in the specified group (not subgroups)  who have the review assignment permission will be considered. The
   * round-robin rotation used here is independent of the rotation used by the assignUserByRoundRobin() methods.
   * <p/>
   * If no user is found, does nothing and returns false. Otherwise, a review Activity will be created and assigned to the user for further processing.
   * @param group the group whose users should be considered in the round-robin rotation
   * @return true if a user was found to give the confirmation action to, false if no such user was found
   */
  public boolean confirmManuallyByRoundRobin(entity.Group group) {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).confirmManuallyByRoundRobin(group);
  }
  
  public void copyHistoryAndInstructionsToNewServiceRequest(entity.ServiceRequest destinationServiceRequest, java.util.Map<entity.ServiceRequestQuote, entity.ServiceRequestQuote> quotesMap) {
    ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).copyHistoryAndInstructionsToNewServiceRequest(destinationServiceRequest, quotesMap);
  }
  
  /**
   * Called after the assignable is assigned to create a new history event recording the assignment. May
   * return null for some assignable types, meaning that no history event was created
   * @param assignable the assignable containing details of the new assignment
   * @return the new history event, or null
   */
  public entity.History createAssignmentHistoryEvent(entity.Assignable assignable) {
    return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).createAssignmentHistoryEvent(assignable);
  }
  
  /**
   * Create a new assignment review activity which represents the responsibility to assign this
   * assignable. Assignment review activities are used for manual assignment.
   * @return a new assignment review activity which refers to this assignable
   */
  public entity.Activity createAssignmentReviewActivity() {
    return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).createAssignmentReviewActivity();
  }
  
  /**
   * Creates a AttributeBasedAssignmentCriteria instance, which is used to collect a set of user attributes on which to search for users.
   * The matchAll flag indicates whether each attribute must be satisfied (logical AND) or whether any attribute could
   * be satisfied (logical OR).
   * @return AttributeBasedAssignmentCriteria instance
   * @deprecated Use the constructor directly.  This method is no longer necessary, since a new AttributeBasedAssignmentCriteria entity can simply
   *             be created directly in Gosu and placed in the correct bundle.
   */
  public entity.AttributeBasedAssignmentCriteria createUserAttributes() {
    return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).createUserAttributes();
  }
  
  /**
   * Find any existing open assignment review activities related to this assignable. Normally this will
   * return either zero or one activities. Assignment review activities are used for manual assignment.
   * @return a query result containing the open assignment review activities, if any
   */
  public gw.api.database.IQueryResult<entity.Activity, entity.Activity> findAssignmentReviewActivities() {
    return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).findAssignmentReviewActivities();
  }
  
  /**
   * Gets the value of the Activities field.
   * The activities associated with this service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Activity[] getActivities() {
    return (entity.Activity[])__getInternalInterface().getFieldValue(ACTIVITIES_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedByUser field.
   * User who assigned this entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAssignedByUser() {
    return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDBYUSER_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedGroup field.
   * Group to which this entity is assigned; null if none assigned
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getAssignedGroup() {
    return (entity.Group)__getInternalInterface().getFieldValue(ASSIGNEDGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedQueue field.
   * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AssignableQueue getAssignedQueue() {
    return (entity.AssignableQueue)__getInternalInterface().getFieldValue(ASSIGNEDQUEUE_PROP.get());
  }
  
  /**
   * Gets the value of the AssignedUser field.
   * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getAssignedUser() {
    return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDUSER_PROP.get());
  }
  
  /**
   * Returns a string describing the current assignee plus their group,
   * suitable for display to the user. This can be quite a long string,
   * for example "Andy Applegate (Auto1 - TeamA)". See also
   * {@link #getAssigneeDisplayString()} which omits the group name and
   * may be more appropriate if space is tight.
   * @return If the assignable is assigned to a user or queue, returns the
   * name of the user or queue plus their group (for example
   * "Andy Applegate (Auto1 - TeamA)"). If assignment is pending, returns
   * a simple string (for example "pending assignment"). If the assignable
   * is completely unassigned returns the empty string.
   */
  public java.lang.String getAssigneeAndGroupDisplayString() {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getAssigneeAndGroupDisplayString();
  }
  
  /**
   * Returns a string describing the current assignee, suitable for display
   * to the user. See also {@link #getAssigneeAndGroupDisplayString()}, which
   * returns a more detailed description of the assignee.
   * @return If the assignable is assigned to a user or queue, returns the
   * name of the user or queue (for example "Andy Applegate"). If assignment
   * is pending, returns a simple string (for example "pending assignment").
   * If the assignable is completely unassigned returns the empty string.
   */
  public java.lang.String getAssigneeDisplayString() {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getAssigneeDisplayString();
  }
  
  /**
   * Returns a string describing only the group of the current assignee,
   * suitable for display to the user. See also {@link #getAssigneeAndGroupDisplayString()},
   *  which returns a more detailed description of the assignee.
   * @return If the assignable is assigned to a user, returns the name of the
   * user's group (for example "Auto1 - TeamA"). If assignment is pending, returns
   * a simple string (for example "pending assignment"). If the assignable
   * is completely unassigned returns the empty string.
   */
  public java.lang.String getAssigneeGroupOnlyDisplayString() {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getAssigneeGroupOnlyDisplayString();
  }
  
  /**
   * Gets the value of the AssignmentDate field.
   * Time when entity last assigned
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAssignmentDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ASSIGNMENTDATE_PROP.get());
  }
  
  /**
   * Gets the value of the AssignmentStatus field.
   * Typelist describing assignment status.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AssignmentStatus getAssignmentStatus() {
    return (typekey.AssignmentStatus)__getInternalInterface().getFieldValue(ASSIGNMENTSTATUS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CanceledReason field.
   * The reason the service request was canceled
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCanceledReason() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CANCELEDREASON_PROP.get());
  }
  
  /**
   * Returns the child objects of the current assignable to which the new assigment should maybe be
   * cascaded. shouldCascadeAssignment will be called on each child before actually doing the cascade
   * @return child objects to which the new assignment should potentially be cascaded
   */
  public java.util.List<gw.api.assignment.CCAssignableMethods> getChildrenForCascadeAssignment() {
    return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).getChildrenForCascadeAssignment();
  }
  
  /**
   * Gets the value of the Claim field.
   * The related claim.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Claim getClaim() {
    return (entity.Claim)__getInternalInterface().getFieldValue(CLAIM_PROP.get());
  }
  
  /**
   * Gets the value of the CloseDate field.
   * Date and time when this entity was closed. (Not applicable to all assignable entities)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCloseDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CLOSEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the Currency field.
   * The currency of this service request, which is used for its quotes, invoices, and checks.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCurrency() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CURRENCY_PROP.get());
  }
  
  /**
   * This method exists to support the notion of "secondary" assignment in the Assignment Rules. "Secondary" assignments
   * generally represented by UserRoleAssignment entities, are assignments of "roles" to users, separated from the single
   * "primary" owner of the entity.
   * <p/>
   * It is generally desirable for Assignment rule writers to be able to re-use a single set of, say, Claim Assignment rules
   * for both primary and secondary assignments. This method allows rules to be written in the form of
   * <code>Claim.CurrentAssignment.assignXXX()</code> rather than <code>Claim.assignXXX()</code>. If the primary
   * assignment is being performed, then getCurrentAssignment() will return the entity itself (in this case, the Claim).
   * If a secondary assignment is being performed, then getCurrentAssignment() will return the UserRoleAssignment which
   * is current being operated upon.
   * <p/>
   * Obviously, if an entity does not support secondary assignment (i.e. does not implement the UserRoleOwner interface),
   * then rules do not need to use this method. Secondary assignments done outside of the Assignment Rules can simplay
   * call the assignXXX methods directly on the UserRoleAssignment entity themselves, and therefore also do not require
   * this method.
   * <p/>
   * Since this method is dependent on the Assignment Engine state, calling it outside of the Assignment Rules is illegal.
   * @return the CCAssignable entity being operated on by the Assignment Engine. May be either the current entity or
   *         a UserRoleAssignment entity relating to the current entity.
   */
  public entity.CCAssignable getCurrentAssignment() {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getCurrentAssignment();
  }
  
  /**
   * Array association accessor for key DecimalServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.DecimalServiceRequestMetric getDecimalServiceRequestMetric() {
    return (entity.DecimalServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("DecimalServiceRequestMetric"));
  }
  
  /**
   * Gets the value of the DocumentLinks field.
   * The link information for documents associated with this service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestDocumentLink[] getDocumentLinks() {
    return (entity.ServiceRequestDocumentLink[])__getInternalInterface().getFieldValue(DOCUMENTLINKS_PROP.get());
  }
  
  /**
   * Return the list of documents linked to the service request
   * @return list of documents linked to the service request
   */
  public java.util.Collection<entity.Document> getDocuments() {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getDocuments();
  }
  
  /**
   * Gets the value of the ExpectedQuoteCompletionDate field.
   * Date by which the specialist expects to submit the quote, or null if the specialist has not indicated such a date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpectedQuoteCompletionDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPECTEDQUOTECOMPLETIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ExpectedServiceCompletionDate field.
   * Date by which the specialist expects to complete the work, or null if the specialist has not indicated such a date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpectedServiceCompletionDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPECTEDSERVICECOMPLETIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Exposure field.
   * The exposure that led to the work requested by this service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Exposure getExposure() {
    return (entity.Exposure)__getInternalInterface().getFieldValue(EXPOSURE_PROP.get());
  }
  
  /**
   * Gets the value of the History field.
   * The changes that have been applied to this service request, which together comprise its history.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestChange[] getHistory() {
    return (entity.ServiceRequestChange[])__getInternalInterface().getFieldValue(HISTORY_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Incident field.
   * The incident that led to the work requested by this service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Incident getIncident() {
    return (entity.Incident)__getInternalInterface().getFieldValue(INCIDENT_PROP.get());
  }
  
  /**
   * Gets the value of the Instruction field.
   * The active instruction associated with this service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestInstruction getInstruction() {
    return (entity.ServiceRequestInstruction)__getInternalInterface().getFieldValue(INSTRUCTION_PROP.get());
  }
  
  /**
   * Gets the value of the InstructionHistory field.
   * All instructions that have been created for this service request, including instructions that are no longer active.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestInstruction[] getInstructionHistory() {
    return (entity.ServiceRequestInstruction[])__getInternalInterface().getFieldValue(INSTRUCTIONHISTORY_PROP.get());
  }
  
  /**
   * Array association accessor for key IntegerServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IntegerServiceRequestMetric getIntegerServiceRequestMetric() {
    return (entity.IntegerServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("IntegerServiceRequestMetric"));
  }
  
  /**
   * Array association accessor for key InvoiceVarianceVsQuoteServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InvoiceVarianceVsQuoteServiceRequestMetric getInvoiceVarianceVsQuoteServiceRequestMetric() {
    return (entity.InvoiceVarianceVsQuoteServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("InvoiceVarianceVsQuoteServiceRequestMetric"));
  }
  
  /**
   * Gets the value of the Invoices field.
   * The Invoices associated with this service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestInvoice[] getInvoices() {
    return (entity.ServiceRequestInvoice[])__getInternalInterface().getFieldValue(INVOICES_PROP.get());
  }
  
  /**
   * Gets the value of the Kind field.
   * The kind for this service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ServiceRequestKind getKind() {
    return (typekey.ServiceRequestKind)__getInternalInterface().getFieldValue(KIND_PROP.get());
  }
  
  /**
   * Gets the ServiceRequestChange recording the last change made to the ServiceRequest.
   * @return ServiceRequestChange corresponding to the latest change
   */
  public entity.ServiceRequestChange getLatestChange() {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getLatestChange();
  }
  
  /**
   * Gets the value of the LatestChangeTimestampDenorm field.
   * The timestamp of the latest ServiceRequestChange in the History. This value is denormalized here for ease of ordering ServiceRequests in queries. This is non-nullable because History cannot be empty.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLatestChangeTimestampDenorm() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LATESTCHANGETIMESTAMPDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the LatestQuote field.
   * The latest quote associated with this service request. It is null if no quote has been added to the service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestQuote getLatestQuote() {
    return (entity.ServiceRequestQuote)__getInternalInterface().getFieldValue(LATESTQUOTE_PROP.get());
  }
  
  /**
   * Return the ServiceRequestDocumentLink on this ServiceRequest that links to the given Document.
   * @param document to match
   * @return the matching ServiceRequestDocumentLink
   */
  public entity.ServiceRequestDocumentLink getMatchingServiceRequestDocumentLink(entity.Document document) {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getMatchingServiceRequestDocumentLink(document);
  }
  
  /**
   * Gets the value of the Messages field.
   * Messages related to this service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestMessage[] getMessages() {
    return (entity.ServiceRequestMessage[])__getInternalInterface().getFieldValue(MESSAGES_PROP.get());
  }
  
  /**
   * Array association accessor for key MoneyServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MoneyServiceRequestMetric getMoneyServiceRequestMetric() {
    return (entity.MoneyServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("MoneyServiceRequestMetric"));
  }
  
  /**
   * Gets the value of the Notes field.
   * The notes associated with this service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Note[] getNotes() {
    return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
  }
  
  /**
   * Array association accessor for key NumberOfDelaysServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.NumberOfDelaysServiceRequestMetric getNumberOfDelaysServiceRequestMetric() {
    return (entity.NumberOfDelaysServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("NumberOfDelaysServiceRequestMetric"));
  }
  
  /**
   * Gets the history of ServiceRequestChanges, ordered by ServiceRequestChange.Sequence, ascending.
   * @return the ServiceRequestChanges for this ServiceRequest, in order
   */
  public java.util.List<entity.ServiceRequestChange> getOrderedHistory() {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getOrderedHistory();
  }
  
  /**
   * Gets the value of the OriginatingServiceRequest field.
   * The originating quote-only service request for this service request. Note: This will be non-null only when a quote-only service request is promoted to a quote and service service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequest getOriginatingServiceRequest() {
    return (entity.ServiceRequest)__getInternalInterface().getFieldValue(ORIGINATINGSERVICEREQUEST_PROP.get());
  }
  
  /**
   * Called by the "assignToClaimOwner" method to determine which assignable "owns" the current assignable
   * so the owners assignment information can be copied. The owner is nearly always just the claim though
   * there is a special case - if an activity belongs to an exposure then the exposure is the owner. If
   * this method return null the assignToClaimOwner call will return false.
   * @return the owning assignable, usually the claim
   */
  public entity.Assignable getOwningAssignable() {
    return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).getOwningAssignable();
  }
  
  /**
   * The claim that owns this assignable. If this property returns null then this assignable cannot be
   * manually assigned (because no assignment review activity can be created), cannot be assigned using
   * the "assignToClaimOwner" method and will not create history events when assigned.
   * @return the claim
   */
  public entity.Claim getOwningClaim() {
    return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).getOwningClaim();
  }
  
  /**
   * Array association accessor for key PercentServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PercentServiceRequestMetric getPercentServiceRequestMetric() {
    return (entity.PercentServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("PercentServiceRequestMetric"));
  }
  
  /**
   * Gets the value of the PreviousGroup field.
   * Group to which this entity was previously assigned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Group getPreviousGroup() {
    return (entity.Group)__getInternalInterface().getFieldValue(PREVIOUSGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the PreviousQueue field.
   * Queue to which this entity was previously assigned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AssignableQueue getPreviousQueue() {
    return (entity.AssignableQueue)__getInternalInterface().getFieldValue(PREVIOUSQUEUE_PROP.get());
  }
  
  /**
   * Gets the value of the PreviousUser field.
   * User to which this entity was previously assigned.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getPreviousUser() {
    return (entity.User)__getInternalInterface().getFieldValue(PREVIOUSUSER_PROP.get());
  }
  
  /**
   * Gets the value of the Progress field.
   * This service request's current place in its life cycle.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ServiceRequestProgress getProgress() {
    return (typekey.ServiceRequestProgress)__getInternalInterface().getFieldValue(PROGRESS_PROP.get());
  }
  
  /**
   * Gets the Service Requests for which OriginatingServiceRequest is equal to this ServiceRequest
   * @return the ServiceRequests that are generated as the result of promoting this ServiceRequest
   */
  public java.util.List<entity.ServiceRequest> getPromotionServiceRequests() {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getPromotionServiceRequests();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the QuoteStatus field.
   * The current quote status for this service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ServiceRequestQuoteStatus getQuoteStatus() {
    return (typekey.ServiceRequestQuoteStatus)__getInternalInterface().getFieldValue(QUOTESTATUS_PROP.get());
  }
  
  /**
   * Array association accessor for key QuoteTimelinessServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.QuoteTimelinessServiceRequestMetric getQuoteTimelinessServiceRequestMetric() {
    return (entity.QuoteTimelinessServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("QuoteTimelinessServiceRequestMetric"));
  }
  
  /**
   * Gets the value of the Quotes field.
   * The Quotes associated with this service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestQuote[] getQuotes() {
    return (entity.ServiceRequestQuote[])__getInternalInterface().getFieldValue(QUOTES_PROP.get());
  }
  
  /**
   * Gets the value of the RequestedQuoteCompletionDate field.
   * Desired date by which the specialist will have submitted the quote, or null if the specialist has not indicated such a date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRequestedQuoteCompletionDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REQUESTEDQUOTECOMPLETIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the RequestedServiceCompletionDate field.
   * Desired date by which the specialist will have completed the work, or null if the specialist has not indicated such a date.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRequestedServiceCompletionDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REQUESTEDSERVICECOMPLETIONDATE_PROP.get());
  }
  
  /**
   * Array association accessor for key ServiceCycleTimeServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceCycleTimeServiceRequestMetric getServiceCycleTimeServiceRequestMetric() {
    return (entity.ServiceCycleTimeServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("ServiceCycleTimeServiceRequestMetric"));
  }
  
  /**
   * Array association accessor for key ServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestMetric getServiceRequestMetric() {
    return (entity.ServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("ServiceRequestMetric"));
  }
  
  /**
   * Gets the value of the ServiceRequestMetrics field.
   * Metrics related to this service request
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestMetric[] getServiceRequestMetrics() {
    return (entity.ServiceRequestMetric[])__getInternalInterface().getFieldValue(SERVICEREQUESTMETRICS_PROP.get());
  }
  
  /**
   * Gets the value of the ServiceRequestNumber field.
   * A globally-unique, user-readable identifier for this service request. This number is normally generated within ClaimCenter.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getServiceRequestNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERVICEREQUESTNUMBER_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestPromotion[] getServiceRequestPromotionArray() {
    return (entity.ServiceRequestPromotion[])__getInternalInterface().getFieldValue(SERVICEREQUESTPROMOTIONARRAY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceRequestPromotion[] getServiceRequestPromotions() {
    return (entity.ServiceRequestPromotion[])__getInternalInterface().getFieldValue(SERVICEREQUESTPROMOTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the ServiceRequestReferenceNumber field.
   * A string identifier assigned to this ServiceRequest by the specialist. The value of this field may only be meaningful to the specialist.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getServiceRequestReferenceNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERVICEREQUESTREFERENCENUMBER_PROP.get());
  }
  
  /**
   * Array association accessor for key ServiceTimelinessServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ServiceTimelinessServiceRequestMetric getServiceTimelinessServiceRequestMetric() {
    return (entity.ServiceTimelinessServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("ServiceTimelinessServiceRequestMetric"));
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Servreqactinst[] getServreqactinstArray() {
    return (entity.Servreqactinst[])__getInternalInterface().getFieldValue(SERVREQACTINSTARRAY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Servreqltstqte[] getServreqltstqteArray() {
    return (entity.Servreqltstqte[])__getInternalInterface().getFieldValue(SERVREQLTSTQTEARRAY_PROP.get());
  }
  
  /**
   * Gets the short display name for the ServiceRequest defined in the entity name
   */
  public java.lang.String getShortDisplayName() {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getShortDisplayName();
  }
  
  /**
   * Gets the value of the Specialist field.
   * The vendor or internal entity selected to do the work requested by this service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Contact getSpecialist() {
    return (entity.Contact)__getInternalInterface().getFieldValue(SPECIALIST_PROP.get());
  }
  
  /**
   * Gets the value of the SpecialistCommMethod field.
   * The channel through which the carrier will communicate with the specialist.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.SpecialistCommMethod getSpecialistCommMethod() {
    return (typekey.SpecialistCommMethod)__getInternalInterface().getFieldValue(SPECIALISTCOMMMETHOD_PROP.get());
  }
  
  /**
   * Array association accessor for key SpecialistInitialResponseTimeServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.SpecialistInitialResponseTimeServiceRequestMetric getSpecialistInitialResponseTimeServiceRequestMetric() {
    return (entity.SpecialistInitialResponseTimeServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("SpecialistInitialResponseTimeServiceRequestMetric"));
  }
  
  /**
   * Returns the suggested assignees for this entity, to be displayed in the
   * UI as the most likely assignees when the user is assigning the entity. The list of assignees
   * will depend on the type of entity, and will contain users who are somehow "involved" with the entity,
   * associated claim, or currently assigned user and group.
   * @return the list of suggested assignees, never null or empty
   */
  public gw.api.assignment.Assignee[] getSuggestedAssignees() {
    return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getSuggestedAssignees();
  }
  
  /**
   * Gets the value of the Tier field.
   * The tier of this service request.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ServiceRequestTier getTier() {
    return (typekey.ServiceRequestTier)__getInternalInterface().getFieldValue(TIER_PROP.get());
  }
  
  /**
   * Array association accessor for key TimeBasedServiceRequestMetric on array ServiceRequestMetrics
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.TimeBasedServiceRequestMetric getTimeBasedServiceRequestMetric() {
    return (entity.TimeBasedServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("TimeBasedServiceRequestMetric"));
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * Gets the validation result.
   * @return The validation result.
   */
  public gw.api.validation.ValidationResult getValidationResult() {
    return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Link the document to the Service Request using the ServiceRequestDocumentLink join array. The document will
   * not be visible to the specialist.
   * @param document to link to the service request; it need not be in the ServiceRequest's bundle
   * @return the ServiceRequestDocumentLink that forms the link
   */
  public entity.ServiceRequestDocumentLink linkDocument(entity.Document document) {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).linkDocument(document);
  }
  
  /**
   * Link the document to the Service Request using the ServiceRequestDocumentLink join array. The
   * <code>visibleToSpecialist</code argument determines whether the document will be visible to the specialist.
   * @param document to link to the service request; it need not be in the ServiceRequest's bundle
   * @param visibleToSpecialist whether the specialist should have access to the document
   */
  public entity.ServiceRequestDocumentLink linkDocument(entity.Document document, boolean visibleToSpecialist) {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).linkDocument(document, visibleToSpecialist);
  }
  
  public void pushAssignmentPopup(java.util.List<gw.api.assignment.CCAssignableMethods> assignables) {
    ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).pushAssignmentPopup(assignables);
  }
  
  /**
   * Sets up sequence and other basic fields on newChange, then adds it to the ServiceRequest, setting it as
   * the latest change. Caller should create a new instance, set the "New"/"Chg" and description fields on it as
   * desired, then pass it to this method. Caller is responsible for ensuring that the "New"/"Chg" fields follow the
   * conventions for these fields, as described in the comments and descriptions for those datamodel fields.
   * In most cases, {@link #recordChange(String, ServiceRequestOperation, entity.ServiceRequestStatement, Contact)} should be used instead of this method,
   * since it creates the ServiceRequestChange and automatically populates it with the ServiceRequest's changes since
   * the previous service request change.
   * @param newChange the ServiceRequestChange to record on this ServiceRequest; must be in the same bundle as this ServiceRequest
   */
  public void recordChange(entity.ServiceRequestChange newChange) {
    ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).recordChange(newChange);
  }
  
  /**
   * Creates a ServiceRequestChange based on the changes made to this ServiceRequest in the current bundle. This method looks
   * for property pairs on ServiceRequestChange that follow the "New"/"Chg" naming convention and populates them
   * based on the values from the ServiceRequest.
   * @param description a description of this change, to be recorded on the new ServiceRequestChange
   * @param operation the operation that this change is recording, if any
   * @param statement service request statement that is related to this change, if any
   * @param initiator the Contact that initiated the operation
   * @throws IllegalStateException if no fields have changed, and so no ServiceRequestChange can be recorded
   * @return the new ServiceRequestChange
   */
  public entity.ServiceRequestChange recordChange(java.lang.String description, typekey.ServiceRequestOperation operation, entity.ServiceRequestStatement statement, entity.Contact initiator) {
    return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).recordChange(description, operation, statement, initiator);
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Rejects the root bean w/ a global message
   * <p/>
   * Note the reason why the bean failed validation shouldn't refer to a particular
   * field in the entity. To do that, use the rejectField() method.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void reject(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).reject(errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Rejects a particular field or field path on the root bean.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void rejectField(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectField(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Rejects a particular field or field path on the root bean.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectFieldWithFlowStep(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
  }
  
  /**
   * Reject a particular field of field path on a bean related to the root
   * bean, e.g. an array element of the bean such as an Exposure of a Claim.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  public void rejectSubField(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubField(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
  }
  
  /**
   * Reject a particular field of field path on a bean related to the root
   * bean, e.g. an array element of the bean such as an Exposure of a Claim.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * Note that this is the fullest version of "reject"; all the others are
   * overloaded for easier use.
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectSubFieldWithFlowStep(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubFieldWithFlowStep(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
  }
  
  /**
   * Rejects the root bean w/ a global message
   * <p/>
   * Note the reason why the bean failed validation shouldn't refer to a particular
   * field in the entity. To do that, use the rejectField() method.
   * <p/>
   * Note you can indicate failure as both an error and a warning simultaneously.
   * However, if the failure is both an error and a warning, the failure should
   * have different error and warning levels.
   * <p/>
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  public void rejectWithFlowStep(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
    ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectWithFlowStep(errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the Activities array. This is achieved by marking the element for removal.
   */
  public void removeFromActivities(entity.Activity element) {
    __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Activities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromActivities(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromDocumentLinks(entity.ServiceRequestDocumentLink element) {
    __getInternalInterface().removeArrayElement(DOCUMENTLINKS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromDocumentLinks(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(DOCUMENTLINKS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the History array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromHistory(entity.ServiceRequestChange element) {
    __getInternalInterface().removeArrayElement(HISTORY_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the History array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromHistory(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(HISTORY_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the InstructionHistory array. This is achieved by marking the element for removal.
   */
  public void removeFromInstructionHistory(entity.ServiceRequestInstruction element) {
    __getInternalInterface().removeArrayElement(INSTRUCTIONHISTORY_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the InstructionHistory array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInstructionHistory(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(INSTRUCTIONHISTORY_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Invoices array. This is achieved by marking the element for removal.
   */
  public void removeFromInvoices(entity.ServiceRequestInvoice element) {
    __getInternalInterface().removeArrayElement(INVOICES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Invoices array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInvoices(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(INVOICES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Messages array. This is achieved by marking the element for removal.
   */
  public void removeFromMessages(entity.ServiceRequestMessage element) {
    __getInternalInterface().removeArrayElement(MESSAGES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Messages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMessages(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(MESSAGES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   */
  public void removeFromNotes(entity.Note element) {
    __getInternalInterface().removeArrayElement(NOTES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Notes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromNotes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(NOTES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the Quotes array. This is achieved by marking the element for removal.
   */
  public void removeFromQuotes(entity.ServiceRequestQuote element) {
    __getInternalInterface().removeArrayElement(QUOTES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Quotes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromQuotes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(QUOTES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the ServiceRequestMetrics array. This is achieved by marking the element for removal.
   */
  public void removeFromServiceRequestMetrics(entity.ServiceRequestMetric element) {
    __getInternalInterface().removeArrayElement(SERVICEREQUESTMETRICS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ServiceRequestMetrics array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromServiceRequestMetrics(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(SERVICEREQUESTMETRICS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the Activities field.
   */
  public void setActivities(entity.Activity[] value) {
    __getInternalInterface().setFieldValue(ACTIVITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignedByUser field.
   */
  public void setAssignedByUser(entity.User value) {
    __getInternalInterface().setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignedGroup field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAssignedGroup(entity.Group value) {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedGroup(value);
  }
  
  /**
   * Sets the value of the AssignedQueue field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAssignedQueue(entity.AssignableQueue value) {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedQueue(value);
  }
  
  /**
   * Sets the value of the AssignedUser field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setAssignedUser(entity.User value) {
    ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedUser(value);
  }
  
  /**
   * Sets the value of the AssignmentDate field.
   */
  private void setAssignmentDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ASSIGNMENTDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AssignmentStatus field.
   */
  private void setAssignmentStatus(typekey.AssignmentStatus value) {
    __getInternalInterface().setFieldValue(ASSIGNMENTSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CanceledReason field.
   */
  public void setCanceledReason(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CANCELEDREASON_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Claim field.
   */
  public void setClaim(entity.Claim value) {
    __getInternalInterface().setFieldValue(CLAIM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CloseDate field.
   */
  public void setCloseDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CLOSEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Currency field.
   */
  public void setCurrency(typekey.Currency value) {
    __getInternalInterface().setFieldValue(CURRENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DocumentLinks field.
   */
  private void setDocumentLinks(entity.ServiceRequestDocumentLink[] value) {
    __getInternalInterface().setFieldValue(DOCUMENTLINKS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpectedQuoteCompletionDate field.
   */
  public void setExpectedQuoteCompletionDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPECTEDQUOTECOMPLETIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpectedServiceCompletionDate field.
   */
  public void setExpectedServiceCompletionDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPECTEDSERVICECOMPLETIONDATE_PROP.get(), value);
  }
  
  /**
   * OOTB, adds the service request specialist and customer contact to the claim in the specialist and participant
   * roles, respectively.  Also sets incident-specific roles if the specialist and incident are the
   * appropriate types and the implementation is configured to do so.
   * 
   * This method is called when the FNOL Wizard finishes, but before the Claim Snapshot is created as well as
   * in ServiceRequest.finishSetup().
   */
  public void setExpectedServiceRequestRoles() {
    ((gw.api.vendormanagement.ServiceRequestContactMethods)__getDelegateManager().getImplementation("gw.api.vendormanagement.ServiceRequestContactMethods")).setExpectedServiceRequestRoles();
  }
  
  /**
   * Sets the value of the Exposure field.
   */
  public void setExposure(entity.Exposure value) {
    __getInternalInterface().setFieldValue(EXPOSURE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the History field.
   */
  private void setHistory(entity.ServiceRequestChange[] value) {
    __getInternalInterface().setFieldValue(HISTORY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Incident field.
   */
  public void setIncident(entity.Incident value) {
    __getInternalInterface().setFieldValue(INCIDENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Instruction field.
   */
  public void setInstruction(entity.ServiceRequestInstruction value) {
    __getInternalInterface().setFieldValue(INSTRUCTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InstructionHistory field.
   */
  public void setInstructionHistory(entity.ServiceRequestInstruction[] value) {
    __getInternalInterface().setFieldValue(INSTRUCTIONHISTORY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Invoices field.
   */
  public void setInvoices(entity.ServiceRequestInvoice[] value) {
    __getInternalInterface().setFieldValue(INVOICES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Kind field.
   */
  public void setKind(typekey.ServiceRequestKind value) {
    __getInternalInterface().setFieldValue(KIND_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LatestChangeTimestampDenorm field.
   */
  private void setLatestChangeTimestampDenorm(java.util.Date value) {
    __getInternalInterface().setFieldValue(LATESTCHANGETIMESTAMPDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LatestQuote field.
   */
  public void setLatestQuote(entity.ServiceRequestQuote value) {
    __getInternalInterface().setFieldValue(LATESTQUOTE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Messages field.
   */
  public void setMessages(entity.ServiceRequestMessage[] value) {
    __getInternalInterface().setFieldValue(MESSAGES_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the Notes field.
   */
  public void setNotes(entity.Note[] value) {
    __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OriginatingServiceRequest field.
   */
  public void setOriginatingServiceRequest(entity.ServiceRequest value) {
    __getInternalInterface().setFieldValue(ORIGINATINGSERVICEREQUEST_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreviousGroup field.
   */
  private void setPreviousGroup(entity.Group value) {
    __getInternalInterface().setFieldValue(PREVIOUSGROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreviousQueue field.
   */
  private void setPreviousQueue(entity.AssignableQueue value) {
    __getInternalInterface().setFieldValue(PREVIOUSQUEUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PreviousUser field.
   */
  private void setPreviousUser(entity.User value) {
    __getInternalInterface().setFieldValue(PREVIOUSUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Progress field.
   */
  public void setProgress(typekey.ServiceRequestProgress value) {
    __getInternalInterface().setFieldValue(PROGRESS_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the QuoteStatus field.
   */
  public void setQuoteStatus(typekey.ServiceRequestQuoteStatus value) {
    __getInternalInterface().setFieldValue(QUOTESTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Quotes field.
   */
  public void setQuotes(entity.ServiceRequestQuote[] value) {
    __getInternalInterface().setFieldValue(QUOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RequestedQuoteCompletionDate field.
   */
  public void setRequestedQuoteCompletionDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(REQUESTEDQUOTECOMPLETIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RequestedServiceCompletionDate field.
   */
  public void setRequestedServiceCompletionDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(REQUESTEDSERVICECOMPLETIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServiceRequestMetrics field.
   */
  public void setServiceRequestMetrics(entity.ServiceRequestMetric[] value) {
    __getInternalInterface().setFieldValue(SERVICEREQUESTMETRICS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServiceRequestNumber field.
   */
  public void setServiceRequestNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SERVICEREQUESTNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServiceRequestPromotionArray field.
   */
  private void setServiceRequestPromotionArray(entity.ServiceRequestPromotion[] value) {
    __getInternalInterface().setFieldValue(SERVICEREQUESTPROMOTIONARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServiceRequestPromotions field.
   */
  private void setServiceRequestPromotions(entity.ServiceRequestPromotion[] value) {
    __getInternalInterface().setFieldValue(SERVICEREQUESTPROMOTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServiceRequestReferenceNumber field.
   */
  public void setServiceRequestReferenceNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(SERVICEREQUESTREFERENCENUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServreqactinstArray field.
   */
  private void setServreqactinstArray(entity.Servreqactinst[] value) {
    __getInternalInterface().setFieldValue(SERVREQACTINSTARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ServreqltstqteArray field.
   */
  private void setServreqltstqteArray(entity.Servreqltstqte[] value) {
    __getInternalInterface().setFieldValue(SERVREQLTSTQTEARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Specialist field.
   */
  public void setSpecialist(entity.Contact value) {
    __getInternalInterface().setFieldValue(SPECIALIST_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SpecialistCommMethod field.
   */
  public void setSpecialistCommMethod(typekey.SpecialistCommMethod value) {
    __getInternalInterface().setFieldValue(SPECIALISTCOMMMETHOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Tier field.
   */
  public void setTier(typekey.ServiceRequestTier value) {
    __getInternalInterface().setFieldValue(TIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Called on an assignable to decide if the assignment on the parent assignable should be cascaded
   * to this assignable.
   * @param parent the parent assignable
   * @param defaultOwnerUserId the id of the special default owner user, used by the assignment engine
   *   as the user of last resort if, for example, assignment rules can't find an appropriate user.
   * @param defaultGroupId the id of the root group, used by the assignment engine as the group of last
   *   resort if, for example, assignment rules can't find an appropriate group.
   * @return true if the assignment should be cascaded, false otherwise
   */
  public boolean shouldCascadeAssignment(entity.Assignable parent, gw.pl.persistence.core.Key defaultOwnerUserId, gw.pl.persistence.core.Key defaultGroupId) {
    return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).shouldCascadeAssignment(parent, defaultOwnerUserId, defaultGroupId);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  /**
   * Unlink the document from the Service Request by removing the entry in the ServiceRequestDocumentLink join array
   * @param document to unlink from service request; it need not be in the ServiceRequest's bundle
   * @throws IllegalArgumentException if the specified document is
   */
  public void unlinkDocument(entity.Document document) {
    ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).unlinkDocument(document);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ServiceRequestInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ServiceRequest.this.__getDelegateManager();
    }
    
    public void addEvent(com.guidewire.pl.system.entity.BeanEvent event) {
      ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).addEvent(event);
    }
    
    /**
     * Associates an event with the bean, which will be fired when the bean is
     * committed. A bean with an event is considered changed.
     * @param strEventId The event id.
     */
    public void addEvent(java.lang.String strEventId) {
      ((com.guidewire.pl.domain.messaging.EventAwarePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.EventAwarePublicMethods")).addEvent(strEventId);
    }
    
    /**
     * Adds the given element to the Activities array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToActivities(entity.Activity element) {
      __getInternalInterface().addArrayElement(ACTIVITIES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the DocumentLinks array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToDocumentLinks(entity.ServiceRequestDocumentLink element) {
      __getInternalInterface().addArrayElement(DOCUMENTLINKS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the History array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToHistory(entity.ServiceRequestChange element) {
      __getInternalInterface().addArrayElement(HISTORY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the InstructionHistory array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToInstructionHistory(entity.ServiceRequestInstruction element) {
      __getInternalInterface().addArrayElement(INSTRUCTIONHISTORY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Invoices array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToInvoices(entity.ServiceRequestInvoice element) {
      __getInternalInterface().addArrayElement(INVOICES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Messages array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToMessages(entity.ServiceRequestMessage element) {
      __getInternalInterface().addArrayElement(MESSAGES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Notes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToNotes(entity.Note element) {
      __getInternalInterface().addArrayElement(NOTES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the Quotes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToQuotes(entity.ServiceRequestQuote element) {
      __getInternalInterface().addArrayElement(QUOTES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ServiceRequestMetrics array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToServiceRequestMetrics(entity.ServiceRequestMetric element) {
      __getInternalInterface().addArrayElement(SERVICEREQUESTMETRICS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ServiceRequestPromotionArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToServiceRequestPromotionArray(entity.ServiceRequestPromotion element) {
      __getInternalInterface().addArrayElement(SERVICEREQUESTPROMOTIONARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ServiceRequestPromotions array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToServiceRequestPromotions(entity.ServiceRequestPromotion element) {
      __getInternalInterface().addArrayElement(SERVICEREQUESTPROMOTIONS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ServreqactinstArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToServreqactinstArray(entity.Servreqactinst element) {
      __getInternalInterface().addArrayElement(SERVREQACTINSTARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ServreqltstqteArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToServreqltstqteArray(entity.Servreqltstqte element) {
      __getInternalInterface().addArrayElement(SERVREQLTSTQTEARRAY_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    /**
     * Returns true if any fields that would be recorded in a ServiceRequestChange have changed on this ServiceRequest in the
     * current bundle.
     * @return true if any fields have changed
     */
    public boolean anyFieldsChanged() {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).anyFieldsChanged();
    }
    
    public entity.KeyableBean asKeyableBean() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).asKeyableBean();
    }
    
    /**
     * Directly assigns the entity to the specified group and user by setting the assignedGroup and assignedUser fields.
     * If user or group is null returns false and nothing is done.
     * @param group The group to which the entity should be assigned
     * @param user The user to which the entity should be assigned
     * @return true if the assignment is successful
     */
    public boolean assign(entity.Group group, entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(group, user);
    }
    
    /**
     * <p>
     * Invokes the Assignment Engine to assign the item to the specified group and user.  If userID is null,
     * the item will be assigned using the group's assignment rules.  If
     * userID is specified, assignment will be made directly to the group and
     * user.  If the engine cannot assign the item to the requested group/user,
     * it will throw an exception indicating the reason.
     * </p>
     * If a user is specified, caller is responsible for ensuring that the
     * user is a member of group.
     * </p>
     * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
     * @param groupID The group to which the item should be assigned - must be
     *                specified.  If not known, use autoAssign(item) instead.
     * @param userID The user to which the item should be assigned; if null an
     *                appropriate user will be selected by group assignment rules.
     * @throws com.guidewire.pl.system.exception.IllegalAssignmentException if the user does not have permission
     * @throws com.guidewire.pl.system.exception.NoAssignmentFoundException if assignment could not be made
     * @deprecated Use autoAssign(Group, User) instead. Note that that method returns a boolean instead of throwing exceptions
     */
    public void assign(gw.pl.persistence.core.Key groupID, gw.pl.persistence.core.Key userID) throws com.guidewire.pl.system.exception.NoAssignmentFoundException, com.guidewire.pl.system.exception.IllegalAssignmentException {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assign(groupID, userID);
    }
    
    /**
     * Assign the entity, which must be an Activity to the specified queue. (Currently, only Activities may be assigned
     * to Queues.) The current group is not a parameter - it is derived from the current
     * Assignment Engine state. As a result, this method may only be invoked from within an Assignment Rule.
     * <p/>
     * If there is no current group, nothing is done and a warning is logged. The queue must belong to the current group
     * or nothing is done.  Returns false if the assignable bean is not an activity.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param queue Queue to assign the activity to
     * @return true if the assignment is successful, false otherwise
     * @deprecated use assignActivityToQueue(AssignableQueue, Group) instead, since that method is more widely valid and
     *             is easier to understand because the group is explicit rather than implicit.
     */
    public boolean assignActivityToQueue(entity.AssignableQueue queue) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue);
    }
    
    /**
     * Assign this entity, which must be an Activity,  to the specified queue. The queue should belong to the specified group.
     * Returns false if the assignable bean is not an activity.
     * @param queue Queue to assign the activity to
     * @param group cannot be null
     * @return true if the assignment is successful
     */
    public boolean assignActivityToQueue(entity.AssignableQueue queue, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignActivityToQueue(queue, group);
    }
    
    /**
     * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
     * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
     * see the preferred method for details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param attributeBasedAssignmentCriteria The criteria used to perform the search
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
     */
    public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria);
    }
    
    /**
     * Assigns an assignable item to the user who best fits the set of user attributes defined in the attributeBasedAssignmentCriteria
     * parameter. Alternative signature which depends on the "current" group status in the Assignment Engine;
     * see the preferred method for details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param attributeBasedAssignmentCriteria The criteria used to perform the search
     * @param includeSubGroups if true, searches  all the users in any subgroups of the current group, as well as those in
     *                         the current group. If false, only searches users in the current group
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignByUserAttributes(AttributeBasedAssignmentCriteria, boolean, Group)</code> instead
     */
    public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups);
    }
    
    /**
     * Assigns an assignable item to a user who satisfies the constraints defined in the attributeBasedAssignmentCriteria
     * parameter. This is done by:
     * <p/>
     * 1) Find the set of users who are members of the supplied group, and optionally its subgroups, and who satisfy
     * the supplied attribute-based search criteria. (If the group parameter is null, then no group restriction applies)
     * 2) Select from the resulting set of users via the round-robin rotation mechanism. A separate round-robin state will
     * be maintained for each unique assignment criteria entity and group.
     * @param attributeBasedAssignmentCriteria the criteria to be satisfied by the selected user
     * @param includeSubGroups if true, searches  all the users in any subgroups of the group parameter as well as those in
     *                         that group. If false, only searches users in the group
     * @param group the group.
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignByUserAttributes(entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignByUserAttributes(attributeBasedAssignmentCriteria, includeSubGroups, group);
    }
    
    /**
     * Assigns the entity to the group requested.  If group is null, nothing is done.
     * @param group the group to which the entity should be assigned
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroup(entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroup(group);
    }
    
    /**
     * Uses the group type group selector to choose the next subgroup under the "current" group (retrieved from the
     * current state of the Assignment Engine) to receive the assignable. If there is no current group, the root group
     * from the Assignment Engine is used.
     * <p/>
     * This method will search breadth-first through the group tree, starting with the current group, and will
     * return the first group found with the approriate type.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param requiredGroupType A GroupType typecode; the assignment will be restricted to a group of this type. If null, then
     *                          no group will be found.
     * @return true if the assignment is successful, false otherwise
     * @deprecated This method of assignment is deemed useless, because it always returns the first group found with the
     *             required type. Use <code>assignGroupByRoundRobin()</code> instead, so that the assignment will be rotated among
     *             the matching groups.
     */
    public boolean assignGroupByGroupType(typekey.GroupType requiredGroupType) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByGroupType(requiredGroupType);
    }
    
    /**
     * Assigns this entity to a group based on region assignments. This is done in the following manner:
     * <p/>
     * Alternative signature; see <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param groupType Only groups whose GroupType property matches this value will be considered
     * @param address An address to use for location-based assignment
     * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the current group
     *                           but also through all its subgroups.
     * @return true if the assignment is successful, false otherwise
     * @deprecated Use <code>assignGroupByLocation(GroupType, Address, boolean, Group)</code> insteaed, to make the recursion explicit.
     */
    public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly);
    }
    
    /**
     * Assigns this entity to a group based on region assignments. This is done in the following manner:
     * <p/>
     * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
     * would typically be the zip code)
     * 2) Search for the groups within the parameter group whose region assignment configuration includes that zip code.
     * 3) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
     * 4) If no group is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
     * 5) If more than one group is found, then round-robin among the resulting groups based on the zone which was used to
     * find the match.
     * <p/>
     * For example if we find no groups that match by zip but a few that match by county then
     * assignment will round robin through the ones that match by county and will ignore any others that match by state.
     * Matching is case-insensitive.
     * <p/>
     * Search is restricted to the sub-groups of the specified group and optionally all of its children. If there is no
     * specified group, then the root group is used. Note that starting from the root group is potentially costly in
     * performance time. If invoked from outside an Assignment Rule, this method will take no action and return false.
     * @param groupType Only groups whose GroupType property matches this value will be considered
     * @param address An address to use for location-based assignment
     * @param directChildrenOnly if this parameter is false the selector will round-robin not only through the parameter
     *                           group but also through all its subgroups.
     * @param parentGroup The group whose subgroups will be considered for assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroupByLocation(typekey.GroupType groupType, entity.Address address, boolean directChildrenOnly, entity.Group parentGroup) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByLocation(groupType, address, directChildrenOnly, parentGroup);
    }
    
    /**
     * Uses the round robin group selector to choose the next subgroup under the current group with the
     * appropriate type to be assigned to this entity.
     * <p/>
     * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
     *                          then no group will be found
     * @return true if the assignment is successful, false otherwise
     * @deprecated Use <code>assignGroupByRoundRogin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
     */
    public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType);
    }
    
    /**
     * Uses the round robin group selector to choose the next subgroup under the current group with the
     * appropriate type to be assigned to this entity.
     * <p/>
     * Alternative signature; see <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param requiredGroupType A typecode for a group; the assignment will be restricted to a group of this type. If null,
     *                          then no group will be found
     * @param includeSubGroups If true, all the user
     * @return true if the assignment is successful, false otherwise
     * @deprecated Use <code>assignGroupByRoundRobin(GroupType, boolean, Group)</code> insteaed, to make the recursion explicit.
     */
    public boolean assignGroupByRoundRobin(typekey.GroupType requiredGroupType, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(requiredGroupType, includeSubGroups);
    }
    
    /**
     * Uses the round robin algorithm to choose the next group to receive the assignable.
     * <p/>
     * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
     * taken into account, but each Group's load factor is used to determine relative assignment frequency; essentially, a
     * group with a lower load factor than the others' is periodically skipped.
     * <p/>
     * The round-robin rotation for each group type (and boolean value) is independent of the others, so only identical
     * calls will impact the user who is "next" in the rotation.
     * <p/>
     * If no group is specified, the root group will be used instead. Note that starting from the root group is
     * potentially costly in performance time.
     * <p/>
     * When group type is specified, the load factor is <b>NOT</b> used.
     * @param groupType Only groups whose GroupType property matches this value will be considered
     * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter
     *                         group's immediate children but also through all its subgroups.
     * @param parentGroup The group whose subgroups will be considered for assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroupByRoundRobin(typekey.GroupType groupType, boolean includeSubGroups, entity.Group parentGroup) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupByRoundRobin(groupType, includeSubGroups, parentGroup);
    }
    
    /**
     * Uses the supplied dynamic assignment strategy implementation to find a group assignment for the current entity. See
     * {@link gw.api.assignment.DynamicGroupAssignmentStrategy} for more details on what that implementation should look like and how it
     * is used by the implementation of this method.
     * @param dynamicGroupAssignmentStrategy the {@link gw.api.assignment.DynamicGroupAssignmentStrategy} to be used to do the assignment
     * @param parentGroup The group to be used during the assignment (usually the parent group to which the entity is or should be assigned)
     * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignGroupDynamically(gw.api.assignment.DynamicGroupAssignmentStrategy dynamicGroupAssignmentStrategy, entity.Group parentGroup, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignGroupDynamically(dynamicGroupAssignmentStrategy, parentGroup, includeSubGroups);
    }
    
    /**
     * Request manual assignment of the entity to the supplied user.
     * <p/>
     * Request is granted only if the responsible user has review assignment permission.
     * <p/>
     * Successful completion will cause a review activity to be created indicating that the assignment needs to be
     * completed, and that activity will be assigned to the supplied user
     * @param responsibleUser The person who should carry out the assignment
     * @return true if responsibleUser has review assignment permission, false otherwise.
     */
    public boolean assignManually(entity.User responsibleUser) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignManually(responsibleUser);
    }
    
    /**
     * Request manual assignment of the entity, with the responsibilty round-robbined among members of either the
     * currently assigned group or the specified group if no group is currently assigned
     * <p/>
     * {@see assignManually} for more information about "manual" assignment.
     * @param group the group to use if this entity does not have a currently assigned group.
     * @return true if a user was found to give the manual assignment action to, false if no sure user was found
     */
    public boolean assignManuallyByRoundRobin(entity.Group group) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignManuallyByRoundRobin(group);
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    /**
     * Assigns the entity to the user and group to which the associated claim is currently assigned.
     * Caller is responsible for ensuring that the entity is linked to an assigned claim. If the resulting assignment
     * is invalid for any reason, then an IllegalAssignmentException will be thrown.
     * 
     * Note that this method is currently only valid for an Activity, Exposure, or Matter.
     */
    public void assignToClaimOwner() {
      ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignToClaimOwner();
    }
    
    /**
     * Assign to the claim user with the given role. The search for a user with
     * a matching role is done in the following steps:
     * <ol>
     * <li>If assigning an activity associated with an exposure search the
     *     exposure first
     * <li>Search the claim users
     * <li>If not assigning an activity associated with an exposure, search all
     *     the exposures
     * </ol>
     * If the search finds a match at any step, it stops. If the match is unique
     * it does the assignment and returns true. If the match is not unique it
     * returns false. If the search goes through all steps without finding a
     * match it returns false
     * @param userRole the desired user role
     * @return true if a unique match was found and the assignment was made, false
     *   otherwise
     */
    public boolean assignToClaimUserWithRole(typekey.UserRole userRole) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignToClaimUserWithRole(userRole);
    }
    
    /**
     * Assigns the item to the creator of the supplied entity, and to one of the user's groups. If no group
     * is found for the user, uses the group based on the rule engine state (if available).
     * @param sourceEntity The entity to query for the id of the creator.
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignToCreator(entity.Editable sourceEntity) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity);
    }
    
    /**
     * Assigns this entity to the user who created the supplied entity, and to the first group in the user's list of member groups. In the
     * unlikely case that the user does not belong to any groups, then the entity will be assigned to the supplied
     * default group.
     * <p/>
     * If the supplied entity has not been persisted yet, and therefore has no recorded creator, then the current user will be
     * used instead.
     * @param sourceEntity The entity to query for the id of its creator.
     * @param defaultGroup The default group to use if the assigned user is not a member of any group.
     * @return true if the assignment is successful, false otherwise
     * @deprecated This signature is a little confusing, because the defaultGroup parameter should almost never be
     *             necessary, since in the current system a user almost never belongs to no groups. Use assignToCreator(EditableBean)
     *             instead
     */
    public boolean assignToCreator(entity.Editable sourceEntity, entity.Group defaultGroup) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToCreator(sourceEntity, defaultGroup);
    }
    
    /**
     * Another name for {@link #assignToQueue()}, making it more explicit that the activity will be assigned to the FNOL
     * queue. See that method for more details.
     * @return true if the assignment is successful, false otherwise
     * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
     *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
     *             named queue.
     */
    public boolean assignToFNOLQueue() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToFNOLQueue();
    }
    
    /**
     * Assigns this entity to the user and group to which the entity's "issue" is assigned. Which entity is used
     * to find the user and group is application-dependent. For example, in CC this will assign the entity to
     * the owner of the related exposure (if any) or claim. This method is currently only meaningful for CC.
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignToIssueOwner() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToIssueOwner();
    }
    
    /**
     * Assigns the entity to the previously assigned user.  The current group is kept track of for the client.  If there is no current
     * group, nothing is done and a warning is logged.
     * <p/>
     * This is no longer a very useful method, and should be considered deprecated, in favor of simply assigning directly to the
     * PreviousUser and PreviousGroup properties.
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignToPreviousOwner() {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignToPreviousOwner();
    }
    
    /**
     * Assign an activity to the FNOL queue of items assigned to the "current" group (retrieved from the current state of
     * the Assignment Engine). If the entity to be assigned is not an activity nothing is done,
     * false is returned and a warning is logged.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @return true if the assignment is successful, false otherwise
     * @deprecated use {@link #assignActivityToQueue(entity.AssignableQueue)} to assign an
     *             activity to a particular queue. Note that {@link entity.Group#getQueue(String)} can be used to find a
     *             named queue.
     */
    public boolean assignToQueue() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignToQueue();
    }
    
    public void assignToQueueInternal(entity.AssignableQueue queue) throws com.guidewire.pl.system.exception.NoAssignmentFoundException, com.guidewire.pl.system.exception.IllegalAssignmentException {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).assignToQueueInternal(queue);
    }
    
    /**
     * Assigns the entity to the user requested within the "current" group (retrieved from the current state of
     * the Assignment Engine).  If the user is null or is not a member of the current group, nothing is done and false is returned.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param user the user to be assigned
     * @return true if the assignment is successful
     * @deprecated depends on the Assignment Engine state; use <code>assign(Group, User)</code> instead
     */
    public boolean assignUser(entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUser(user);
    }
    
    /**
     * Directly assigns the entity to the specified user and one of the groups the user belongs to.
     * <p/>
     * If the user does not have sufficient permission to accept the assignment, false is returned
     * @param user The user to which the entity should be assigned
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserAndDefaultGroup(entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserAndDefaultGroup(user);
    }
    
    /**
     * Uses the location-based assigner to assign an Assignable based on a given address.
     * <p/>
     * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use for location-based assignment
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
     */
    public boolean assignUserByLocation(entity.Address address) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address);
    }
    
    /**
     * Uses the location-based assigner to assign an Assignable based on a given address.
     * <p/>
     * Alternative signature; see <code>assignUserByLocation(Address, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use for location-based assignment
     * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
     *                         current group.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocation(Address, boolean, Group)</code> instead.
     */
    public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups);
    }
    
    /**
     * Assigns this entity to a user based on region assignments. This is done in the following manner:
     * <p/>
     * 1) Based on the Region configuration, get the smallest zone containing the supplied address (in the US, this
     * would typically be the zip code)
     * 2) Search for the users whose region assignment configuration includes that zip code.
     * 3) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, county)
     * 4) If no user is found, repeat steps 1 and 2 with the next largest zone (in the US, state)
     * 5) If more than one user is found, then round-robin among the resulting users based on the zone which was used to
     * find the match.
     * <p/>
     * For example if we find no users that match by zip but a few that match by county then
     * assignment will round robin through the ones that match by county and will ignore any others that match by state.
     * Matching is case-insensitive.
     * <p/>
     * Search is restricted to the users of the group (and optionally its subgroups). It is an error if there is no
     * group.
     * @param address An address to use for location-based assignment
     * @param includeSubGroups if true, then include users in any sub groups of the parameter group as well as users in
     *                         that group.
     * @param group the group whose users will be considered for the assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByLocation(entity.Address address, boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocation(address, includeSubGroups, group);
    }
    
    /**
     * A combination of {@link #assignUserByLocation} and {@link #assignByUserAttributes} .
     * <p/>
     * Alternative signature; see <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use for location-based assignment
     * @param attributeBasedAssignmentCriteria the user attributes to match against
     * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
     *                         current group.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationAndAttributes(Address, AttributeBasedAssignmentCriteria, boolean, Group)</code> instead.
     */
    public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups);
    }
    
    /**
     * Assigns this entity to the user matching the attribute criteria whose region assignments contain the supplied location. This method
     * first finds the users in the supplied group (and, possibly, subgroups) who match the attribute criteria, and then
     * once that set is determined it applies the same algorithm used by {@link #assignUserByLocation}
     * to find a user whose region assignments contain the supplied location.
     * <p/>
     * If no users match the supplied criteria, then assignment will fail and false will be returned.
     * @param address An address to use for location-based assignment
     * @param attributeBasedAssignmentCriteria the user attributes to match against
     * @param includeSubGroups if true, then include users in any sub groups of the parameter  group as well as users in
     *                         that group.
     * @param group the group whose members should be considered for the assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByLocationAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByLocationAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups, group);
    }
    
    /**
     * Assigns this entity to the user matching the attribute criteria who is closest to the supplied location. This method
     * first finds the users in the supplied group (and, possibly, subgroups) who match the attribute criteria, and then
     * once that set is determined it applies the same algorithm used by {@link #assignUserByLocationUsingProximitySearch}
     * to choose the closest one.
     * <p/>
     * If no users match the supplied criteria, then assignment will fail and false will be returned.
     * @param address An address to use for location-based assignment
     * @param attributeBasedAssignmentCriteria the user attributes to match against
     * @param includeSubGroups if true, then include users in any sub groups of the supplied group as well as users in the
     *                         parameter group.
     * @param group The group whose users should be considered for the assignment
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByLocationUsingProximityAndAttributes(entity.Address address, entity.AttributeBasedAssignmentCriteria attributeBasedAssignmentCriteria, boolean includeSubGroups, entity.Group group) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximityAndAttributes(address, attributeBasedAssignmentCriteria, includeSubGroups, group);
    }
    
    /**
     * Assigns this AssignmentBean to the user in the current group with the closest address to the given address,
     * measured by great-circle distance along the surface of the earth.
     * <p/>
     * Alternative signature; see <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use as the center of the proximity search
     * @return true if the assignment is successful
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> instead.
     */
    public boolean assignUserByLocationUsingProximitySearch(entity.Address address) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximitySearch(address);
    }
    
    /**
     * Assigns this AssignmentBean to the user with the closest address to the given address, measured by a great-circle
     * distance along the surface of the earth.
     * <p/>
     * Alternative signature; see <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param address An address to use for location-based assignment
     * @param includeSubGroups if true, then include users in any sub groups of the current group as well as users in the
     *                         current group.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByLocationUsingProximitySearch(AddressBase, boolean, GroupBase)</code> instead.
     */
    public boolean assignUserByLocationUsingProximitySearch(entity.Address address, boolean includeSubGroups) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximitySearch(address, includeSubGroups);
    }
    
    /**
     * Assigns this entity to the user with the closest address to the specified address, measured by a great-circle
     * distance along the surface of the earth. This includes the following steps:
     * <p/>
     * 1) Geocode the supplied address which will serve as the center of the search. (If necessary, location may already be geocoded)
     * 2) For each user in the specified group, compute the distance from their location (using their Contact entity's primary address)
     * to the supplied location.
     * 2a) If the includeSubGroups parameter is true, repeat this process with all of the descendant groups of the specified group
     * 3) Return the user who is closest to the specified location
     * <p/>
     * If the geocoding attempt fails for the supplied location, an error will be logged and false returned
     * <p/>
     * Search begins with the users of the parameter group; it is an error if there is no group.
     * @param address An address to use for location-based assignment
     * @param includeSubGroups if true, then include users in any sub groups of the parameter group as well as users in
     *                         that group.
     * @param group the group whose members should be considered for assignment. May not be null
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByLocationUsingProximitySearch(entity.Address address, boolean includeSubGroups, entity.Group group) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByLocationUsingProximitySearch(address, includeSubGroups, group);
    }
    
    /**
     * !WARNING! This can be very slow compared to other assignment operations.
     * <p/>
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * If there is more than one user in the returned search, selects one of them
     * based on regular round-robin search.
     * <p/>
     * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.Geocode.setupUserProximitySearch()
     * in order to ensure that the proximity search criteria are set up properly.
     * <p/>
     * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
     * @param asc a valid User Search Criteria
     * @return true if the assignment is successful
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
     */
    public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc);
    }
    
    /**
     * !WARNING! This can be very slow compared to other assignment operations.
     * <p/>
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * If there is more than one user in the returned search, selects one of them
     * based on regular round-robin search. (To always assign to the closest user,
     * set the cap to 1.)
     * <p/>
     * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
     * in order to ensure that the proximity search criteria are set up properly.
     * <p/>
     * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
     * @param asc a valid CC Assignment Search Criteria
     * @param includeSubGroups include subgroups in search
     * @return true if the assignment is successful
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
     */
    public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, boolean includeSubGroups) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, includeSubGroups);
    }
    
    /**
     * !WARNING! This can be very slow compared to other assignment operations.
     * <p/>
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * If there is more than one user in the returned search, selects one of them
     * based on regular round-robin search. (To always assign to the closest user,
     * set the cap to 1.)
     * <p/>
     * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
     * in order to ensure that the proximity search criteria are set up properly.
     * <p/>
     * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
     * @param asc a valid User Search Criteria
     * @param cap the maximum number of users to return in the search
     * @return true if the assignment is successful
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
     */
    public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, int cap) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, cap);
    }
    
    /**
     * !WARNING! This can be very slow compared to other assignment operations.
     * <p/>
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * If there is more than one user in the returned search, selects one of them
     * based on regular round-robin search. (To always assign to the closest user,
     * set the cap to 1.)
     * <p/>
     * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
     * in order to ensure that the proximity search criteria are set up properly.
     * <p/>
     * Note that this method depends on the Assignment Engine state, and should not be called outside of Assignment Rules
     * @param asc a valid CC Assignment Search Criteria
     * @param cap the maximum number of users to return in the search
     * @param includeSubGroups include subgroups in search
     * @return true if the assignment is successful
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithAssignmentSearchCriteria(CCAssignmentSearchCriteria, int, boolean, GroupBase)</code> instead
     */
    public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, int cap, boolean includeSubGroups) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, cap, includeSubGroups);
    }
    
    /**
     * !WARNING! This can be very slow compared to other assignment operations.
     * <p/>
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * If there is more than one user in the returned search, selects one of them
     * based on regular round-robin search. (To always assign to the closest user,
     * set the cap to 1.)
     * <p/>
     * The user search criteria should be set up via gw.api.domain.geocode.GeocodeScriptHelper.setupUserProximitySearch()
     * in order to ensure that the proximity search criteria are set up properly.
     * <p/>
     * @param asc a valid CC Assignment Search Criteria
     * @param cap the maximum number of users to return in the search
     * @param includeSubGroups include subgroups in search
     * @param currentGroup the group within which the search will be performed
     * @return true if the assignment is successful
     */
    public boolean assignUserByProximityWithAssignmentSearchCriteria(gw.api.assignment.CCAssignmentSearchCriteria asc, int cap, boolean includeSubGroups, entity.Group currentGroup) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithAssignmentSearchCriteria(asc, cap, includeSubGroups, currentGroup);
    }
    
    /**
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * <p/>
     * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * <p/>
     * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
     * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
     * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
     * and should be used with care.
     * @param usc a valid User Search Criteria
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
     */
    public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc);
    }
    
    /**
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * <p/>
     * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * <p/>
     * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
     * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
     * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
     * and should be used with care.
     * @param usc a valid User Search Criteria
     * @param includeSubGroups include subgroups in search
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
     */
    public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, boolean includeSubGroups) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, includeSubGroups);
    }
    
    /**
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * <p/>
     * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * <p/>
     * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
     * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
     * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
     * and should be used with care.
     * @param usc a valid User Search Criteria
     * @param cap the maximum number of users to return in the search
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
     */
    public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, int cap) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, cap);
    }
    
    /**
     * Assigns this AssignmentBean to a user based on a User Search by Proximity.
     * <p/>
     * Alternative signature; see <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * <p/>
     * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
     * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
     * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
     * and should be used with care.
     * @param usc a valid User Search Criteria
     * @param cap the maximum number of users to return in the search
     * @param includeSubGroups include subgroups in search
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByProximityWithSearchCriteria(UserSearchCriteriaBase, int, boolean, GroupBase)</code> instead.
     */
    public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, int cap, boolean includeSubGroups) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, cap, includeSubGroups);
    }
    
    /**
     * Assigns this entity to a user based on a User Search by Proximity. This includes the following steps:
     * <p/>
     * 1) Geocode the location which will serve as the center of the search, accessed through <code>usc.getContact().getAddress()</code>.
     * (If necessary; the location may already be geocoded)
     * 2) Finds a list of users who satisfy the user search criteria, which may include proximity restrictions.
     * The specified cap is used to limit the number of users in this list; in the case of proximity restrictions, the users farthest from the search center are trimmed.
     * 3) Use the round-robin algorithm to pick one of the users. This means that repeated, identical calls to this
     * method will rotate through the resulting set of users to find the user to return.
     * <p/>
     * Note that the round-robin rotation is based on the exact UserSearchCriteria used. One implication of this is that
     * the location used should be as general as possible (such as just a city, state or zip, rather than a specific
     * street address) to get the benefit of the round-robin processing and reduce the load on the system.
     * <p/>
     * To always assign to the closest user, set the cap to 1.
     * <p/>
     * <b>Note:</b> while this can be used to do assignment without the proximity search parameters set (thus
     * allowing a general "assignUserBySearchCriteria" capability), this is not recommended or the intent of
     * this method.  It is computationally expensive compared to other methods of non-proximity-based assignment
     * and should be used with care.
     * <p/>
     * The user search criteria should be set up via gw.api.geocode.GeocodeScriptHelper.setupUserProximitySearch()
     * in order to ensure that the proximity search criteria are set up properly.
     * <p/>
     * The group parameter may be null. If it is not null, it will be used as part of the search
     * @param usc a valid User Search Criteria, may not be null
     * @param cap If greater than zero, the maximum number of users to include for round robin from the search results.
     *                         If -1, all users from the search results will be included in the round robin.
     * @param includeSubGroups if the sub group should be used for search
     * @param group The group from where the search should be conducted
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByProximityWithSearchCriteria(entity.UserSearchCriteria usc, int cap, boolean includeSubGroups, entity.Group group) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).assignUserByProximityWithSearchCriteria(usc, cap, includeSubGroups, group);
    }
    
    /**
     * Assigns a user within the "current" group (retrieved from the current state of
     * the Assignment Engine), rotating through the set of users in the group each time the method is called.
     * <p/>
     * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
     */
    public boolean assignUserByRoundRobin() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin();
    }
    
    /**
     * Assigns a user within the "current" group (retrieved from the current state of
     * the Assignment Engine), rotating through the set of users in the group each time the method is called.
     * <p/>
     * Alternative signature; see <code>assignUserByRoundRobin(boolean, Group)</code> for more details.
     * <p/>
     * If invoked from outside an Assignment Rule, will take no action and return false.
     * @param includeSubGroups if this parameter is true the selector will round-robin not only through the current group
     *                         but also through all its subgroups.
     * @return true if the assignment is successful, false otherwise
     * @deprecated depends on the Assignment Engine state; use <code>assignUserByRoundRobin(boolean, Group)</code> instead
     */
    public boolean assignUserByRoundRobin(boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups);
    }
    
    /**
     * Uses the round robin algorithm to choose the next user from the specified group or to receive the assignable.
     * <p/>
     * The round-robin algorithm is basically a simple "eenie-meenie-miney-moe" rotation. No current assignment load is
     * taken into account, but each User's load factor is used to determine relative assignment frequency; essentially, a
     * user with a lower load factor than the others' is periodically skipped.
     * <p/>
     * The round-robin rotation for each group (and boolean value) is independent of the others, so only identical
     * calls will impact the user who is "next" in the rotation.
     * @param includeSubGroups if this parameter is true the selector will round-robin not only through the parameter group
     *                         but also through all its subgroups.
     * @param group may not be null
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserByRoundRobin(boolean includeSubGroups, entity.Group group) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserByRoundRobin(includeSubGroups, group);
    }
    
    /**
     * Uses the supplied dynamic assignment strategy implementation to find an assignment for the current entity. See
     * {@link gw.api.assignment.DynamicUserAssignmentStrategy} for more details on what that implementation should look like and how it
     * is used by the implementation of this method.
     * @param dynamicUserAssignmentStrategy the {@link gw.api.assignment.DynamicUserAssignmentStrategy} to be used to do the assignment
     * @param group The group to be used during the assignment (usually the group to which the entity is or should be assigned)
     * @param includeSubGroups Whether the subgroups of the supplied group should also be considered
     * @return true if the assignment is successful, false otherwise
     */
    public boolean assignUserDynamically(gw.api.assignment.DynamicUserAssignmentStrategy dynamicUserAssignmentStrategy, entity.Group group, boolean includeSubGroups) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).assignUserDynamically(dynamicUserAssignmentStrategy, group, includeSubGroups);
    }
    
    /**
     * Invokes the Assignment Engine, which will process the configured Assignment Rules to come up with an assignment
     * for the current entity.
     * <p/>
     * May not be invoked from within an Assignment Rule, since the Assignment Engine may not be invoked recursively. If invoked
     * from within an Assigment Rule, an error will be logged and false will be returned.
     * @return true if an assignment has been found, false otherwise
     */
    public boolean autoAssign() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign();
    }
    
    /**
     * <p>
     * Invokes the Assignment Enging to assign the item to the specified group and user.
     * If userID is null, the item will be assigned using the group's assignment rules.
     * If userID is specified, assignment will be made directly to the group and
     * user.  If the engine cannot assign the item to the requested group/user,
     * it will throw an exception indicating the reason.
     * </p>
     * If a user is specified, caller is responsible for ensuring that the
     * user is a member of group.
     * </p>
     * Note that since this method invokes the Assignment Engine, it may not be called from within an Assignment rule.
     * @param group The group to which the item should be assigned - must be
     *              specified.  If not known, use autoAssign(item) instead.
     * @param user The user to which the item should be assigned; if null an
     *              appropriate user will be selected by group assignment rules.
     * @return true if the assignment is successufl, false otherwise
     */
    public boolean autoAssign(entity.Group group, entity.User user) {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).autoAssign(group, user);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * This method is only available inside the Assignment Engine. Request manual confirmation of the entity's current assignment by the specified user.
     * <p/>
     * If the specified user does not have the review assignment permission, then does nothing and returns false.
     * Otherwise, a review Activity will be created and assigned to the user for further processing.
     * @param responsibleUser The person who should confirm the assignment
     * @return true if responsibleUser has review assignment permission, false otherwise.
     */
    public boolean confirmManually(entity.User responsibleUser) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).confirmManually(responsibleUser);
    }
    
    /**
     * Request manual confirmation of the entity's current assignment, with the responsibility round-robined among members
     * of the given group.
     * <p/>
     * Only users in the specified group (not subgroups)  who have the review assignment permission will be considered. The
     * round-robin rotation used here is independent of the rotation used by the assignUserByRoundRobin() methods.
     * <p/>
     * If no user is found, does nothing and returns false. Otherwise, a review Activity will be created and assigned to the user for further processing.
     * @param group the group whose users should be considered in the round-robin rotation
     * @return true if a user was found to give the confirmation action to, false if no such user was found
     */
    public boolean confirmManuallyByRoundRobin(entity.Group group) {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).confirmManuallyByRoundRobin(group);
    }
    
    public void copyHistoryAndInstructionsToNewServiceRequest(entity.ServiceRequest destinationServiceRequest, java.util.Map<entity.ServiceRequestQuote, entity.ServiceRequestQuote> quotesMap) {
      ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).copyHistoryAndInstructionsToNewServiceRequest(destinationServiceRequest, quotesMap);
    }
    
    public void copyPreviousAssignments(entity.Assignable source) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).copyPreviousAssignments(source);
    }
    
    /**
     * Called after the assignable is assigned to create a new history event recording the assignment. May
     * return null for some assignable types, meaning that no history event was created
     * @param assignable the assignable containing details of the new assignment
     * @return the new history event, or null
     */
    public entity.History createAssignmentHistoryEvent(entity.Assignable assignable) {
      return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).createAssignmentHistoryEvent(assignable);
    }
    
    /**
     * Create a new assignment review activity which represents the responsibility to assign this
     * assignable. Assignment review activities are used for manual assignment.
     * @return a new assignment review activity which refers to this assignable
     */
    public entity.Activity createAssignmentReviewActivity() {
      return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).createAssignmentReviewActivity();
    }
    
    /**
     * Creates a AttributeBasedAssignmentCriteria instance, which is used to collect a set of user attributes on which to search for users.
     * The matchAll flag indicates whether each attribute must be satisfied (logical AND) or whether any attribute could
     * be satisfied (logical OR).
     * @return AttributeBasedAssignmentCriteria instance
     * @deprecated Use the constructor directly.  This method is no longer necessary, since a new AttributeBasedAssignmentCriteria entity can simply
     *             be created directly in Gosu and placed in the correct bundle.
     */
    public entity.AttributeBasedAssignmentCriteria createUserAttributes() {
      return ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).createUserAttributes();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    /**
     * Find any existing open assignment review activities related to this assignable. Normally this will
     * return either zero or one activities. Assignment review activities are used for manual assignment.
     * @return a query result containing the open assignment review activities, if any
     */
    public gw.api.database.IQueryResult<entity.Activity, entity.Activity> findAssignmentReviewActivities() {
      return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).findAssignmentReviewActivities();
    }
    
    public void finishAssignment() {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).finishAssignment();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateAssignmentEvents() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).generateAssignmentEvents();
    }
    
    public java.util.List generateInsertEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateInsertEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List generateRemoveEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateRemoveEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List generateUpdateEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).generateUpdateEvents();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the Activities field.
     * The activities associated with this service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Activity[] getActivities() {
      return (entity.Activity[])__getInternalInterface().getFieldValue(ACTIVITIES_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedByUser field.
     * User who assigned this entity.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getAssignedByUser() {
      return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDBYUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedByUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDBYUSER_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedGroup field.
     * Group to which this entity is assigned; null if none assigned
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getAssignedGroup() {
      return (entity.Group)__getInternalInterface().getFieldValue(ASSIGNEDGROUP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedGroupID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDGROUP_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedQueue field.
     * Either the Queue to which this entity is assigned (if AssignmentStatus is 'assigned'), the Queue to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AssignableQueue getAssignedQueue() {
      return (entity.AssignableQueue)__getInternalInterface().getFieldValue(ASSIGNEDQUEUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedQueueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDQUEUE_PROP.get());
    }
    
    /**
     * Gets the value of the AssignedUser field.
     * Either the User to which this entity is assigned (if AssignmentStatus is 'assigned'), the User to which the system suggests assignment (if AssignmentStatus is 'manual'), or null if none assigned. Only one of AssignedUserID or AssignedQueueID should be non null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getAssignedUser() {
      return (entity.User)__getInternalInterface().getFieldValue(ASSIGNEDUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAssignedUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ASSIGNEDUSER_PROP.get());
    }
    
    /**
     * Returns a string describing the current assignee plus their group,
     * suitable for display to the user. This can be quite a long string,
     * for example "Andy Applegate (Auto1 - TeamA)". See also
     * {@link #getAssigneeDisplayString()} which omits the group name and
     * may be more appropriate if space is tight.
     * @return If the assignable is assigned to a user or queue, returns the
     * name of the user or queue plus their group (for example
     * "Andy Applegate (Auto1 - TeamA)"). If assignment is pending, returns
     * a simple string (for example "pending assignment"). If the assignable
     * is completely unassigned returns the empty string.
     */
    public java.lang.String getAssigneeAndGroupDisplayString() {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getAssigneeAndGroupDisplayString();
    }
    
    /**
     * Returns a string describing the current assignee, suitable for display
     * to the user. See also {@link #getAssigneeAndGroupDisplayString()}, which
     * returns a more detailed description of the assignee.
     * @return If the assignable is assigned to a user or queue, returns the
     * name of the user or queue (for example "Andy Applegate"). If assignment
     * is pending, returns a simple string (for example "pending assignment").
     * If the assignable is completely unassigned returns the empty string.
     */
    public java.lang.String getAssigneeDisplayString() {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getAssigneeDisplayString();
    }
    
    /**
     * Returns a string describing only the group of the current assignee,
     * suitable for display to the user. See also {@link #getAssigneeAndGroupDisplayString()},
     *  which returns a more detailed description of the assignee.
     * @return If the assignable is assigned to a user, returns the name of the
     * user's group (for example "Auto1 - TeamA"). If assignment is pending, returns
     * a simple string (for example "pending assignment"). If the assignable
     * is completely unassigned returns the empty string.
     */
    public java.lang.String getAssigneeGroupOnlyDisplayString() {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getAssigneeGroupOnlyDisplayString();
    }
    
    /**
     * Gets the value of the AssignmentDate field.
     * Time when entity last assigned
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAssignmentDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ASSIGNMENTDATE_PROP.get());
    }
    
    /**
     * Gets the value of the AssignmentStatus field.
     * Typelist describing assignment status.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AssignmentStatus getAssignmentStatus() {
      return (typekey.AssignmentStatus)__getInternalInterface().getFieldValue(ASSIGNMENTSTATUS_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CanceledReason field.
     * The reason the service request was canceled
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCanceledReason() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CANCELEDREASON_PROP.get());
    }
    
    /**
     * Returns the child objects of the current assignable to which the new assigment should maybe be
     * cascaded. shouldCascadeAssignment will be called on each child before actually doing the cascade
     * @return child objects to which the new assignment should potentially be cascaded
     */
    public java.util.List<gw.api.assignment.CCAssignableMethods> getChildrenForCascadeAssignment() {
      return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).getChildrenForCascadeAssignment();
    }
    
    /**
     * Gets the value of the Claim field.
     * The related claim.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Claim getClaim() {
      return (entity.Claim)__getInternalInterface().getFieldValue(CLAIM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getClaimID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CLAIM_PROP.get());
    }
    
    /**
     * Gets the value of the CloseDate field.
     * Date and time when this entity was closed. (Not applicable to all assignable entities)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCloseDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CLOSEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the Currency field.
     * The currency of this service request, which is used for its quotes, invoices, and checks.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCurrency() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CURRENCY_PROP.get());
    }
    
    /**
     * This method exists to support the notion of "secondary" assignment in the Assignment Rules. "Secondary" assignments
     * generally represented by UserRoleAssignment entities, are assignments of "roles" to users, separated from the single
     * "primary" owner of the entity.
     * <p/>
     * It is generally desirable for Assignment rule writers to be able to re-use a single set of, say, Claim Assignment rules
     * for both primary and secondary assignments. This method allows rules to be written in the form of
     * <code>Claim.CurrentAssignment.assignXXX()</code> rather than <code>Claim.assignXXX()</code>. If the primary
     * assignment is being performed, then getCurrentAssignment() will return the entity itself (in this case, the Claim).
     * If a secondary assignment is being performed, then getCurrentAssignment() will return the UserRoleAssignment which
     * is current being operated upon.
     * <p/>
     * Obviously, if an entity does not support secondary assignment (i.e. does not implement the UserRoleOwner interface),
     * then rules do not need to use this method. Secondary assignments done outside of the Assignment Rules can simplay
     * call the assignXXX methods directly on the UserRoleAssignment entity themselves, and therefore also do not require
     * this method.
     * <p/>
     * Since this method is dependent on the Assignment Engine state, calling it outside of the Assignment Rules is illegal.
     * @return the CCAssignable entity being operated on by the Assignment Engine. May be either the current entity or
     *         a UserRoleAssignment entity relating to the current entity.
     */
    public entity.CCAssignable getCurrentAssignment() {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getCurrentAssignment();
    }
    
    /**
     * Gets the value of the DocumentLinks field.
     * The link information for documents associated with this service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestDocumentLink[] getDocumentLinks() {
      return (entity.ServiceRequestDocumentLink[])__getInternalInterface().getFieldValue(DOCUMENTLINKS_PROP.get());
    }
    
    /**
     * Return the list of documents linked to the service request
     * @return list of documents linked to the service request
     */
    public java.util.Collection<entity.Document> getDocuments() {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getDocuments();
    }
    
    public com.guidewire.pl.system.entity.BeanEvent[] getEvents() {
      return ((com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods")).getEvents();
    }
    
    /**
     * Gets the value of the ExpectedQuoteCompletionDate field.
     * Date by which the specialist expects to submit the quote, or null if the specialist has not indicated such a date.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpectedQuoteCompletionDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EXPECTEDQUOTECOMPLETIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ExpectedServiceCompletionDate field.
     * Date by which the specialist expects to complete the work, or null if the specialist has not indicated such a date.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpectedServiceCompletionDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EXPECTEDSERVICECOMPLETIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Exposure field.
     * The exposure that led to the work requested by this service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Exposure getExposure() {
      return (entity.Exposure)__getInternalInterface().getFieldValue(EXPOSURE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getExposureID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(EXPOSURE_PROP.get());
    }
    
    public java.util.List<com.guidewire.pl.domain.assignment.impl.AssignmentStateHelper> getGroupAssignmentStateHelpers() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).getGroupAssignmentStateHelpers();
    }
    
    /**
     * Gets the value of the History field.
     * The changes that have been applied to this service request, which together comprise its history.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestChange[] getHistory() {
      return (entity.ServiceRequestChange[])__getInternalInterface().getFieldValue(HISTORY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the Incident field.
     * The incident that led to the work requested by this service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Incident getIncident() {
      return (entity.Incident)__getInternalInterface().getFieldValue(INCIDENT_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getIncidentID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(INCIDENT_PROP.get());
    }
    
    /**
     * Gets the value of the Instruction field.
     * The active instruction associated with this service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestInstruction getInstruction() {
      return (entity.ServiceRequestInstruction)__getInternalInterface().getFieldValue(INSTRUCTION_PROP.get());
    }
    
    /**
     * Gets the value of the InstructionHistory field.
     * All instructions that have been created for this service request, including instructions that are no longer active.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestInstruction[] getInstructionHistory() {
      return (entity.ServiceRequestInstruction[])__getInternalInterface().getFieldValue(INSTRUCTIONHISTORY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getInstructionID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(INSTRUCTION_PROP.get());
    }
    
    /**
     * Gets the value of the Invoices field.
     * The Invoices associated with this service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestInvoice[] getInvoices() {
      return (entity.ServiceRequestInvoice[])__getInternalInterface().getFieldValue(INVOICES_PROP.get());
    }
    
    /**
     * Gets the value of the Kind field.
     * The kind for this service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ServiceRequestKind getKind() {
      return (typekey.ServiceRequestKind)__getInternalInterface().getFieldValue(KIND_PROP.get());
    }
    
    /**
     * Gets the ServiceRequestChange recording the last change made to the ServiceRequest.
     * @return ServiceRequestChange corresponding to the latest change
     */
    public entity.ServiceRequestChange getLatestChange() {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getLatestChange();
    }
    
    /**
     * Gets the value of the LatestChangeTimestampDenorm field.
     * The timestamp of the latest ServiceRequestChange in the History. This value is denormalized here for ease of ordering ServiceRequests in queries. This is non-nullable because History cannot be empty.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLatestChangeTimestampDenorm() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LATESTCHANGETIMESTAMPDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the LatestQuote field.
     * The latest quote associated with this service request. It is null if no quote has been added to the service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestQuote getLatestQuote() {
      return (entity.ServiceRequestQuote)__getInternalInterface().getFieldValue(LATESTQUOTE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getLatestQuoteID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(LATESTQUOTE_PROP.get());
    }
    
    /**
     * Return the ServiceRequestDocumentLink on this ServiceRequest that links to the given Document.
     * @param document to match
     * @return the matching ServiceRequestDocumentLink
     */
    public entity.ServiceRequestDocumentLink getMatchingServiceRequestDocumentLink(entity.Document document) {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getMatchingServiceRequestDocumentLink(document);
    }
    
    /**
     * Gets the value of the Messages field.
     * Messages related to this service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestMessage[] getMessages() {
      return (entity.ServiceRequestMessage[])__getInternalInterface().getFieldValue(MESSAGES_PROP.get());
    }
    
    /**
     * Gets the value of the Notes field.
     * The notes associated with this service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Note[] getNotes() {
      return (entity.Note[])__getInternalInterface().getFieldValue(NOTES_PROP.get());
    }
    
    /**
     * Gets the history of ServiceRequestChanges, ordered by ServiceRequestChange.Sequence, ascending.
     * @return the ServiceRequestChanges for this ServiceRequest, in order
     */
    public java.util.List<entity.ServiceRequestChange> getOrderedHistory() {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getOrderedHistory();
    }
    
    /**
     * Gets the value of the OriginatingServiceRequest field.
     * The originating quote-only service request for this service request. Note: This will be non-null only when a quote-only service request is promoted to a quote and service service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequest getOriginatingServiceRequest() {
      return (entity.ServiceRequest)__getInternalInterface().getFieldValue(ORIGINATINGSERVICEREQUEST_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getOriginatingServiceRequestID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(ORIGINATINGSERVICEREQUEST_PROP.get());
    }
    
    /**
     * Called by the "assignToClaimOwner" method to determine which assignable "owns" the current assignable
     * so the owners assignment information can be copied. The owner is nearly always just the claim though
     * there is a special case - if an activity belongs to an exposure then the exposure is the owner. If
     * this method return null the assignToClaimOwner call will return false.
     * @return the owning assignable, usually the claim
     */
    public entity.Assignable getOwningAssignable() {
      return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).getOwningAssignable();
    }
    
    /**
     * The claim that owns this assignable. If this property returns null then this assignable cannot be
     * manually assigned (because no assignment review activity can be created), cannot be assigned using
     * the "assignToClaimOwner" method and will not create history events when assigned.
     * @return the claim
     */
    public entity.Claim getOwningClaim() {
      return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).getOwningClaim();
    }
    
    public gw.internal.ext.org.apache.commons.collections.BidiMap getPreviousAssignments() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).getPreviousAssignments();
    }
    
    /**
     * Gets the value of the PreviousGroup field.
     * Group to which this entity was previously assigned.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Group getPreviousGroup() {
      return (entity.Group)__getInternalInterface().getFieldValue(PREVIOUSGROUP_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPreviousGroupID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PREVIOUSGROUP_PROP.get());
    }
    
    /**
     * Gets the value of the PreviousQueue field.
     * Queue to which this entity was previously assigned.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AssignableQueue getPreviousQueue() {
      return (entity.AssignableQueue)__getInternalInterface().getFieldValue(PREVIOUSQUEUE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPreviousQueueID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PREVIOUSQUEUE_PROP.get());
    }
    
    /**
     * Gets the value of the PreviousUser field.
     * User to which this entity was previously assigned.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getPreviousUser() {
      return (entity.User)__getInternalInterface().getFieldValue(PREVIOUSUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPreviousUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PREVIOUSUSER_PROP.get());
    }
    
    /**
     * Gets the value of the Progress field.
     * This service request's current place in its life cycle.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ServiceRequestProgress getProgress() {
      return (typekey.ServiceRequestProgress)__getInternalInterface().getFieldValue(PROGRESS_PROP.get());
    }
    
    /**
     * Gets the Service Requests for which OriginatingServiceRequest is equal to this ServiceRequest
     * @return the ServiceRequests that are generated as the result of promoting this ServiceRequest
     */
    public java.util.List<entity.ServiceRequest> getPromotionServiceRequests() {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getPromotionServiceRequests();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the QuoteStatus field.
     * The current quote status for this service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ServiceRequestQuoteStatus getQuoteStatus() {
      return (typekey.ServiceRequestQuoteStatus)__getInternalInterface().getFieldValue(QUOTESTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the Quotes field.
     * The Quotes associated with this service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestQuote[] getQuotes() {
      return (entity.ServiceRequestQuote[])__getInternalInterface().getFieldValue(QUOTES_PROP.get());
    }
    
    /**
     * Gets the value of the RequestedQuoteCompletionDate field.
     * Desired date by which the specialist will have submitted the quote, or null if the specialist has not indicated such a date.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getRequestedQuoteCompletionDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REQUESTEDQUOTECOMPLETIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the RequestedServiceCompletionDate field.
     * Desired date by which the specialist will have completed the work, or null if the specialist has not indicated such a date.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getRequestedServiceCompletionDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REQUESTEDSERVICECOMPLETIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ServiceRequestMetrics field.
     * Metrics related to this service request
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestMetric[] getServiceRequestMetrics() {
      return (entity.ServiceRequestMetric[])__getInternalInterface().getFieldValue(SERVICEREQUESTMETRICS_PROP.get());
    }
    
    /**
     * Array association for partition ServiceRequestMetricsBySubtype on array ServiceRequestMetrics
     */
    public entity.ServiceRequestMetric getServiceRequestMetricsBySubtype(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.ServiceRequestMetric)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the ServiceRequestNumber field.
     * A globally-unique, user-readable identifier for this service request. This number is normally generated within ClaimCenter.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getServiceRequestNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERVICEREQUESTNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the ServiceRequestPromotionArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestPromotion[] getServiceRequestPromotionArray() {
      return (entity.ServiceRequestPromotion[])__getInternalInterface().getFieldValue(SERVICEREQUESTPROMOTIONARRAY_PROP.get());
    }
    
    /**
     * Gets the value of the ServiceRequestPromotions field.
     * Array of ServiceRequestPromotions linking this ServiceRequest to other ServiceRequests to which this was promoted.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ServiceRequestPromotion[] getServiceRequestPromotions() {
      return (entity.ServiceRequestPromotion[])__getInternalInterface().getFieldValue(SERVICEREQUESTPROMOTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the ServiceRequestReferenceNumber field.
     * A string identifier assigned to this ServiceRequest by the specialist. The value of this field may only be meaningful to the specialist.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getServiceRequestReferenceNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(SERVICEREQUESTREFERENCENUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the ServreqactinstArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Servreqactinst[] getServreqactinstArray() {
      return (entity.Servreqactinst[])__getInternalInterface().getFieldValue(SERVREQACTINSTARRAY_PROP.get());
    }
    
    /**
     * Gets the value of the ServreqltstqteArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Servreqltstqte[] getServreqltstqteArray() {
      return (entity.Servreqltstqte[])__getInternalInterface().getFieldValue(SERVREQLTSTQTEARRAY_PROP.get());
    }
    
    /**
     * Gets the short display name for the ServiceRequest defined in the entity name
     */
    public java.lang.String getShortDisplayName() {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).getShortDisplayName();
    }
    
    /**
     * Gets the value of the Specialist field.
     * The vendor or internal entity selected to do the work requested by this service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Contact getSpecialist() {
      return (entity.Contact)__getInternalInterface().getFieldValue(SPECIALIST_PROP.get());
    }
    
    /**
     * Gets the value of the SpecialistCommMethod field.
     * The channel through which the carrier will communicate with the specialist.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.SpecialistCommMethod getSpecialistCommMethod() {
      return (typekey.SpecialistCommMethod)__getInternalInterface().getFieldValue(SPECIALISTCOMMMETHOD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getSpecialistID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(SPECIALIST_PROP.get());
    }
    
    /**
     * Returns the suggested assignees for this entity, to be displayed in the
     * UI as the most likely assignees when the user is assigning the entity. The list of assignees
     * will depend on the type of entity, and will contain users who are somehow "involved" with the entity,
     * associated claim, or currently assigned user and group.
     * @return the list of suggested assignees, never null or empty
     */
    public gw.api.assignment.Assignee[] getSuggestedAssignees() {
      return ((gw.cc.assignment.entity.CCAssignable)__getDelegateManager().getImplementation("gw.cc.assignment.entity.CCAssignable")).getSuggestedAssignees();
    }
    
    /**
     * Gets the value of the Tier field.
     * The tier of this service request.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ServiceRequestTier getTier() {
      return (typekey.ServiceRequestTier)__getInternalInterface().getFieldValue(TIER_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    public java.util.List<com.guidewire.pl.domain.assignment.impl.AssignmentStateHelper> getUserAssignmentStateHelpers() {
      return ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).getUserAssignmentStateHelpers();
    }
    
    /**
     * Gets the validation result.
     * @return The validation result.
     */
    public gw.api.validation.ValidationResult getValidationResult() {
      return ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).getValidationResult();
    }
    
    public void handleAssignmentCommit() {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).handleAssignmentCommit();
    }
    
    public void handleAssignmentRollback() {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).handleAssignmentRollback();
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public boolean isAssignedToUser(gw.pl.persistence.core.Key userId) {
      return ((com.guidewire.pl.system.entity.PermissionAssignableCheck)__getDelegateManager().getImplementation("com.guidewire.pl.system.entity.PermissionAssignableCheck")).isAssignedToUser(userId);
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Link the document to the Service Request using the ServiceRequestDocumentLink join array. The document will
     * not be visible to the specialist.
     * @param document to link to the service request; it need not be in the ServiceRequest's bundle
     * @return the ServiceRequestDocumentLink that forms the link
     */
    public entity.ServiceRequestDocumentLink linkDocument(entity.Document document) {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).linkDocument(document);
    }
    
    /**
     * Link the document to the Service Request using the ServiceRequestDocumentLink join array. The
     * <code>visibleToSpecialist</code argument determines whether the document will be visible to the specialist.
     * @param document to link to the service request; it need not be in the ServiceRequest's bundle
     * @param visibleToSpecialist whether the specialist should have access to the document
     */
    public entity.ServiceRequestDocumentLink linkDocument(entity.Document document, boolean visibleToSpecialist) {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).linkDocument(document, visibleToSpecialist);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void pushAssignmentPopup(java.util.List<gw.api.assignment.CCAssignableMethods> assignables) {
      ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).pushAssignmentPopup(assignables);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Sets up sequence and other basic fields on newChange, then adds it to the ServiceRequest, setting it as
     * the latest change. Caller should create a new instance, set the "New"/"Chg" and description fields on it as
     * desired, then pass it to this method. Caller is responsible for ensuring that the "New"/"Chg" fields follow the
     * conventions for these fields, as described in the comments and descriptions for those datamodel fields.
     * In most cases, {@link #recordChange(String, ServiceRequestOperation, entity.ServiceRequestStatement, Contact)} should be used instead of this method,
     * since it creates the ServiceRequestChange and automatically populates it with the ServiceRequest's changes since
     * the previous service request change.
     * @param newChange the ServiceRequestChange to record on this ServiceRequest; must be in the same bundle as this ServiceRequest
     */
    public void recordChange(entity.ServiceRequestChange newChange) {
      ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).recordChange(newChange);
    }
    
    /**
     * Creates a ServiceRequestChange based on the changes made to this ServiceRequest in the current bundle. This method looks
     * for property pairs on ServiceRequestChange that follow the "New"/"Chg" naming convention and populates them
     * based on the values from the ServiceRequest.
     * @param description a description of this change, to be recorded on the new ServiceRequestChange
     * @param operation the operation that this change is recording, if any
     * @param statement service request statement that is related to this change, if any
     * @param initiator the Contact that initiated the operation
     * @throws IllegalStateException if no fields have changed, and so no ServiceRequestChange can be recorded
     * @return the new ServiceRequestChange
     */
    public entity.ServiceRequestChange recordChange(java.lang.String description, typekey.ServiceRequestOperation operation, entity.ServiceRequestStatement statement, entity.Contact initiator) {
      return ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).recordChange(description, operation, statement, initiator);
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void reject(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).reject(errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectField(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectField(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Rejects a particular field or field path on the root bean.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectFieldWithFlowStep(strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     */
    public void rejectSubField(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubField(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason);
    }
    
    /**
     * Reject a particular field of field path on a bean related to the root
     * bean, e.g. an array element of the bean such as an Exposure of a Claim.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * Note that this is the fullest version of "reject"; all the others are
     * overloaded for easier use.
     * @param relatedBean Bean related to the root bean
     * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectSubFieldWithFlowStep(entity.KeyableBean relatedBean, java.lang.String strRelativeFieldPath, typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectSubFieldWithFlowStep(relatedBean, strRelativeFieldPath, errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    /**
     * Rejects the root bean w/ a global message
     * <p/>
     * Note the reason why the bean failed validation shouldn't refer to a particular
     * field in the entity. To do that, use the rejectField() method.
     * <p/>
     * Note you can indicate failure as both an error and a warning simultaneously.
     * However, if the failure is both an error and a warning, the failure should
     * have different error and warning levels.
     * <p/>
     * @param errorLevel The corresponding level effected by the validation error.
     * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
     * @param warningLevel The corresponding level effected by the validation warning.
     * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
     * @param flowStepId The process FlowStep that this error applies to, if any
     */
    public void rejectWithFlowStep(typekey.ValidationLevel errorLevel, java.lang.String strErrorReason, typekey.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId) {
      ((com.guidewire.pl.domain.validation.ValidatablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.ValidatablePublicMethods")).rejectWithFlowStep(errorLevel, strErrorReason, warningLevel, strWarningReason, flowStepId);
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the given element from the Activities array. This is achieved by marking the element for removal.
     */
    public void removeFromActivities(entity.Activity element) {
      __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Activities array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromActivities(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(ACTIVITIES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
     */
    public void removeFromDocumentLinks(entity.ServiceRequestDocumentLink element) {
      __getInternalInterface().removeArrayElement(DOCUMENTLINKS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the DocumentLinks array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromDocumentLinks(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(DOCUMENTLINKS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the History array. This is achieved by marking the element for removal.
     */
    public void removeFromHistory(entity.ServiceRequestChange element) {
      __getInternalInterface().removeArrayElement(HISTORY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the History array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromHistory(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(HISTORY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the InstructionHistory array. This is achieved by marking the element for removal.
     */
    public void removeFromInstructionHistory(entity.ServiceRequestInstruction element) {
      __getInternalInterface().removeArrayElement(INSTRUCTIONHISTORY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the InstructionHistory array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromInstructionHistory(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(INSTRUCTIONHISTORY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Invoices array. This is achieved by marking the element for removal.
     */
    public void removeFromInvoices(entity.ServiceRequestInvoice element) {
      __getInternalInterface().removeArrayElement(INVOICES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Invoices array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromInvoices(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(INVOICES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Messages array. This is achieved by marking the element for removal.
     */
    public void removeFromMessages(entity.ServiceRequestMessage element) {
      __getInternalInterface().removeArrayElement(MESSAGES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Messages array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromMessages(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(MESSAGES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Notes array. This is achieved by marking the element for removal.
     */
    public void removeFromNotes(entity.Note element) {
      __getInternalInterface().removeArrayElement(NOTES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Notes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromNotes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(NOTES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the Quotes array. This is achieved by marking the element for removal.
     */
    public void removeFromQuotes(entity.ServiceRequestQuote element) {
      __getInternalInterface().removeArrayElement(QUOTES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the Quotes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromQuotes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(QUOTES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ServiceRequestMetrics array. This is achieved by marking the element for removal.
     */
    public void removeFromServiceRequestMetrics(entity.ServiceRequestMetric element) {
      __getInternalInterface().removeArrayElement(SERVICEREQUESTMETRICS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ServiceRequestMetrics array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromServiceRequestMetrics(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SERVICEREQUESTMETRICS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ServiceRequestPromotionArray array. This is achieved by marking the element for removal.
     */
    public void removeFromServiceRequestPromotionArray(entity.ServiceRequestPromotion element) {
      __getInternalInterface().removeArrayElement(SERVICEREQUESTPROMOTIONARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ServiceRequestPromotionArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromServiceRequestPromotionArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SERVICEREQUESTPROMOTIONARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ServiceRequestPromotions array. This is achieved by marking the element for removal.
     */
    public void removeFromServiceRequestPromotions(entity.ServiceRequestPromotion element) {
      __getInternalInterface().removeArrayElement(SERVICEREQUESTPROMOTIONS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ServiceRequestPromotions array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromServiceRequestPromotions(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SERVICEREQUESTPROMOTIONS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ServreqactinstArray array. This is achieved by marking the element for removal.
     */
    public void removeFromServreqactinstArray(entity.Servreqactinst element) {
      __getInternalInterface().removeArrayElement(SERVREQACTINSTARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ServreqactinstArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromServreqactinstArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SERVREQACTINSTARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ServreqltstqteArray array. This is achieved by marking the element for removal.
     */
    public void removeFromServreqltstqteArray(entity.Servreqltstqte element) {
      __getInternalInterface().removeArrayElement(SERVREQLTSTQTEARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ServreqltstqteArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromServreqltstqteArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(SERVREQLTSTQTEARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Activities field.
     */
    public void setActivities(entity.Activity[] value) {
      __getInternalInterface().setFieldValue(ACTIVITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignedByUser field.
     */
    public void setAssignedByUser(entity.User value) {
      __getInternalInterface().setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
    }
    
    public void setAssignedByUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(ASSIGNEDBYUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignedGroup field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedGroup(entity.Group value) {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedGroup(value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedGroupID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).setAssignedGroupID(value);
    }
    
    /**
     * Sets the value of the AssignedQueue field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedQueue(entity.AssignableQueue value) {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedQueue(value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedQueueID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).setAssignedQueueID(value);
    }
    
    /**
     * Sets the value of the AssignedUser field.
     * @param value 
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedUser(entity.User value) {
      ((com.guidewire.pl.domain.assignment.AssignablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.AssignablePublicMethods")).setAssignedUser(value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setAssignedUserID(gw.pl.persistence.core.Key value) {
      ((com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods")).setAssignedUserID(value);
    }
    
    /**
     * Sets the value of the AssignmentDate field.
     */
    public void setAssignmentDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ASSIGNMENTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AssignmentStatus field.
     */
    public void setAssignmentStatus(typekey.AssignmentStatus value) {
      __getInternalInterface().setFieldValue(ASSIGNMENTSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CanceledReason field.
     */
    public void setCanceledReason(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CANCELEDREASON_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Claim field.
     */
    public void setClaim(entity.Claim value) {
      __getInternalInterface().setFieldValue(CLAIM_PROP.get(), value);
    }
    
    public void setClaimID(gw.pl.persistence.core.Key value) {
      setFieldValue(CLAIM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CloseDate field.
     */
    public void setCloseDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CLOSEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Currency field.
     */
    public void setCurrency(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CURRENCY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DocumentLinks field.
     */
    public void setDocumentLinks(entity.ServiceRequestDocumentLink[] value) {
      __getInternalInterface().setFieldValue(DOCUMENTLINKS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpectedQuoteCompletionDate field.
     */
    public void setExpectedQuoteCompletionDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPECTEDQUOTECOMPLETIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpectedServiceCompletionDate field.
     */
    public void setExpectedServiceCompletionDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPECTEDSERVICECOMPLETIONDATE_PROP.get(), value);
    }
    
    /**
     * OOTB, adds the service request specialist and customer contact to the claim in the specialist and participant
     * roles, respectively.  Also sets incident-specific roles if the specialist and incident are the
     * appropriate types and the implementation is configured to do so.
     * 
     * This method is called when the FNOL Wizard finishes, but before the Claim Snapshot is created as well as
     * in ServiceRequest.finishSetup().
     */
    public void setExpectedServiceRequestRoles() {
      ((gw.api.vendormanagement.ServiceRequestContactMethods)__getDelegateManager().getImplementation("gw.api.vendormanagement.ServiceRequestContactMethods")).setExpectedServiceRequestRoles();
    }
    
    /**
     * Sets the value of the Exposure field.
     */
    public void setExposure(entity.Exposure value) {
      __getInternalInterface().setFieldValue(EXPOSURE_PROP.get(), value);
    }
    
    public void setExposureID(gw.pl.persistence.core.Key value) {
      setFieldValue(EXPOSURE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the History field.
     */
    public void setHistory(entity.ServiceRequestChange[] value) {
      __getInternalInterface().setFieldValue(HISTORY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Incident field.
     */
    public void setIncident(entity.Incident value) {
      __getInternalInterface().setFieldValue(INCIDENT_PROP.get(), value);
    }
    
    public void setIncidentID(gw.pl.persistence.core.Key value) {
      setFieldValue(INCIDENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Instruction field.
     */
    public void setInstruction(entity.ServiceRequestInstruction value) {
      __getInternalInterface().setFieldValue(INSTRUCTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InstructionHistory field.
     */
    public void setInstructionHistory(entity.ServiceRequestInstruction[] value) {
      __getInternalInterface().setFieldValue(INSTRUCTIONHISTORY_PROP.get(), value);
    }
    
    public void setInstructionID(gw.pl.persistence.core.Key value) {
      setFieldValue(INSTRUCTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Invoices field.
     */
    public void setInvoices(entity.ServiceRequestInvoice[] value) {
      __getInternalInterface().setFieldValue(INVOICES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Kind field.
     */
    public void setKind(typekey.ServiceRequestKind value) {
      __getInternalInterface().setFieldValue(KIND_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LatestChangeTimestampDenorm field.
     */
    public void setLatestChangeTimestampDenorm(java.util.Date value) {
      __getInternalInterface().setFieldValue(LATESTCHANGETIMESTAMPDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LatestQuote field.
     */
    public void setLatestQuote(entity.ServiceRequestQuote value) {
      __getInternalInterface().setFieldValue(LATESTQUOTE_PROP.get(), value);
    }
    
    public void setLatestQuoteID(gw.pl.persistence.core.Key value) {
      setFieldValue(LATESTQUOTE_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Messages field.
     */
    public void setMessages(entity.ServiceRequestMessage[] value) {
      __getInternalInterface().setFieldValue(MESSAGES_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the Notes field.
     */
    public void setNotes(entity.Note[] value) {
      __getInternalInterface().setFieldValue(NOTES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OriginatingServiceRequest field.
     */
    public void setOriginatingServiceRequest(entity.ServiceRequest value) {
      __getInternalInterface().setFieldValue(ORIGINATINGSERVICEREQUEST_PROP.get(), value);
    }
    
    public void setOriginatingServiceRequestID(gw.pl.persistence.core.Key value) {
      setFieldValue(ORIGINATINGSERVICEREQUEST_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreviousGroup field.
     */
    public void setPreviousGroup(entity.Group value) {
      __getInternalInterface().setFieldValue(PREVIOUSGROUP_PROP.get(), value);
    }
    
    public void setPreviousGroupID(gw.pl.persistence.core.Key value) {
      setFieldValue(PREVIOUSGROUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreviousQueue field.
     */
    public void setPreviousQueue(entity.AssignableQueue value) {
      __getInternalInterface().setFieldValue(PREVIOUSQUEUE_PROP.get(), value);
    }
    
    public void setPreviousQueueID(gw.pl.persistence.core.Key value) {
      setFieldValue(PREVIOUSQUEUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PreviousUser field.
     */
    public void setPreviousUser(entity.User value) {
      __getInternalInterface().setFieldValue(PREVIOUSUSER_PROP.get(), value);
    }
    
    public void setPreviousUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(PREVIOUSUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Progress field.
     */
    public void setProgress(typekey.ServiceRequestProgress value) {
      __getInternalInterface().setFieldValue(PROGRESS_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the QuoteStatus field.
     */
    public void setQuoteStatus(typekey.ServiceRequestQuoteStatus value) {
      __getInternalInterface().setFieldValue(QUOTESTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Quotes field.
     */
    public void setQuotes(entity.ServiceRequestQuote[] value) {
      __getInternalInterface().setFieldValue(QUOTES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RequestedQuoteCompletionDate field.
     */
    public void setRequestedQuoteCompletionDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(REQUESTEDQUOTECOMPLETIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RequestedServiceCompletionDate field.
     */
    public void setRequestedServiceCompletionDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(REQUESTEDSERVICECOMPLETIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ServiceRequestMetrics field.
     */
    public void setServiceRequestMetrics(entity.ServiceRequestMetric[] value) {
      __getInternalInterface().setFieldValue(SERVICEREQUESTMETRICS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ServiceRequestNumber field.
     */
    public void setServiceRequestNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SERVICEREQUESTNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ServiceRequestPromotionArray field.
     */
    public void setServiceRequestPromotionArray(entity.ServiceRequestPromotion[] value) {
      __getInternalInterface().setFieldValue(SERVICEREQUESTPROMOTIONARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ServiceRequestPromotions field.
     */
    public void setServiceRequestPromotions(entity.ServiceRequestPromotion[] value) {
      __getInternalInterface().setFieldValue(SERVICEREQUESTPROMOTIONS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ServiceRequestReferenceNumber field.
     */
    public void setServiceRequestReferenceNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(SERVICEREQUESTREFERENCENUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ServreqactinstArray field.
     */
    public void setServreqactinstArray(entity.Servreqactinst[] value) {
      __getInternalInterface().setFieldValue(SERVREQACTINSTARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ServreqltstqteArray field.
     */
    public void setServreqltstqteArray(entity.Servreqltstqte[] value) {
      __getInternalInterface().setFieldValue(SERVREQLTSTQTEARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Specialist field.
     */
    public void setSpecialist(entity.Contact value) {
      __getInternalInterface().setFieldValue(SPECIALIST_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SpecialistCommMethod field.
     */
    public void setSpecialistCommMethod(typekey.SpecialistCommMethod value) {
      __getInternalInterface().setFieldValue(SPECIALISTCOMMMETHOD_PROP.get(), value);
    }
    
    public void setSpecialistID(gw.pl.persistence.core.Key value) {
      setFieldValue(SPECIALIST_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Tier field.
     */
    public void setTier(typekey.ServiceRequestTier value) {
      __getInternalInterface().setFieldValue(TIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setValidationResult(gw.api.validation.ValidationResult result) {
      ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).setValidationResult(result);
    }
    
    /**
     * Called on an assignable to decide if the assignment on the parent assignable should be cascaded
     * to this assignable.
     * @param parent the parent assignable
     * @param defaultOwnerUserId the id of the special default owner user, used by the assignment engine
     *   as the user of last resort if, for example, assignment rules can't find an appropriate user.
     * @param defaultGroupId the id of the root group, used by the assignment engine as the group of last
     *   resort if, for example, assignment rules can't find an appropriate group.
     * @return true if the assignment should be cascaded, false otherwise
     */
    public boolean shouldCascadeAssignment(entity.Assignable parent, gw.pl.persistence.core.Key defaultOwnerUserId, gw.pl.persistence.core.Key defaultGroupId) {
      return ((gw.api.assignment.CCAssignableMethods)__getDelegateManager().getImplementation("gw.api.assignment.CCAssignableMethods")).shouldCascadeAssignment(parent, defaultOwnerUserId, defaultGroupId);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    /**
     * Unlink the document from the Service Request by removing the entry in the ServiceRequestDocumentLink join array
     * @param document to unlink from service request; it need not be in the ServiceRequest's bundle
     * @throws IllegalArgumentException if the specified document is
     */
    public void unlinkDocument(entity.Document document) {
      ((gw.cc.vendormanagement.entity.ServiceRequest)__getDelegateManager().getImplementation("gw.cc.vendormanagement.entity.ServiceRequest")).unlinkDocument(document);
    }
    
    public gw.api.validation.ValidationResult validate() {
      return ((com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods")).validate();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.cc.domain.vendormanagement.impl.ServiceRequestInternal", "com.guidewire.cc.domain.vendormanagement.impl.ServiceRequestImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.assignment.AssignablePublicMethods", "com.guidewire.cc.domain.vendormanagement.impl.ServiceRequestImpl");
    config.put("com.guidewire.pl.domain.assignment.impl.AssignableInternalMethods", "com.guidewire.cc.domain.vendormanagement.impl.ServiceRequestImpl");
    config.put("com.guidewire.pl.domain.messaging.EventAwarePublicMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.messaging.impl.EventAwareInternalMethods", "com.guidewire.pl.domain.messaging.impl.EventAwareImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.domain.validation.ValidatablePublicMethods", "com.guidewire.pl.domain.validation.impl.ValidatableImpl");
    config.put("com.guidewire.pl.domain.validation.impl.ValidatableInternalMethods", "com.guidewire.pl.domain.validation.impl.ValidatableImpl");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.entity.PermissionAssignableCheck", "com.guidewire.cc.domain.vendormanagement.impl.ServiceRequestImpl");
    config.put("gw.api.assignment.CCAssignableMethods", "gw.assignment.ServiceRequestAssignableMethodsImpl");
    config.put("gw.api.vendormanagement.ServiceRequestContactMethods", "gw.api.vendormanagement.ServiceRequestContactMethodsImpl");
    config.put("gw.cc.assignment.entity.CCAssignable", "com.guidewire.cc.domain.vendormanagement.impl.ServiceRequestImpl");
    config.put("gw.cc.vendormanagement.entity.ServiceRequest", "com.guidewire.cc.domain.vendormanagement.impl.ServiceRequestImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ServiceRequest.class, config);
    com.guidewire._generated.entity.ServiceRequestInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ServiceRequest, com.guidewire._generated.entity.ServiceRequestInternal>() {
      public java.lang.Object getImplementation(entity.ServiceRequest bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ServiceRequestInternal getInternalInterface(entity.ServiceRequest bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ServiceRequest newEmptyInstance() {
        return new entity.ServiceRequest((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}