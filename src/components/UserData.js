/* Crie um componente chamado `UserData` que, ao ser montado, faz uma 
requisição para uma API fictícia (você pode simular usando `setTimeout`) 
e exibe os dados do usuário (nome, e-mail, etc.).
 */
import React, { useState, useEffect } from "react";

const UserData = () => {
  const [Data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const Data = [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          age: 30,
          city: "New York",
        },
        {
          name: "John Doe",
          email: "john.doe@example.com",
          age: 30,
          city: "New York",
        },
      ];
      setData(Data);
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <h2>User Data</h2>
      <div className="UserDataDiv">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          Data.map((item, i) => (
            <div key={i}>
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Age:</strong> {item.age}
              </p>
              <p>
                <strong>City:</strong> {item.city}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default UserData;
