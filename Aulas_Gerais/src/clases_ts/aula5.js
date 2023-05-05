var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContaBanco = /** @class */ (function () {
    function ContaBanco() {
    }
    return ContaBanco;
}());
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PessoaFisica.prototype.abrirConta = function (dados) {
        console.log("=====================");
        console.log("Nova conta P. Fisica criada com sucesso ".concat(dados.nome));
        console.log("=====================");
        return true;
    };
    return PessoaFisica;
}(ContaBanco));
var joana = new PessoaFisica();
joana.abrirConta({
    nome: 'Joana Silva',
    numero: '1029-x',
    endererco: 'Rua 15, Bairro Centro'
});
