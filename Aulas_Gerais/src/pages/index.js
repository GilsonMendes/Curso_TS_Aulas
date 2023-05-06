"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("../databases/connection");
function acessarSistema() {
    (0, connection_1.connection)({ ip: "192.168.0.100", name: "MySql" });
}
acessarSistema();
