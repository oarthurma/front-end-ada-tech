let numero = 20; // inferência de tipo

const pi = 3.1415;

let nome: string = "Walisson";

let correta: boolean = true;

let resultado = numero * pi;

// number[] or Array<number>
const numeros: number[] = [1, 2, 3, 4, 5];

// ! const misto: any[] = ['Walisson', 27, 1.77, {}, {} => {}, true]
// ! Evite ao máximo utilizar o any!

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idade) => idade < 18);

console.log(menoresDeIdade);

const pessoaTupla: [string, number] = ["Walisson", 27]; // tupla (tuple)

// Object Types

// interface
// tipo costumizado
// interface Person {
//   nome: string;
//   idade: number;
//   profissao?: string;
//   altura: number;
// }

type Person = {
  nome: string;
  idade: number;
  altura: number;
  profissao?: string;
};

type MyString = string;

const pessoa: Person = {
  nome: "Walisson",
  idade: 27,
  altura: 1.77,
};

pessoa.profissao = "Desenvolvedor";

console.log(pessoa);

// type aliases
type Criterio = "greater" | "lower";

function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: Criterio
): number {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}

const numeroEscolhido = chooseNumber(10, 20, "lower");

console.log("numeroEscolhido:", numeroEscolhido);

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

// * Utility Types: A ideia deles é permitir que você crie novos tipos a partir
// *de tipos já existentes

// 1.Partial

type PersonPartial = Partial<Person>;

// 2. Required

type PersonRequired = Required<Person>;

// 3. Pick

type PersonPicked = Pick<Person, "nome" | "idade">;

// 4. Omit

type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude

type CriterioExclude = Exclude<Criterio, "greater">;

// 6. Record

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
  "123.456.789-00": {
    nome: "Fulano",
    idade: 20,
    altura: 1.89,
  },
  "123.456, 789-01": {
    nome: "Fulana",
    idade: 19,
    altura: 1.72,
  },
};
