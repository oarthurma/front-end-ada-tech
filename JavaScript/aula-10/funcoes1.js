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

console.clear();

// ---------------------------------
// FUNÇÕES ANÔNIMAS

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2)
console.log(dobro)

// -----------------------------
// ARROW FUNCTIONS: Função Seta

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = numero => numero * 3

