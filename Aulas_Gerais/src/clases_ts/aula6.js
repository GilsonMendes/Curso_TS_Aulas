"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applyMixin_1 = require("./mixin/applyMixin");
var Automovel = /** @class */ (function () {
    function Automovel() {
    }
    Automovel.prototype.liga = function () {
        console.log("AUTOMOVEL LIGADO COM SUCESSO!");
    };
    Automovel.prototype.desligado = function () {
        console.log("AUTOMOVEL DESLIGADO COM SUCESSO!");
    };
    return Automovel;
}());
var Especificacao = /** @class */ (function () {
    function Especificacao(descricao) {
        this.declicao = descricao;
    }
    return Especificacao;
}());
var Carro = /** @class */ (function () {
    function Carro(nome) {
        this.nome = nome;
    }
    return Carro;
}());
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
var gol = new Carro("Gol 1.6");
gol.liga();
gol.declicao = "Modelo exclusivo do ano";
console.log(gol);
