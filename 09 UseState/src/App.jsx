import React, { use, useState } from "react";
import "./App.css";
import Counter from "./project/Counter";

const App = () => {
  // let [a , setA] = useState(20);

  // function changeA() {
  //   setA(++a);
  // }

  return (
    // <div>
    //   <h1>value of a is = {a}</h1>
    //   <button onClick={changeA}>changeA</button>
    // </div>

    <Counter />
  );
};

export default App;
