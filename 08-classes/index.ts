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
