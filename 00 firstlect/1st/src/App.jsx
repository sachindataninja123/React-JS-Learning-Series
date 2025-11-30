import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("Sachin");
  const [title, setTitle] = useState("Kushwaha");

  function ChangeUser() {
    console.log("UI update ho gya");
    setUser("Ram");
    setTitle("Bhagat");
  }

  return (
    <div>
      <h1>Hello, Username is {user}</h1>
      <h1>Title of username is {title}</h1>
      <button onClick={ChangeUser}>Change User</button>
    </div>
  );
}

export default App;
