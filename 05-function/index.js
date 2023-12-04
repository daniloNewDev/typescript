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
