import Counter from "./components/Counter";
import Forms from "./components/Forms";
import ItemList from "./components/ItemList";
import Parent from "./components/ParentAndChild";
import UserData from "./components/UserData";
import "./style.css";

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <>
      <h3>Exercício 1: Componente de Lista</h3>
      <ItemList items={items} />
      <hr />

      <h3>Exercício 2: Contador</h3>
      <Counter />
      <hr />

      <h3>Exercício 3: Pai e Filho</h3>
      <Parent />
      <hr />

      <h3>Exercício 4: Forms</h3>
      <Forms />
      <hr />

      <h3>Exercício 5: Requisição de Dados</h3>
      <UserData />
      <hr />
    </>
  );
}

export default App;
