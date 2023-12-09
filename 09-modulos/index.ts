//  Importação de Arquivo:
import importGreet from "./greet";

importGreet();

//  Importação de Varável:
import { x } from "./variable";

console.log(x);

//  multiplas importações:
import { a, b, myFunction } from "./multiplo";

console.log(a);
console.log(b);

myFunction();

//  Alias - Alteração dos nomes:
import { someName as name } from "./changename";

console.log(name);

//  Importar todos os dados de um arquivo:
import * as myNumbers from "./numbers";
console.log(myNumbers);
const nx = myNumbers.n1;

//  Importação de interface:
import { Human } from "./mytype";
class User implements Human {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const moshe = new User("Moshe", 58);

console.log(moshe);
