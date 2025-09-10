const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual eh a sua idade? "));

//const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

if (idade >= 18) {
  console.log("Você eh maior de idade!");
} else {
  console.log("Você eh menor de idade.");
}

const mediaDoAluno = 7.8;

// Media >= 7 => Aprovado
// Media < 7 e Média >=5 => Prova final
// Media < 5 => Reprovado

if (mediaDoAluno >= 7) {
  console.log("Aprovado!");
  console.log("Parabens! 😁👍");
} else if (mediaDoAluno >= 5) {
  console.log("Prova final");
} else {
  console.log("Reprovado");
}

// 1. Preciso ser maior de idade
// 2. Preciso ter uma CNH (PPD)

const idadeDaPessoa = 18;
const temCNH = false;

if (idadeDaPessoa >= 18 && temCNH) {
  console.log("Voce pode dirigir!");
} else {
  console.log("Voce NAO pode dirigir!");
}
