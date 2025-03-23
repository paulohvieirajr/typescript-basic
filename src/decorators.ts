//decorators
function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas{}

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    }
}

@apiversion('1.0.0')
class api {}

const api = new api();
console.log(api);
console.log((api as any).__version);

// atribute decorators

function minLength(length: number) { 
    return (target: any, propertyKey: string | symbol) => {
        let _value: string;

        const getter = () => _value;
        const setter = (value: string) => { 
            if (value.length < length) {
                console.log(`Error: você não pode criar ${String(propertyKey)} com tamanho menor que ${length}`);
            } else {
                _value = value;
            }
        };

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}

class Api2 {

    // @minLength(3)
    // @minLength(5)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api2 = new Api2('produtos');
console.log(api2.name);

