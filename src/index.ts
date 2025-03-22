// Tipo de dado: Objeto
type heroi = {
    name: string,
    vulgo: string
};

function printaObjeto(pessoa: heroi) {
    console.log(pessoa);
}

printaObjeto({name: 'Clark Kent', vulgo: 'Superman'}); // { name: 'Clark Kent', vulgo: 'Superman' }
printaObjeto({name: 'Bruce Wayne', vulgo: 'Batman'}); // { name: 'Bruce Wayne', vulgo: 'Batman' }
printaObjeto({name: 'Diana Prince', vulgo: 'Mulher Maravilha'}); // { name: 'Diana Prince', vulgo: 'Mulher Maravilha' }
