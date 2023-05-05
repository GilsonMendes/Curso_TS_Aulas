class Loja {
  private name: string;
  private address: string;
  protected id: number;

  constructor(name: string, address: string, id: number) {
    this.name = name;
    this.address = address;
    this.id = id;
  }

  cadastroLoja() {
    console.log("Loja cadastrada");
  }
}

class NovoEstabelicimento extends Loja {
  description: string;

  constructor(name: string, address: string, id: number, description: string) {
    super(name, address, id);
    this.description = description;
  }
}

const novoEstabelecimento = new NovoEstabelicimento(
  "Loja Super Dez",
  "Rua Gonçalves",
  1,
  "Proximo ao Tem de Tudo"
);

console.log(novoEstabelecimento);
