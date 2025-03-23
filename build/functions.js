"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(10, 20);
function addToHello(nome) {
    return `Hello ${nome}`;
}
let hello = addToHello('Paulo');
function CallToPhone(phone) {
    return `Ligando para ${phone}`;
}
let numeroNumber = CallToPhone(11999999999);
let numeroString = CallToPhone('11999999999');
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return `paulo ${id}`;
    });
}
console.log(getDatabase(1));
