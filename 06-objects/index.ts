//  Tipo de Objeto para função com interface:
interface Product {
  name: string;
  price: number;
  isAvaliable: true;
}
function showProductDetails(product: Product) {
  console.log(`Prod: ${product.name}; Valor: ${product.price}`);
  if (product.isAvaliable) {
    console.log("Produto disponível.");
  }
}
const shirt: Product = {
  name: "Camisa",
  price: 70,
  isAvaliable: true,
};

console.log(showProductDetails(shirt));
console.log(
  showProductDetails({ name: "Calça", price: 100, isAvaliable: true })
);

//  Propriedade opcional:
interface User {
  email: string;
  role?: string;
}
function showUserDetails(user: User) {
  console.log(`E-mail do usuário: ${user.email}`);
  if (user.role) {
    console.log(`Função do usuário: ${user.role}`);
  }
}
const u1: User = { email: "danilo@email.com", role: "Admin" };
const u2: User = { email: "joao@email.com" };

showUserDetails(u1);
showUserDetails(u2);

//  Readonly
interface Car {
  brand: string;
  readonly wheels: number;
}
const fusca: Car = {
  brand: "VW",
  wheels: 4,
};
console.log(fusca);
// usca.wheels = 5

//  Index Signature:
interface CoordObject {
  [index: string]: number;
}
let coords: CoordObject = {
  x: 10,
};

//  Extending Types:
interface Human {
  name: string;
  age: number;
}
interface SuperHuman extends Human {
  superpowers: string[];
}

const danilo: Human = {
  name: "Danilo",
  age: 38,
};
const moshe: SuperHuman = {
  name: "Moshe",
  age: 68,
  superpowers: ["Open the sea!", "Spoke with G'd!", "Write the Torah!"],
};
console.log(moshe);

//  Intersection Types:
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanHitGun = Character & Gun;

const arnold: HumanHitGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};
console.log(arnold);

//  Read Only Array:
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

//  Tuplas:
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

type nameAge = [string, number];

const anotherUser: nameAge = ["Danilo", 38];
console.log(anotherUser);

//  Tupla Reado only:
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}
showNumbers([13, 26]);
