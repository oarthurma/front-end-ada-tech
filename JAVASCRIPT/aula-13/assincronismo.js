const fs = require("fs");

// * 1. Callbacks

// console.log("ANTES de ler o arquivo...");

// // Função assíncrona (ler um arquivo leva um tempo)
// fs.readFile("aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
//   if (erro) {
//     console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
//   } else {
//     console.log(String(conteudoDoArquivo));
//   }
// });

// console.log("DEPOIS da função de ler o arquivo...");
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Exemplo 02: setTimeout(função que cria um timer)

console.log("Antes do setTimeout...");

setTimeout(() => {
  console.log("Isso aqui vai ser executado após 2 segundos!");
}, 2 * 1000);

console.log("DEPOIS do setTimelime...");

// ! 30:30
