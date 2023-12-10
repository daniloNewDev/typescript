import React from "react";
//  impoertação de componentes:
import FirstComponent from "./components/firstcomponent";

import SecondComponent from "./components/secondcomponent";

import Destructuring from "./components/destructuring";

function App() {
  //  Variáveis.
  const name: string = "Danilo";
  const age: number = 30;
  const isWorking: boolean = false;

  //  Funções:
  const userGreeting = (name: string): string => {
    return `Shalom, ${name}!`;
  };

  return (
    <div className="App">
      <h1>TypeScript com React!</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando.</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Segundo" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        comentsQty={10}
      />
    </div>
  );
}

export default App;
