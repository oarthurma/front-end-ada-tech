"use strict";
// Aula 19 - POO
// Classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    // métodos: ação (funções)
    // Método construtor
    constructor(nome, idade, altura, cpf) {
        this.nome = nome; // this = este
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    dormir() {
        console.log("Dormindo... 😴");
    }
    // accessor: getter
    get cpf() {
        return this._cpf;
    }
    // acessor: setter
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            // Lançando um error
            throw new Error("CPF length is incorrect!");
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Ensinando...");
    }
}
// Criando/instanciando uma pessoa (indivíduo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa("Walisson", 27, 1.77, "123.456.789-00");
const pessoa2 = new Pessoa("Pessoa 2", 30, 1.89, "123.456.789-01");
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa2);
pessoa2.dormir();
pessoa1.nome = "Fulano";
console.log(pessoa1.nome);
console.log(pessoa1.cpf);
pessoa1.cpf = "123.456.789-03";
console.log(pessoa1.cpf);
// Objeto da Classe Professor
const professor = new Professor("Professor", 30, 1.68, "123.456.789-10", "0001");
console.log(professor);
professor.dormir();
professor.ensinar();
// Polimorfismo
console.log(pessoa1 instanceof Pessoa); // true
console.log(pessoa1 instanceof Professor); // false
console.log(professor instanceof Pessoa); // true
console.log(professor instanceof Professor); // true
