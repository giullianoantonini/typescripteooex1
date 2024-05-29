"use strict";
//String
const username = "Johnny Cage";
function toUpperCase(usernameToFormat) {
    return usernameToFormat.toUpperCase();
}
console.log(toUpperCase(username));
console.log("--------------------");
//Number
const number1 = 1;
const number2 = 2;
function somarDoisNumeros(number1, number2) {
    return number1 + number2;
}
console.log(somarDoisNumeros(number1, number2));
console.log("--------------------");
//Array
const array = [1, 2, 3, 4, 5];
function somarArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(somarArray(array));
console.log("--------------------");
//Boolean
const condicao1 = true;
function trueOrFalse(condicao) {
    return condicao;
}
console.log(trueOrFalse(condicao1));
console.log("--------------------");
// Reutilização das interfaces/types
const user = {
    name: "Jack",
    lastname: "Black",
    age: 55,
    phoneNumber: 123456789,
    email: "jackblack@gmail.com",
};
console.log(user);
console.log("--------------------");
const numbers = {
    number1: 1,
    number2: 2,
};
console.log(numbers);
console.log("--------------------");
// Faça condicionais com if, ternário com "condição ? true : false" e "true || false".
console.log(user.age < 18 ? ("Menor de idade") : ("Maior de idade"));
console.log("--------------------");
console.log(user.name && user.age > 18 ? ("Preenche os requisitos") : ("Não preenche os requisitos"));
console.log("--------------------");
if (user.phoneNumber || user.email) {
    console.log("Forma de contato válida cadastrada");
    console.log("--------------------");
}
else {
    console.log("Necessário habilitar uma forma de contato");
    console.log("--------------------");
}
