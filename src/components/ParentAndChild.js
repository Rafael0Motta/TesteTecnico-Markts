/* Crie dois componentes: `Parent` e `Child`. O componente `Parent` deve
 conter um estado que armazena um número. O componente `Child` deve exibir 
 esse número e ter um botão que, quando clicado, incrementa
  o número no componente `Parent`.
 */

import React, { useState } from "react";

const Parent = () => {
  const [contador, setContador] = useState(0);

  const somar = () => {
    setContador(contador + 1);
  };

  return <Child contador={contador} somar={somar} />;
};

const Child = ({ contador, somar }) => {
  return (
    <>
      <h2>Contador: {contador}</h2>
      <button onClick={somar}>Somar</button>
    </>
  );
};

export default Parent;
