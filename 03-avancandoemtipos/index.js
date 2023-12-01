"use strict";
//  1- Arrays:
let numbers = [1, 2, 3];
numbers.push(5);
numbers;
const nomes = ["Danilo", "Sara"];
nomes.push("Shalom");
nomes;
//  outra sintáxe:
let arrNum = [10, 20, 30];
arrNum;
arrNum.push(40);
arrNum;
//  2 - Any:
const arrAny = [1, "Teste", true, [], { name: "Danilo" }];
arrAny;
arrAny.push({ id: 1 });
arrAny;
//  3 - Parâmetros tipados:
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 4));
// console.log(soma("Shalom, " + "Chaver"));    Erro na soma das strings.
function greeting(name) {
    return `Shalom, ${name}!`;
}
console.log(greeting("Danilo"));
// 4 - Objetos:
function passCoordinates(coord) {
    console.log(`X coordinate is ${coord.x}`);
    console.log(`Y coordinate is ${coord.y}`);
}
console.log(passCoordinates({ x: 234, y: 535 }));
//  5 - Props opcionais:
function showLetter(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showLetter(2, 4, 8);
//          //          //
function greetingFull(nome, sobrenome) {
    if (sobrenome !== undefined) {
        return `Shalom, ${nome} ${sobrenome}, mah nishmah?`;
    }
    return `Shalom ${nome}, mah nishmah`;
}
console.log(greetingFull("Danilo", "Leite"));
//  6 - Union Type:
function showBalance(balance) {
    console.log(`O saldo da conta é de ${balance}`);
}
showBalance("100");
showBalance(300);
//  Avançando em Union Type:
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário aprovado!";
    }
    return `A opção do usuário é ${role}.`;
}
console.log(showUserRole(true));
console.log(showUserRole("Shalom!"));
function showId(id) {
    console.log(`O Id é ${id}`);
}
showId(26);
showId("300");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 5,
    y: 7,
    z: 9,
};
console.log(coordObj);
const somePerson = { name: "Danilo", age: 38 };
console.log(somePerson);
// type personType = {     Não é possível modificar!
//   age: number;
// };
//  10 - Literal Type:
function showDirection(direction) {
    console.log(`Its ${direction} direction.`);
}
console.log(showDirection("right"));
// let teste: "Testando";
// teste = "Testing";
// console.log(teste);
//  11 - Non null assertion operator:
// const parag = document.getElementById("some-p");
// console.log(parag!.innerText);
