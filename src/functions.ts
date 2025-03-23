// funções
function addNumbers(a: number, b:number) : number {
    return a + b;
}

let result: number = addNumbers(10, 20);

function addToHello(nome: string) : string { 
    return `Hello ${nome}`;
}

let hello: string = addToHello('Paulo');

function  CallToPhone(phone: number | string) : string {
    return `Ligando para ${phone}`;
}

let numeroNumber : string = CallToPhone(11999999999);
let numeroString : string = CallToPhone('11999999999');

//  funções assincronas
async function getDatabase(id: number) : Promise<string> {
    
    return `paulo ${id}`;
}

console.log(getDatabase(1));