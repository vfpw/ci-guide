package edge.aspects.validation.annotations

uses edge.metadata.annotation.IMetaFactory
uses edge.el.dto.ExpressionDTO
uses java.lang.IllegalStateException
uses edge.aspects.validation.dto.ValidationRuleDTO

class Ensure implements IMetaFactory {

  /** Condition which should hold true. */
  private var _that : ExpressionDTO as That

  /** Expression describing what is wrong. */
  private var _complaining : ExpressionDTO as Complaining

  construct() {}

  construct(t : ExpressionDTO, c : ExpressionDTO) {
    this._that = t
    this._complaining = c
  }

  override function getState(): Object {
    if (_that == null) {
      throw new IllegalStateException("Validation condition should be set.");
    }
    if (_complaining == null) {
      throw new IllegalStateException("Error message is not set to the validation rule.");
    }
    return new ValidationRuleDTO(_that, _complaining)
  }
}
