// interfaces (type  x interface)

// type
type robot = {
    id: number,
    nome: string
};

const bot:robot = {
    id: 1,
    nome: 'Clark Kent'
};

// interface
interface robot2 {
    readonly id: number, // não permite alterações
    nome: string,
    sayHello: () => string // ? opcional
}

const bot2:robot2 = {
    id: 1,
    nome: 'Clark Kent',
    sayHello: function (): string // ? opcional
    {
        return `Hello ${this.nome}`;
    }
};

console.log(bot);
console.log(bot2);

class Pessoa implements robot2 {
    id: number;
    nome: string;
    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    };
    sayHello() : string  {
        return `Hello, I am ${this.nome}`;
    };
};

const p:Pessoa = new Pessoa(1, 'Clark Kent');
console.log(p.sayHello());

