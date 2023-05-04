import React, { useState } from "react";
import AddUser from "./Componetns/Users/AddUser";
import UsersList from "./Componetns/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, { name: uName, age: uAge, id:Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAdduser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
