function validaNome(tamanho: number) {
  return (target: any, key: string) => {
    let valor = target[key];
    const getter = () => valor;
    const setter = (value: string) => {
      if (value === "") {
        console.log("O valor nome não pode estar em branco");
      } else if (value.length < tamanho) {
        console.log("O tamanho do nome é invalido");
      } else {
        valor = value;
      }
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Jogo {
  @validaNome(5)
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const jogo1 = new Jogo("Lef");

console.log(jogo1.nome);
