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

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.clear();

// * ARRAYS

const nota1 = 10;
const nota2 = 8;
const nota3 = 5;

const notasDoAluno = [10, 8, 5];
const pessoa = ["Walisson", 27, 1.77, true];

console.log(notasDoAluno);
console.log(pessoa);

console.log(pessoa[0]);

pessoa[3] = false;

console.log(pessoa);

console.clear();
console.log(pessoa.length);
console.log(notasDoAluno.length);

console.clear();

// Fatiamento de arrays
const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 2));
console.log(numeros.slice(2));

console.clear();

// Adicioanndo elementos no final do array
numeros.push(0);
console.log(numeros);

// Adicionar elemento no início do array
console.clear();
numeros.unshift(-1);
console.log(numeros);

// pop: remover o elemento que está no final do array
console.clear();
numeros.pop();
console.log(numeros);

// shift: remover o primeiro elemento do array
console.clear();
numeros.shift();
console.log(numeros);

// Será que o elemento 20 existe no array numeros?
console.clear();
console.clear();
console.log(numeros.includes(20));
console.log(numeros.includes(10));

if (numeros.includes(20)) {
  console.log("Opa! Existe o número 10 dentro do array numeros!");
} else {
  console.log("Não existe o número 20 no array numeros.");
}
const existeONumeros20 = numeros.includes(20);

console.clear();

// * indexOf
const indiceDoElemento10 = numeros.indexOf(10); // procura o peirpr
console.log(indiceDoElemento10);

// * lastIndexOf
// [10, 3, 6, 10, 4]
const indiceDoElemento40 = numeros.lastIndexOf(40);

console.log(indiceDoElemento40);

console.clear();

// * Percorrêndo arrays com o for

const arr = [45, 36, 90, 76, 32, 7];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

console.clear();

// * for-of - percorre os elementos de um objeto

for (const elemento of arr) {
  // poderia ser "elemento" ou qualquer outra coisa
  console.log(elemento);
}

console.clear();

// * for-in - percorre os índices de um array (propriedades de um objeto)

for (const indice in arr) {
  // poderia ser "indice" ou qualquer outra coisa
  console.log(indice, typeof indice); // o typeof de indice é uma string
  console.log(arr[indice]);
}
