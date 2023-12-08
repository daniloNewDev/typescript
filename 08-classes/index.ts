//  Campos em classes:
class User {
  name!: string;
  age!: number;
}
const danilo = new User();
danilo;

danilo.name = "Danilo";
danilo.age = 38;

danilo;

//  Constructor:
class NewUser {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const moshe = new NewUser("Moshe", 60);
moshe;
const iossef = new NewUser("Iossef", 40);

//  Propriedades readonly:
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}
const fusca = new Car("Fusca");
fusca;

//  Herança e Super:
class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
const trator = new Machine("Trator");
trator;

class KillerMachine extends Machine {
  guns;
  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);
destroyer;

//  Métodos:
class Dwarf {
  name;
  constructor(name: string) {
    this.name = name;
  }
  greeting() {
    console.log("Hey stranger");
  }
}
const jimmy = new Dwarf("Jimmy");
jimmy;
jimmy.greeting();

//  Getters:
class Person {
  name;
  surname;
  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }
  get fullName() {
    return this.name + " " + this.surname;
  }
}
const daniloNewDev = new Person("Danilo", "Leite");

console.log(daniloNewDev.fullName);

//  Setters:
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;
    console.log("X inserido com sucesso");
  }
  set fillY(y: number) {
    if (y === 0) {
      return;
    }
    this.y = y;
    console.log("Y inserido com sucesso");
  }
}

const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 2;

//  Herança de interface:
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;
  constructor(title: string) {
    this.title = title;
  }
  itemTitle() {
    return `Título do Post: ${this.title}`;
  }
}

const myPost = new blogPost("Shalom!");

console.log(myPost.itemTitle());

//  Override:
class Base {
  someMethod() {
    console.log("Something");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("Something else");
  }
}

const myObject = new Nova();
myObject.someMethod();

//  Visibilidade Public:
class C {
  public x = 10;
}

class D extends C {}

const cInstance = new C();
console.log(cInstance.x);

const dInstance = new D();
console.log(dInstance.x);

//  Visibilidade Protected:
class E {
  protected x = 10;
}

class F extends E {
  showX() {
    console.log(`X = ${this.x}`);
  }
}
const fInstance = new F();
fInstance.showX();

//  Visibilidade Private:
class PrivateClass {
  private name = "Private";
  showName() {
    return this.name;
  }
}

const pObj = new PrivateClass();
console.log(pObj.showName());

//  Static Methods:
class StaticMembers {
  static prop = "Teste static";
  static staticMethod() {
    console.log("Este é um método estático");
  }
}
console.log(StaticMembers.prop);
StaticMembers.staticMethod();

//  Generics Classes:
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `First é ${this.first}`;
  }
}

const newItem = new Item("Caixa", "surpresa");
newItem;
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);

const newItem2 = new Item(12, true);
console.log(newItem2);
console.log(typeof newItem2.first);
console.log(typeof newItem2.showFirst);
console.log(typeof newItem2.second);

//  Parameters properties:
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }
  get showQty() {
    return `Qty total: ${this.qty}`;
  }
  get showPrice() {
    return `Price total: ${this.price}`;
  }
}

const newShirt = new ParameterProperties("Camisa", 5, 80);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

//  Class Expression:
const myClass = class<T> {
  name;
  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Jones");
pessoa;
console.log(pessoa.name);

//  Classe Abstrata:
abstract class AbstractClass {
  abstract showName(): void;
}
