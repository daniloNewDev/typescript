"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  Exemplo Decorator:
function myDecorator() {
    console.log("iniciando Decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("Executando Decorator!");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando a execução do método!");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
//myObj.testing();
//  Multiplos Decorators:
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou A");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("Executou B");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando Execução.");
    }
}
__decorate([
    b(),
    a()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
//  Decorator de Classes:
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando Usuário!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const iaacov = new User("Iaacov");
console.log(iaacov);
//  Decorator de Métodos:
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `Nome da Máquina: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
//  Acessor Decorator:
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do Monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do Monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
//  Property Decorator:
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal; //padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
//  Class Decorator:
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);
//  Método Decorator:
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Post já realizado!");
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do Usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Primeiro Post!!!", newPost.alreadyPosted);
newPost.post("Segundo Post!!!", newPost.alreadyPosted);
//  Property Decorator:
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return getter;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve conter no máximo ${limit} dígitos`);
            }
            else {
                return newVal;
            }
        };
        Object.defineProperty(target, propertyKey, { get: getter, set: setter });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
let david = new Admin("DavidAdm");
