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
