"use strict";
//  Campos em classes:
class User {
}
const danilo = new User();
danilo;
danilo.name = "Danilo";
danilo.age = 38;
danilo;
//  Constructor:
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const moshe = new NewUser("Moshe", 60);
moshe;
const iossef = new NewUser("Iossef", 40);
//  Propriedades readonly:
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
fusca;
//  Herança e Super:
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
trator;
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
destroyer;
//  Métodos:
class Dwarf {
    constructor(name) {
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
    constructor(name, surname) {
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
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
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
class blogPost {
    constructor(title) {
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
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//  Visibilidade Protected:
class E {
    constructor() {
        this.x = 10;
    }
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
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
//  Static Methods:
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
//  Generics Classes:
class Item {
    constructor(first, second) {
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
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
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
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
pessoa;
console.log(pessoa.name);
//  Classe Abstrata:
class AbstractClass {
}
