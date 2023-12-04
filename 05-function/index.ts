//  01- Void
function withOutReturn(): void {
  console.log("Função sem retorno.");
}

//  02- Callback como argumento:
function greeting(name: string): string {
  return `Shalom, ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função");
  const greet = f(userName);
  console.log(greet);
}

preGreeting(greeting, "Danilo");
preGreeting(greeting, "Ruth");

//  03- Generic Function:
function firstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElement([0, 1, 2, 3, 4]));
console.log(firstElement(["Shalom", "Danilo", "Rivka"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}
const newObject = mergeObjects(
  { name: "Danilo" },
  { age: 30, job: "Developer" }
);

console.log(newObject);

//  Constraints nas Generic Functions:
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;
  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}
console.log(biggestNumber(5, 8));
console.log(biggestNumber(14, 5));
console.log(biggestNumber("14", "5"));

//  Definindo tipos de parâmetros:
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7]));
console.log(mergeArrays<number | string>([1, 2, 3, 4], ["Danilo", "Lea"]));

//  Parâmetros opcionais:
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Shalom, ${greet}. ${name}, mah nishmah?`;
  }
  return `Shalom, ${name}, mah nishmah?`;
}
console.log(modernGreeting("Danilo"));
console.log(modernGreeting("Danilo", "Sr"));

//  Parâmetro Default:
function somaDefault(n: number, m = 10): number {
  return n + m;
}
console.log(somaDefault(5));
console.log(somaDefault(5, 13));

//  Unknown:
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("X é um número.");
  }
}

console.log(doSomething([1, 2, 3]));
console.log(doSomething(6));

//  Never:
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}
//showErrorMessage("Algum erro!")

//  REST operator:
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5, 13, 26));

//  Destructuring como parâmetro:
function showProductDetails({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `Produto: ${name}, Valor: ${price}.`;
}
const shirt = { name: "Camisa", price: 70 };

console.log(showProductDetails(shirt));
