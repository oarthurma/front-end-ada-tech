"use strict";
// Aula 19 - POO
// Classe: abstração
// Definindo a abstração de uma pessoa
class Pessoa {
    // métodos: ação (funções)
    // Método construtor
    constructor(nome, idade, altura) {
        this.nome = nome; // this = este
        this.idade = idade;
        this.altura = altura;
    }
    dormir() {
        console.log("Dormindo... 😴");
    }
}
// Criando/instanciando uma pessoa (indivíduo/objeto) a partir da definição da classe Pessoa
const pessoa1 = new Pessoa("Walisson", 27, 1.77);
const pessoa2 = new Pessoa("Pessoa 2", 30, 1.89);
console.log(pessoa1);
console.log(pessoa1.nome);
console.log(pessoa2);
pessoa2.dormir();
// ! 37:53
