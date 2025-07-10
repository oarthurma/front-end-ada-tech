// Object Literal

const array = ["Walisson", 27, 1.77, true];

const pessoa = {
  nome: "Walisson",
  idade: 27,
  altura: 1.77,
  ehProgramador: true,
  hobbies: ["Jogar FIFA", "Academia", "Ler"],
  imprimirAlgo: () => {
    console.log("Chamou a função!");
  },
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa["idade"]);

pessoa.profissao = "Desenvolvidor";

pessoa.nome = "Walisson Silva";

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 27;
const altura = 1.77;

const objeto = {
  idade,
  altura,
};

console.log(objeto);
console.clear();

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);
