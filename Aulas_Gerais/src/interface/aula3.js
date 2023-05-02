function situacaoCliente(status) {
    console.log("Situa\u00E7\u00E3o do cliente -> ".concat(status));
}
var cadastro = {
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
