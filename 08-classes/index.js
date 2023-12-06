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
