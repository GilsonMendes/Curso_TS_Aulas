class Pessoa {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const clienteNovo = new Pessoa("Gilson Mendes", 32);

console.log(clienteNovo.name);
console.log(clienteNovo.age);
