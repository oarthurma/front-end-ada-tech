const prompt = require("readline-sync");

// expressão 1: inicialização da variável de controle
// expressão 2: condição de permanência do for
// expressão 3: o incremente da variável de controle

// for(expressão 1; expressão 2; expressão 3) {
// o escopo do for
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// limpando o console
console.clear();

// Exemplo

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 1; i <= 5; i++) {
//   numeroInformado = Number(prompt.question("Informe um número positivo: "));

//   if (numeroInformado > maiorNumero) {
//     maiorNumero = numeroInformado;
//   }
// }

// console.log("Maior número:", maiorNumero);

// * Exemplo: percorrendo string com o for

const nome = "Walisson";

console.log(nome[0]);

// for (let i = 0; i < nome.length; i++) {

// }
