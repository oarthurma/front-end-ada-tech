// Object Literal

const array = ["Walisson", 27, 1.77, true];

const pessoa = {
  nome: "Walisson",
  idade: 27,
  altura: 1.77,
  ehProgramador: true,
  hobbies: ["Jogar FIFA", "Academia", "Ler"], // adicionando um array dentro do objeto
  imprimirAlgo: () => {
    console.log("Chamou a função!!");
  }, // Não dá para criar uma função com nome, pois o nome da função já vai ser o nome do atributo. Tem que criar uma função anônima ou arrow function
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome); // acessando um atributo
console.log(pessoa.hobbies);
console.log(pessoa["idade"]); // outra forma de acessar um atributo/propriedade - Útil para nomes com espaço por ex.

pessoa.profissao = "Desenvolvedor"; // criar um atributo/propriedade

pessoa.nome = "Walisson Silva"; // alterar atributo/propriedade

console.log(pessoa);

delete pessoa.altura; // deletar propriedade

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 27;
const altura = 1.77;

const objeto = {
  idade, // forma simplificada quando o atributo/propriedade idade recebe o valor da variável idade (mesmo nome)
  altura,
};

console.log(objeto);
console.clear();

const { nome, hobbies } = pessoa; //Desestruturação - forma simplificada para "const nome = pessoa.nome;" - variável "nome" recebe o atributo "nome" do objeto "pessoa". Depois inclui hobbies também.

console.log(nome);
console.log(hobbies);
console.log(pessoa);
