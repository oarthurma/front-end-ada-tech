// Map

// Ele cria um novo array que possui o "mesmo tamanho do array original"

// composto pelos elementos que foram retornado a cada interação

const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento, index, arrayCompleto) => {
  return elemento * 2;
});

console.log(novoArray);

// Exemplo 1: Elevando todos os números ao quadrado

console.clear();

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const valoresAoQuadrado = valores.map((valor) => valor ** 2);

console.log(valoresAoQuadrado);

// Exemplo 2: Adicionando uma propriedade aos objetos do array

console.clear();

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  // return itemDoCarrinho

  return {
    ...itemDoCarrinho,

    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoComTotal);

// const pessoa = {

//   nome: "Walisson",

//   idade: 27,

//   altura: 1.77,

// };

// Desestruturação ou spread (operador)

// const pessoaComPeso = {

//   ...pessoa,

//   peso: 79,

// };

// console.log(pessoaComPeso);
