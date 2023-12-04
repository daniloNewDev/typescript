"use strict";
//  01- Void
function withOutReturn() {
    console.log("Função sem retorno.");
}
//  02- Callback como argumento:
function greeting(name) {
    return `Shalom, ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Danilo");
preGreeting(greeting, "Ruth");
//  03- Generic Function:
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([0, 1, 2, 3, 4]));
console.log(firstElement(["Shalom", "Danilo", "Rivka"]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Danilo" }, { age: 30, job: "Developer" });
console.log(newObject);
//  Constraints nas Generic Functions:
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 8));
console.log(biggestNumber(14, 5));
console.log(biggestNumber("14", "5"));
//  Definindo tipos de parâmetros:
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7]));
console.log(mergeArrays([1, 2, 3, 4], ["Danilo", "Lea"]));
//  Parâmetros opcionais:
function modernGreeting(name, greet) {
    if (greet) {
        return `Shalom, ${greet}. ${name}, mah nishmah?`;
    }
    return `Shalom, ${name}, mah nishmah?`;
}
console.log(modernGreeting("Danilo"));
console.log(modernGreeting("Danilo", "Sr"));
//  Parâmetro Default:
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(5));
console.log(somaDefault(5, 13));
//  Unknown:
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número.");
    }
}
console.log(doSomething([1, 2, 3]));
console.log(doSomething(6));
//  Never:
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro!")
//  REST operator:
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 13, 26));
//  Destructuring como parâmetro:
function showProductDetails({ name, price, }) {
    return `Produto: ${name}, Valor: ${price}.`;
}
const shirt = { name: "Camisa", price: 70 };
console.log(showProductDetails(shirt));
