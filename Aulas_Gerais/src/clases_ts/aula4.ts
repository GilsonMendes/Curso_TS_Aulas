class Jogo {
  private servidor: string;
  private id: string = "1234";

  constructor(servidor: string) {
    this.servidor = servidor;
  }

  get getServidorIP() {
    console.log("---Metodo Get-----");
    return this.servidor;
  }

  set setServidorIP(novoIp: string) {
    this.servidor = novoIp;
  }
}

const COD = new Jogo("192.168.2.190");

console.log(COD);

console.log(COD.getServidorIP);

COD.setServidorIP = "192.168.10.100";

console.log(COD.getServidorIP);
