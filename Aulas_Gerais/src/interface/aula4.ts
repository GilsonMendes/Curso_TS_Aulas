interface ListaCompras {
  nomeProduto: string;
  idProduto: number;
  tipoProduto: string;
}

interface Carrinho {
  compras: ListaCompras[];
}

const compraRealizada: Carrinho = {
  compras: [
    {
      nomeProduto: "Desodorante",
      idProduto: 12,
      tipoProduto: "Aerozol",
    },
  ],
};

console.log(compraRealizada);

