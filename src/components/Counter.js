/* Crie um componente chamado `Counter` que exibe 
um contador e possui dois botões: um para incrementar 
e outro para decrementar o valor do contador. O valor
do contador deve ser exibido na tela.
 */

import { React, useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(0);

  const somar = () => {
    setContador(contador + 1);
  };

  const Subtrair = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h2>Contador: {contador}</h2>
      <button onClick={somar}>Somar</button>
      <button onClick={Subtrair}>Subtrair</button>
    </>
  );
};

export default Counter;
