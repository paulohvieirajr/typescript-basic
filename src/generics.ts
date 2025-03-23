// generics
function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 2, 3, 4], [5]);
console.log(numArray);

const stgArray = concatArray(['a', 'b', 'c'], ['d']);
console.log(stgArray);

function concatArrayGenerics<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArrayGenerics = concatArrayGenerics<number[]>([1, 2, 3, 4], [5]);
console.log(numArrayGenerics);

const stgArrayGenerics = concatArrayGenerics<string>('a', 'b', 'c', 'd');
console.log(stgArrayGenerics);

