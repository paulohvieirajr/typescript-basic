"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 2, 3, 4], [5]);
console.log(numArray);
const stgArray = concatArray(['a', 'b', 'c'], ['d']);
console.log(stgArray);
function concatArrayGenerics(...itens) {
    return new Array().concat(...itens);
}
const numArrayGenerics = concatArrayGenerics([1, 2, 3, 4], [5]);
console.log(numArrayGenerics);
const stgArrayGenerics = concatArrayGenerics('a', 'b', 'c', 'd');
console.log(stgArrayGenerics);
