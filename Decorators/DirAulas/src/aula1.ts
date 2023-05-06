function setServidor(novoIP: string) {
  return (target: any) => {
    return class extends target {
      ip = novoIP;
    };
  };
}

@setServidor("192.168.0.100")
class Servidor {}

const Servidor1 = new Servidor();

console.log(Servidor1);
