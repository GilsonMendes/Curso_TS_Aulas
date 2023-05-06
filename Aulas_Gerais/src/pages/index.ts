import { connection } from "../databases/connection";

function acessarSistema() {
  connection({ ip: "192.168.0.100", name: "MySql" });
}


acessarSistema();
