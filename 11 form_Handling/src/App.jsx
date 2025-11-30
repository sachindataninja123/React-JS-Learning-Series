import React from "react";
import "./App.css";

const App = () => {
  function submitHandler(e) {
    e.preventDefault();
    console.log("form submit ho gya");
  }
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Enter your name" />
        <button onClick={(e) => submitHandler(e)}>submit</button>
      </form>
    </div>
  );
};

export default App;
