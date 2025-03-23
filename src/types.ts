// TIPOS DE DADOS DO TYPESCRIPT
//tipos primitivos: boolean, number, string
let ligado: boolean = true;
let numero: number = 10;
let altura: number = 1.80;
let nome: string = 'Clark Kent';

// tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
let qualquer: any = 'qualquer coisa';
let vazio: void = undefined;

// objeto genérito
let produto: object = {
    nome: "Felipe", 
    cidade: "São Paulo",
    idade: 30
};

// objeto tipado com type
type ProdutoLoja = {
    nome:string,
    preco:number,
    unidades:number
}

let produtoLoja: ProdutoLoja = {
    nome: "Camiseta",
    preco: 39.90,
    unidades: 10
};

// array
let frutas: string[] = ['banana', 'maçã', 'laranja'];
let numeros: number[] = [1, 2, 3, 4, 5];
let lista:Array<number> = [1, 2, 3, 4, 5];

// tupla/arrays de multiplas tipagens
let infos: (string | number)[] = ['Felipe', 30, 'São Paulo', 'teste', 0];

// Tuplas: seguir a exata ordem de tipos
let pessoa: [string, number] = ['Felipe', 30];
let pessoa2: [string, number, string] = ['Felipe', 30, 'São Paulo'];

// Datas
let data: Date = new Date('2025-03-22 05:00');
console.log(data.toString());
