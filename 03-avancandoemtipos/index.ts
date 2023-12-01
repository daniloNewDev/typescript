//  1- Arrays:
let numbers: number[] = [1, 2, 3];
numbers.push(5);
numbers;

const nomes: string[] = ["Danilo", "Sara"];
nomes.push("Shalom");
nomes;

//  outra sintáxe:
let arrNum: Array<number> = [10, 20, 30];
arrNum;
arrNum.push(40);
arrNum;

//  2 - Any:
const arrAny: any = [1, "Teste", true, [], { name: "Danilo" }];
arrAny;
arrAny.push({ id: 1 });
arrAny;

//  3 - Parâmetros tipados:
function soma(a: number, b: number): number {
  return a + b;
}
console.log(soma(1, 4));
// console.log(soma("Shalom, " + "Chaver"));    Erro na soma das strings.
function greeting(name: string): string {
  return `Shalom, ${name}!`;
}
console.log(greeting("Danilo"));

// 4 - Objetos:
function passCoordinates(coord: { x: number; y: number }) {
  console.log(`X coordinate is ${coord.x}`);
  console.log(`Y coordinate is ${coord.y}`);
}
console.log(passCoordinates({ x: 234, y: 535 }));

//  5 - Props opcionais:
function showLetter(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c) {
    console.log("C: " + c);
  }
}
showLetter(2, 4, 8);
//          //          //
function greetingFull(nome: string, sobrenome?: string) {
  if (sobrenome !== undefined) {
    return `Shalom, ${nome} ${sobrenome}, mah nishmah?`;
  }
  return `Shalom ${nome}, mah nishmah`;
}
console.log(greetingFull("Danilo", "Leite"));

//  6 - Union Type:
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é de ${balance}`);
}
showBalance("100");
showBalance(300);

//  Avançando em Union Type:
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário aprovado!";
  }
  return `A opção do usuário é ${role}.`;
}

console.log(showUserRole(true));
console.log(showUserRole("Shalom!"));

//  7 - Type Alias:
type ID = string | number;
function showId(id: ID) {
  console.log(`O Id é ${id}`);
}
showId(26);
showId("300");

//  8 - Interface:
interface Point {
  x: number;
  y: number;
  z: number;
}
function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Point = {
  x: 5,
  y: 7,
  z: 9,
};

console.log(coordObj);

//  9 - Interface X Alias:
interface Person {
  name: string;
}

interface Person {
  age: number;
}
const somePerson: Person = { name: "Danilo", age: 38 };
console.log(somePerson);

type personType = {
  name: string;
};
// type personType = {     Não é possível modificar!
//   age: number;
// };

//  10 - Literal Type:

function showDirection(direction: "left" | "right" | "center") {
  console.log(`Its ${direction} direction.`);
}
console.log(showDirection("right"));

// let teste: "Testando";
// teste = "Testing";
// console.log(teste);

//  11 - Non null assertion operator:
// const parag = document.getElementById("some-p");
// console.log(parag!.innerText);
