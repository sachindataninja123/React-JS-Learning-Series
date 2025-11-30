import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUserName] = useState("");

  const submitHnadler = (e) => {
    e.preventDefault();
    console.log(username);
    setUserName("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHnadler(e);
        }}
      >
        <input className="p-5 text-2xl w-full border mb-7 rounded-md"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          placeholder="Enter Name"
        />
        <button className="bg-blue-400 p-4 text-2xl rounded-md" >Submit</button>
      </form>
    </div>
  );
};

export default App;
