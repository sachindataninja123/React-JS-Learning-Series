import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(() => {
    console.log("UseEffect chal rha h...")
    console.log(Math.random())
  },[num2])

  return (
    <div>
      <h1>num {num}</h1>
      <h1>num2 {num2}</h1>
      <button
        onClick={() => {
          setNum(num + 5);
          setNum2(num2 + 10);
        }}
      >
        click here
      </button>
    </div>
  );
};

export default App;
