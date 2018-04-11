package edge.servlet.jsonrpc.marshalling.deserialization.dom

uses gw.api.util.Logger

uses java.math.BigDecimal
uses java.math.BigInteger
uses java.lang.Integer
uses java.lang.Long
uses java.lang.Float
uses java.lang.Double

/**
 * Representation of the json string.
 */
final class JsonStringValue extends JsonValue {
  private static final var LOGGER = Logger.forCategory(JsonStringValue.Type.QName)

  private var _v : String

  construct(v : String) {
    super("string")
    this._v = v
  }

  override public function asString(): String {
    return _v
  }

  override function asNativeValue(): Object {
    return _v
  }

  override public function asBigDecimal() : BigDecimal {
    LOGGER.warn("Implicit conversion from string to number")
    return new BigDecimal(_v)
  }


  override public function asBigInteger() : BigInteger {
    LOGGER.warn("Implicit conversion from string to number")
    return new BigInteger(_v)
  }

  override function asInt() : int {
    LOGGER.warn("Implicit conversion from string to number")
    return Integer.parseInt(_v)
  }

  public function asLong() : long {
    LOGGER.warn("Implicit conversion from string to number")
    return Long.parseLong(_v)
  }

  public function asFloat() : float {
    LOGGER.warn("Implicit conversion from string to number")
    return Float.parseFloat(_v)
  }

  public function asDouble() : double {
    LOGGER.warn("Implicit conversion from string to number")
    return Double.parseDouble(_v)
  }
}
