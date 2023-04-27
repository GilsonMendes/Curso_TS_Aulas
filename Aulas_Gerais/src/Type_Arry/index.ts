let numeros: number[];
numeros = [1, 33, 44, 2, 12];
console.log(numeros);

numeros.push(55);
console.log(numeros);

let nomes: string[];

nomes = ["Paulo", "Ana", "Joana", "Raimundo"];
console.log(nomes);

//Outra forma de declarar arrys
let filmes: Array<string>;

filmes = ["Filme 1", "Filme 3"];

//Union types arrys

let dados1: Array<string | number>;

let dados2: (string | number)[];
