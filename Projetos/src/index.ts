const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const btnSomar = document.getElementById("btnSoma") as HTMLElement;
const btnSubt = document.getElementById("btnSubt") as HTMLElement;

function somar(a: number, b: number) {
  return a + b;
}
function subtrair(a: number, b: number) {
  return a - b;
}

btnSomar.addEventListener("click", function () {
  const resultado = somar(Number(input1.value), Number(input2.value));
  console.log(resultado);
});
btnSubt.addEventListener("click", function () {
  const resultado = subtrair(Number(input1.value), Number(input2.value));
  console.log(resultado);
});

