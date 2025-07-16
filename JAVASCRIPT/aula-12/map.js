// Map
// Ele cria um novo array que possui o 'mesmo tamanho do array original'
// composto pelos elementos que foram retornados a cada interaçõ

const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento) => {
  return elemento * 2;
});

console.log(novoArray);

// Exemplo 1: Elevando todos os números ao quadrado
console.clear();
const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado);

// Exemplo 2:

// ! 22:23
