var arroz = {
    nome: "Arroz Branco",
    preco: 1500,
    formatar: function (valor) {
        var valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        return valorFormatado;
    },
};
console.log(arroz);
console.log(arroz.formatar(1500));
