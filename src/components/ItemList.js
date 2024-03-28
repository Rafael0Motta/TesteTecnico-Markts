/* Crie um componente chamado `ItemList` que 
recebe uma lista de itens (strings) como propriedade
e exibe esses itens em uma lista ordenada (`<ol>`).
*/

import React from "react";

const ItemList = ({ items }) => {
  return (
    <>
      <ol>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default ItemList;
