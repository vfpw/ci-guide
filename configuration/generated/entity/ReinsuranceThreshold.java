package entity;

/**
 * ReinsuranceThreshold
 * 
 *         This reference table contains the information necessary to determine whether a claim has exceeded the
 *         reinsurance reportable threshold notification limit based upon the claim's policy type, coverage types and loss causes.
 *       
 *     
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ReinsuranceThreshold.eti;ReinsuranceThreshold.eix;ReinsuranceThreshold.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "ReinsuranceThreshold")
public class ReinsuranceThreshold extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ReinsuranceThreshold> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ReinsuranceThreshold>("entity.ReinsuranceThreshold");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> COVERAGETYPES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "CoverageTypes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ENDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EndDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOSSCAUSES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LossCauses");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LOSSTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LossType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> POLICYTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PolicyType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REPORTINGTHRESHOLD_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReportingThreshold");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STARTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StartDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> THRESHOLDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ThresholdValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TREATYTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TreatyType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.ReinsuranceThresholdInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public ReinsuranceThreshold()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public ReinsuranceThreshold(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected ReinsuranceThreshold(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.ReinsuranceThresholdInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.ReinsuranceThresholdInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the CoverageTypes array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverageTypes(entity.ReinsuranceCoverage element) {
    __getInternalInterface().addArrayElement(COVERAGETYPES_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the LossCauses array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLossCauses(entity.ReinsuranceLossCause element) {
    __getInternalInterface().addArrayElement(LOSSCAUSES_PROP.get(), element);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CoverageTypes field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ReinsuranceCoverage[] getCoverageTypes() {
    return (entity.ReinsuranceCoverage[])__getInternalInterface().getFieldValue(COVERAGETYPES_PROP.get());
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
   * Gets the value of the EndDate field.
   * End Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ENDDATE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
  }
  
  /**
   * Gets the value of the LossCauses field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ReinsuranceLossCause[] getLossCauses() {
    return (entity.ReinsuranceLossCause[])__getInternalInterface().getFieldValue(LOSSCAUSES_PROP.get());
  }
  
  /**
   * Gets the value of the LossType field.
   * Type of loss.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LossType getLossType() {
    return (typekey.LossType)__getInternalInterface().getFieldValue(LOSSTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyType field.
   * Type of policy.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyType getPolicyType() {
    return (typekey.PolicyType)__getInternalInterface().getFieldValue(POLICYTYPE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the ReportingThreshold field.
   * Reinsurance reporting threshold percentage for which a claim is marked reinsurance reportable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getReportingThreshold() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(REPORTINGTHRESHOLD_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the StartDate field.
   * Start Date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStartDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(STARTDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ThresholdValue field.
   * Reinsurance threshold value.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getThresholdValue() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(THRESHOLDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the TreatyType field.
   * Type of reinsurance treaty.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReinsuranceTreatyType getTreatyType() {
    return (typekey.ReinsuranceTreatyType)__getInternalInterface().getFieldValue(TREATYTYPE_PROP.get());
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
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Checks if this reinsurance threshold overlaps with another one of the same type. In general no two
   * items of the same type should overlap as we want to be able to look up just a single item when calculating
   * benefits.
   * @param other the other ReinsuranceThreshold
   * @return true if date ranges overlap, false otherwise
   */
  public boolean overlaps(entity.ReinsuranceThreshold other) {
    return ((gw.cc.claim.entity.ReinsuranceThreshold)__getDelegateManager().getImplementation("gw.cc.claim.entity.ReinsuranceThreshold")).overlaps(other);
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
   * Removes the given element from the CoverageTypes array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverageTypes(entity.ReinsuranceCoverage element) {
    __getInternalInterface().removeArrayElement(COVERAGETYPES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the CoverageTypes array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverageTypes(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(COVERAGETYPES_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the LossCauses array. This is achieved by marking the element for removal.
   */
  public void removeFromLossCauses(entity.ReinsuranceLossCause element) {
    __getInternalInterface().removeArrayElement(LOSSCAUSES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LossCauses array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLossCauses(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOSSCAUSES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CoverageTypes field.
   */
  public void setCoverageTypes(entity.ReinsuranceCoverage[] value) {
    __getInternalInterface().setFieldValue(COVERAGETYPES_PROP.get(), value);
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
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ENDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossCauses field.
   */
  public void setLossCauses(entity.ReinsuranceLossCause[] value) {
    __getInternalInterface().setFieldValue(LOSSCAUSES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LossType field.
   */
  public void setLossType(typekey.LossType value) {
    __getInternalInterface().setFieldValue(LOSSTYPE_PROP.get(), value);
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
   * Sets the value of the PolicyType field.
   */
  public void setPolicyType(typekey.PolicyType value) {
    __getInternalInterface().setFieldValue(POLICYTYPE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the ReportingThreshold field.
   */
  public void setReportingThreshold(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(REPORTINGTHRESHOLD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StartDate field.
   */
  public void setStartDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(STARTDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ThresholdValue field.
   */
  public void setThresholdValue(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(THRESHOLDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TreatyType field.
   */
  public void setTreatyType(typekey.ReinsuranceTreatyType value) {
    __getInternalInterface().setFieldValue(TREATYTYPE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.ReinsuranceThresholdInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.ReinsuranceThreshold.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the CoverageTypes array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToCoverageTypes(entity.ReinsuranceCoverage element) {
      __getInternalInterface().addArrayElement(COVERAGETYPES_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the LossCauses array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLossCauses(entity.ReinsuranceLossCause element) {
      __getInternalInterface().addArrayElement(LOSSCAUSES_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
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
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CoverageTypes field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ReinsuranceCoverage[] getCoverageTypes() {
      return (entity.ReinsuranceCoverage[])__getInternalInterface().getFieldValue(COVERAGETYPES_PROP.get());
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
    
    public com.guidewire.pl.system.util.DateRange getDateRange() {
      return ((com.guidewire.cc.domain.claim.impl.ReinsuranceThresholdInternal)__getDelegateManager().getImplementation("com.guidewire.cc.domain.claim.impl.ReinsuranceThresholdInternal")).getDateRange();
    }
    
    /**
     * Gets the value of the EndDate field.
     * End Date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEndDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ENDDATE_PROP.get());
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
     * Gets the value of the LoadCommandID field.
     * LoadCommand for load where row was created. If not null this object was loaded via the loader.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLoadCommandID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
    }
    
    /**
     * Gets the value of the LossCauses field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ReinsuranceLossCause[] getLossCauses() {
      return (entity.ReinsuranceLossCause[])__getInternalInterface().getFieldValue(LOSSCAUSES_PROP.get());
    }
    
    /**
     * Gets the value of the LossType field.
     * Type of loss.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.LossType getLossType() {
      return (typekey.LossType)__getInternalInterface().getFieldValue(LOSSTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyType field.
     * Type of policy.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PolicyType getPolicyType() {
      return (typekey.PolicyType)__getInternalInterface().getFieldValue(POLICYTYPE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the ReportingThreshold field.
     * Reinsurance reporting threshold percentage for which a claim is marked reinsurance reportable.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getReportingThreshold() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(REPORTINGTHRESHOLD_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the StartDate field.
     * Start Date
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getStartDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(STARTDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ThresholdValue field.
     * Reinsurance threshold value.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getThresholdValue() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(THRESHOLDVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the TreatyType field.
     * Type of reinsurance treaty.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ReinsuranceTreatyType getTreatyType() {
      return (typekey.ReinsuranceTreatyType)__getInternalInterface().getFieldValue(TREATYTYPE_PROP.get());
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
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Checks if this reinsurance threshold overlaps with another one of the same type. In general no two
     * items of the same type should overlap as we want to be able to look up just a single item when calculating
     * benefits.
     * @param other the other ReinsuranceThreshold
     * @return true if date ranges overlap, false otherwise
     */
    public boolean overlaps(entity.ReinsuranceThreshold other) {
      return ((gw.cc.claim.entity.ReinsuranceThreshold)__getDelegateManager().getImplementation("gw.cc.claim.entity.ReinsuranceThreshold")).overlaps(other);
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
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
     * Removes the given element from the CoverageTypes array. This is achieved by marking the element for removal.
     */
    public void removeFromCoverageTypes(entity.ReinsuranceCoverage element) {
      __getInternalInterface().removeArrayElement(COVERAGETYPES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the CoverageTypes array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromCoverageTypes(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(COVERAGETYPES_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the LossCauses array. This is achieved by marking the element for removal.
     */
    public void removeFromLossCauses(entity.ReinsuranceLossCause element) {
      __getInternalInterface().removeArrayElement(LOSSCAUSES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LossCauses array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLossCauses(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOSSCAUSES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CoverageTypes field.
     */
    public void setCoverageTypes(entity.ReinsuranceCoverage[] value) {
      __getInternalInterface().setFieldValue(COVERAGETYPES_PROP.get(), value);
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
     * Sets the value of the EndDate field.
     */
    public void setEndDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ENDDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossCauses field.
     */
    public void setLossCauses(entity.ReinsuranceLossCause[] value) {
      __getInternalInterface().setFieldValue(LOSSCAUSES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LossType field.
     */
    public void setLossType(typekey.LossType value) {
      __getInternalInterface().setFieldValue(LOSSTYPE_PROP.get(), value);
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
     * Sets the value of the PolicyType field.
     */
    public void setPolicyType(typekey.PolicyType value) {
      __getInternalInterface().setFieldValue(POLICYTYPE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReportingThreshold field.
     */
    public void setReportingThreshold(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(REPORTINGTHRESHOLD_PROP.get(), value);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StartDate field.
     */
    public void setStartDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(STARTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ThresholdValue field.
     */
    public void setThresholdValue(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(THRESHOLDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TreatyType field.
     */
    public void setTreatyType(typekey.ReinsuranceTreatyType value) {
      __getInternalInterface().setFieldValue(TREATYTYPE_PROP.get(), value);
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
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.cc.domain.claim.impl.ReinsuranceThresholdInternal", "com.guidewire.cc.domain.claim.impl.ReinsuranceThresholdImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.cc.claim.entity.ReinsuranceThreshold", "com.guidewire.cc.domain.claim.impl.ReinsuranceThresholdImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.ReinsuranceThreshold.class, config);
    com.guidewire._generated.entity.ReinsuranceThresholdInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.ReinsuranceThreshold, com.guidewire._generated.entity.ReinsuranceThresholdInternal>() {
      public java.lang.Object getImplementation(entity.ReinsuranceThreshold bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.ReinsuranceThresholdInternal getInternalInterface(entity.ReinsuranceThreshold bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.ReinsuranceThreshold newEmptyInstance() {
        return new entity.ReinsuranceThreshold((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}