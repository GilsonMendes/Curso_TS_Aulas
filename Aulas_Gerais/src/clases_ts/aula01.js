var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Pessoa.prototype.dadosCliente = function () {
        console.log("Nome: ".concat(this.name, ", idade: ").concat(this.age));
    };
    Pessoa.prototype.dadosCadastrais = function (id) {
        return "Id cliente ".concat(id);
    };
    return Pessoa;
}());
var clienteNovo = new Pessoa("Gilson Mendes", 32);
clienteNovo.dadosCliente();
var retornoCliente = clienteNovo.dadosCadastrais(12);
console.log(retornoCliente);
