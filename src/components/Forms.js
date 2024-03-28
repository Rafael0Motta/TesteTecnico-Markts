/* Crie um formulário de login com os seguintes campos: usuário e senha. Utilize 
um componente controlado para gerenciar o estado do formulário. Exiba os valores
 inseridos pelo usuário abaixo do formulário.
 */
import React, { useState } from "react";

const Forms = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [submittedUser, setSubmittedUser] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUser(user);
    setSubmittedPassword(password);
  };

  return (
    <>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Enviar" />
        </form>
        <div>
          <p>Usuário inserido: {submittedUser}</p>
          <p>Senha inserida: {submittedPassword}</p>
        </div>
      </div>
    </>
  );
};

export default Forms;
