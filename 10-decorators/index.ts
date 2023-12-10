//  Exemplo Decorator:
function myDecorator() {
  console.log("iniciando Decorator!");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando Decorator!");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando a execução do método!");
  }
}

const myObj = new myClass();
//myObj.testing();

//  Multiplos Decorators:
function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou A");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou B");
  };
}

class MultipleDecorators {
  @b()
  @a()
  testing() {
    console.log("Terminando Execução.");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

//  Decorator de Classes:
function classDec(constructor: Function) {
  console.log(constructor);
  if (constructor.name === "User") {
    console.log("Criando Usuário!");
  }
}
@classDec
class User {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const iaacov = new User("Iaacov");
console.log(iaacov);

//  Decorator de Métodos:

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
  @enumerable(false)
  showName() {
    console.log(this);
    return `Nome da Máquina: ${this.name}`;
  }
}

const trator = new Machine("Trator");
console.log(trator.showName());

//  Acessor Decorator:
class Monster {
  name?;
  age?;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @enumerable(true)
  get showName() {
    return `Nome do Monstro: ${this.name}`;
  }
  @enumerable(false)
  get showAge() {
    return `Idade do Monstro: ${this.age}`;
  }
}

const charmander = new Monster("Charmander", 10);
console.log(charmander);

//  Property Decorator:
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (newVal: string) {
      value = newVal; //padStart(5, "0");
    };
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id;
  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");
console.log(newItem);

//  Class Decorator:
function createDate(created: Function) {
  created.prototype.createdAt = new Date();
}
@createDate
class Book {
  id;
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}
@createDate
class Pen {
  id;
  constructor(id: number) {
    this.id = id;
  }
}
const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook);
console.log(newPen);

console.log(newBook.createdAt);

//  Método Decorator:
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Post já realizado!");
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do Usuário: ${content}`);
  }
}
const newPost = new Post();

newPost.post("Primeiro Post!!!", newPost.alreadyPosted);
newPost.post("Segundo Post!!!", newPost.alreadyPosted);

//  Property Decorator:
function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return getter;
    };
    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve conter no máximo ${limit} dígitos`);
      } else {
        return newVal;
      }
    };
    Object.defineProperty(target, propertyKey, { get: getter, set: setter });
  };
}

class Admin {
  @Max(10)
  username;
  constructor(username: string) {
    this.username = username;
  }
}
let david = new Admin("DavidAdm");
