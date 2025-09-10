const pessoa = {
  nome: "Walisson",
  idade: 27,
  altura: 1.77,
};

// Desestruturação ou spread (operator)
const pessoaComPeso = {
  ...pessoa,
  peso: 79,
};

console.log(pessoa);
