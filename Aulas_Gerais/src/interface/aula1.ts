interface Pesssoa {
  nome: string;
  idade: number;
  email: string;
}


function Cadrasto({nome, idade, email}:Pesssoa):void{

    console.log(nome);
    console.log(idade);
    console.log(email);

}

console.log(Cadrasto({nome: 'Gilson Mendes', idade: 32, email: 'gilson@gmail.com'}));