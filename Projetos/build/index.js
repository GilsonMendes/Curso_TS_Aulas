"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const btnSomar = document.getElementById("btnSoma");
const btnSubt = document.getElementById("btnSubt");
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
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
