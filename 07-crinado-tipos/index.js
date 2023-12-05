"use strict";
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(typeof showData(5));
console.log(showData("Shalom, chaverim!"));
//  Constraints com Generics:
function showProductName(obj) {
    return `Produto: ${obj.name}.`;
}
const myObj = { name: "Shirt", color: "White" };
const secondObj = { name: "Pants", color: "Black" };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "White" };
const myPen = { name: "Bic", wheels: false, engine: false, color: "Blue" };
console.log(myCar);
console.log(myPen);
//  Type Parameters:
function getSomeKey(obj, key) {
    return `A chave "${[key]}" está presente no objeto e tem valor de: ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
function ShowCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Danilo",
    age: 38,
    hasDriveLicence: true,
};
console.log(ShowCharName(myChar, "name"));
console.log(ShowCharName(myChar, "age"));
//  Typeof type operator:
const userName = "Danilo";
const userName2 = "Moshe";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga.",
};
function showKm(km) {
    console.log(`Km do veículo: ${km}`);
}
showKm(newTruck.km);
const someVar = 5;
const testing = "Some Text!";
