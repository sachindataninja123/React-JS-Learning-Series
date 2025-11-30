import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log("form submit ho gya");
    console.log("form submitted by = ", title);

    setTitle("");
  }
  return (
    <div>
      <form action="" onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button>submit</button>
      </form>

      <h1>{title}</h1>
    </div>
  );
};

export default App;
