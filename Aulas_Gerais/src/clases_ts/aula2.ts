class Cliente {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class Cadastro extends Cliente {
  id: number;

  constructor(name: string, email: string, id: number) {
    super(name, email);
    this.id = id;
  }
}

const novoCadastro = new Cadastro(
  "Gilson Mendes",
  "gilson.mendes@gmail.com",
  32
);

console.log(novoCadastro);
