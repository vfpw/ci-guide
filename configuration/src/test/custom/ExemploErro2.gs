package test.custom

uses java.math.BigDecimal


class ExemploErro2 {

  public function metodo2() {

    var bd = new BigDecimal("0")

    var an = bd.valueOf(70.05)

    var en = BigDecimal.valueOf(4.56)

  }

}