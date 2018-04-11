package edge.aspects.validation.annotations

uses edge.el.Expr
uses edge.metadata.annotation.IMetaFactory
uses edge.aspects.validation.dto.ValidationRuleDTO
uses edge.aspects.validation.ValidationFunctions
uses edge.aspects.validation.Validation

class Currency implements IMetaFactory {

  override function getState(): Object {
    return new ValidationRuleDTO(
        Expr.call(ValidationFunctions#isCurrency(Object), {Validation.VALUE}
        ),
            Expr.translate("Edge.Web.Api.Model.Currency", {})
    )
  }
}
