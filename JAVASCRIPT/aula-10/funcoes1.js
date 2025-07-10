// Definição da função
function saudacao(nomeDoEstudante, curso = "Front-end em React") { 
  // template sring | template literária
  return `Olá, ${nomeDoEstudante}! Seja bem-vinda(o) ao curso de ${curso}!`;
}

const mensagemDaSaudacao = saudacao("Walisson", "Back-end em Node.js"); // chamada da função saudação

console.log(mensagemDaSaudacao);

// * Exemplo 2

console.clear();

function somar(numero1, numero2) {
  return (numero1 + numero2)
}

const resultado = somar(2, 3)

console.log(resultado);
console.log(resultado / 10);

// ! 26:45
