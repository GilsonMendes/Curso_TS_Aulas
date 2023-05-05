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
var Cliente = /** @class */ (function () {
    function Cliente(name, email) {
        this.name = name;
        this.email = email;
    }
    return Cliente;
}());
var Cadastro = /** @class */ (function (_super) {
    __extends(Cadastro, _super);
    function Cadastro(name, email, id) {
        var _this = _super.call(this, name, email) || this;
        _this.id = id;
        return _this;
    }
    return Cadastro;
}(Cliente));
var novoCadastro = new Cadastro('Gilson Mendes', 'gilson.mendes@gmail.com', 32);
console.log(novoCadastro);
