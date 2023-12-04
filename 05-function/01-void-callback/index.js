"use strict";
//  01- Void
function withOutReturn() {
    console.log("Função sem retorno.");
}
//  02- Callback como argumento:
function greeting(name) {
    return `Shalom, ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Danilo");
preGreeting(greeting, "Ruth");
//  03- Generic Function:
