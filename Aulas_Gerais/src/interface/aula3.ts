interface Usuario1 {
  name: string;
  age: number;
  email: string;
  situacao: (params: string) => void;
}

function situacaoCliente(status: string): void {
  console.log(`Situação do cliente -> ${status}`);
}

const cadastro: Usuario1 = {
  name: "Gilson Mendes",
  age: 34,
  email: "gilson.mendes00@gmail.com",
  situacao: situacaoCliente
};
console.log(cadastro);
console.log(cadastro.situacao('Ativo'));
console.log(cadastro.name);
console.log(cadastro.age);
console.log(cadastro.email);
