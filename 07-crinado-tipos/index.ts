function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(typeof showData(5));
console.log(showData("Shalom, chaverim!"));

//  Constraints com Generics:
function showProductName<T extends { name: string }>(obj: T) {
  return `Produto: ${obj.name}.`;
}
const myObj = { name: "Shirt", color: "White" };
const secondObj = { name: "Pants", color: "Black" };

console.log(showProductName(myObj));
console.log(showProductName(secondObj));

//  Interface com Generics:
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}
type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "White" };
const myPen: Pen = { name: "Bic", wheels: false, engine: false, color: "Blue" };
console.log(myCar);
console.log(myPen);

//  Type Parameters:
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave "${[key]}" está presente no objeto e tem valor de: ${
    obj[key]
  }`;
}
const server = {
  hd: "2TB",
  ram: "32GB",
};
console.log(getSomeKey(server, "ram"));

//  keyof Type Operator:
type Character = { name: string; age: number; hasDriveLicence: boolean };
type C = keyof Character;
function ShowCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}
const myChar: Character = {
  name: "Danilo",
  age: 38,
  hasDriveLicence: true,
};
console.log(ShowCharName(myChar, "name"));
console.log(ShowCharName(myChar, "age"));

//  Typeof type operator:
const userName: string = "Danilo";
const userName2: typeof userName = "Moshe";

//  Indexed Access types:
type Truck = { km: number; kg: number; description: string };
type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga.",
};

function showKm(km: Km) {
  console.log(`Km do veículo: ${km}`);
}

showKm(newTruck.km);

//  Conditional Expressions Type:
interface A {}
interface B extends A {}
interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;
const someVar: myType = 5;
// const someVar2:myType = "Teste"
type myTypeB = Teste extends { showName(): string } ? string : boolean;

//  Template Literals Type:
type test1 = "Text";
type CustonType = `Some ${test1}!`;

const testing: CustonType = "Some Text!";
