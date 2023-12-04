"use strict";
function showProductDetails(product) {
    console.log(`Prod: ${product.name}; Valor: ${product.price}`);
    if (product.isAvaliable) {
        console.log("Produto disponível.");
    }
}
const shirt = {
    name: "Camisa",
    price: 70,
    isAvaliable: true,
};
console.log(showProductDetails(shirt));
console.log(showProductDetails({ name: "Calça", price: 100, isAvaliable: true }));
function showUserDetails(user) {
    console.log(`E-mail do usuário: ${user.email}`);
    if (user.role) {
        console.log(`Função do usuário: ${user.role}`);
    }
}
const u1 = { email: "danilo@email.com", role: "Admin" };
const u2 = { email: "joao@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
const danilo = {
    name: "Danilo",
    age: 38,
};
const moshe = {
    name: "Moshe",
    age: 68,
    superpowers: ["Open the sea!", "Spoke with G'd!", "Write the Torah!"],
};
console.log(moshe);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
//  Read Only Array:
let myArray = ["Maçã", "Laranja", "Banana"];
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = ["Danilo", 38];
console.log(anotherUser);
//  Tupla Reado only:
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([13, 26]);
