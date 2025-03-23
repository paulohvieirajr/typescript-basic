"use strict";
const bot = {
    id: 1,
    nome: 'Clark Kent'
};
const bot2 = {
    id: 1,
    nome: 'Clark Kent',
    sayHello: function () {
        return `Hello ${this.nome}`;
    }
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    ;
    sayHello() {
        return `Hello, I am ${this.nome}`;
    }
    ;
}
;
const p = new Pessoa(1, 'Clark Kent');
console.log(p.sayHello());
