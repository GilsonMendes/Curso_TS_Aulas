import { applyMixins } from "./mixin/applyMixin";

class Automovel {
  liga(): void {
    console.log("AUTOMOVEL LIGADO COM SUCESSO!");
  }

  desligado(): void {
    console.log("AUTOMOVEL DESLIGADO COM SUCESSO!");
  }
}

class Especificacao {
  declicao: string;

  constructor(descricao: string) {
    this.declicao = descricao;
  }
}

class Carro {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

interface Carro extends Automovel, Especificacao {}

applyMixins(Carro, [Automovel, Especificacao]);

const gol = new Carro("Gol 1.6");

gol.liga();
gol.declicao = "Modelo exclusivo do ano";

console.log(gol);
