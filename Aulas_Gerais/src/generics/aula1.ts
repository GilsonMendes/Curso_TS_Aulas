interface NovaProduto<V extends number> {
  nome: string;
  preco: V;
  formatar(valor: V): string;
}

const arroz: NovaProduto<number> = {
  nome: "Arroz Branco",
  preco: 1500,
  formatar(valor: number): string {
    let valorFormatado = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return valorFormatado;
  },
};

console.log(arroz);

console.log(arroz.formatar(1500));
