interface Usuario {
  nome: string;
  email: string;
  idade: number;
}

function cliente(dados: Usuario): void {
  console.log(dados.nome);
  console.log(dados.email);
  console.log(dados.idade);
}

cliente({ nome: "Gilson", email: "gilson.mendes@gamil.com", idade: 34 });
