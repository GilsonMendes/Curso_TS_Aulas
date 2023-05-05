type DadosConta = {
  nome: string;
  numero: string;
  endererco: string;
};

abstract class ContaBanco {
  abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco {
  abrirConta(dados: DadosConta): boolean {
    console.log("=====================");
    console.log(`Nova conta P. Fisica criada com sucesso ${dados.nome}`);
    console.log("=====================");
    return true;
  }
}

const joana = new PessoaFisica();

joana.abrirConta({
  nome: 'Joana Silva',
  numero: '1029-x',
  endererco: 'Rua 15, Bairro Centro'
})

