"use strict";
//  01- Typeof type guard:
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a operação!");
    }
}
console.log(sum("56", "98"));
console.log(sum(5135, 7547));
console.log(sum("12", 7));
//  Checando existência do valor:
//usado com cautela, para não anular valores esperados, como zero, nul...
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação!");
    }
}
operations([1, 2, 3]);
operations([6, 2, 8], "sum");
operations([3, 25, 67], "multiply");
//  Instanceof:
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const moshe = new User("Moshe");
const shlomo = new SuperUser("Shlomo");
console.log(moshe);
console.log(shlomo);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Shalom, user ${user.name}! Mah nishmah?`);
    }
    else if (user instanceof User) {
        console.log(`Shalom, ${user.name}.`);
    }
}
console.log(userGreeting(moshe));
userGreeting(shlomo);
//  Operador in:
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
