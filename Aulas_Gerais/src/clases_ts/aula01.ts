class Pessoa {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  dadosCliente(): void {
    console.log(`Nome: ${this.name}, idade: ${this.age}`);
  }

  dadosCadastrais(id: number): string {

    return `Id cliente ${id}`;

  }
}

const clienteNovo = new Pessoa("Gilson Mendes", 32);

clienteNovo.dadosCliente();
const retornoCliente = clienteNovo.dadosCadastrais(12);

console.log(retornoCliente);