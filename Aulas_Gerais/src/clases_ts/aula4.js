var Jogo = /** @class */ (function () {
    function Jogo(servidor) {
        this.id = "1234";
        this.servidor = servidor;
    }
    Object.defineProperty(Jogo.prototype, "getServidorIP", {
        get: function () {
            console.log("---Metodo Get-----");
            return this.servidor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jogo.prototype, "setServidorIP", {
        set: function (novoIp) {
            this.servidor = novoIp;
        },
        enumerable: false,
        configurable: true
    });
    return Jogo;
}());
var COD = new Jogo("192.168.2.190");
console.log(COD);
console.log(COD.getServidorIP);
COD.setServidorIP = "192.168.10.100";
console.log(COD.getServidorIP);
