//String

const username: string = "Johnny Cage";

function toUpperCase(usernameToFormat: string): string {
    return usernameToFormat.toUpperCase();
}

console.log(toUpperCase(username))
console.log("--------------------")

//Number

const number1: number = 1
const number2: number = 2;

function somarDoisNumeros(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(somarDoisNumeros(number1, number2))
console.log("--------------------")


//Array

const array: number[] = [1, 2, 3, 4, 5];

function somarArray(array: number[]): number {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(somarArray(array))
console.log("--------------------")

//Boolean

const condicao1: boolean = true;

function trueOrFalse(condicao: boolean): boolean {
    return condicao
}

console.log(trueOrFalse(condicao1))
console.log("--------------------")

// Interface para objetos

interface User {
    name: string;
    lastname: string;
    age: number;
    phoneNumber: number;
    email: string;
}

// Type para tipos únicos

type Numbers = {
    number1: number;
    number2: number;
}

// Reutilização das interfaces/types

const user: User = {
    name: "Jack",
    lastname: "Black",
    age: 55,
    phoneNumber: 123456789,
    email: "jackblack@gmail.com",
}

console.log(user)
console.log("--------------------")

const numbers: Numbers = {
    number1: 1,
    number2: 2,
}

console.log(numbers)
console.log("--------------------")

// Faça condicionais com if, ternário com "condição ? true : false" e "true || false".

console.log(user.age < 18 ? ("Menor de idade") : ("Maior de idade"))
console.log("--------------------")

console.log(user.name && user.age > 18 ? ("Preenche os requisitos") : ("Não preenche os requisitos"))
console.log("--------------------")

if (user.phoneNumber || user.email) {
    console.log("Forma de contato válida cadastrada")
    console.log("--------------------")
} else {
    console.log("Necessário habilitar uma forma de contato")
    console.log("--------------------")
}