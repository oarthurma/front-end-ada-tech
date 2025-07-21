"use strict";
let numero = 20; // inferência de tipo
const pi = 3.1415;
let nome = "Walisson";
let correta = true;
let resultado = numero * pi;
// number[] or Array<number>
const numeros = [1, 2, 3, 4, 5];
// ! const misto: any[] = ['Walisson', 27, 1.77, {}, {} => {}, true]
// ! Evite ao máximo utilizar o any!
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
const pessoaTupla = ["Walisson", 27]; // tupla (tuple)
const pessoa = {
    nome: "Walisson",
    idade: 27,
    altura: 1.77,
};
pessoa.profissao = "Desenvolvedor";
console.log(pessoa);
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
}
const numeroEscolhido = chooseNumber(10, 20, "lower");
console.log("numeroEscolhido:", numeroEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
const pessoas = {
    "123.456.789-00": {
        nome: "Fulano",
        idade: 20,
        altura: 1.89,
    },
    "123.456, 789-01": {
        nome: "Fulana",
        idade: 19,
        altura: 1.72,
    },
};
