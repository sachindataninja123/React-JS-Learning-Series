import React, { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);

  function increment() {
    setcounter(counter + 1);
  }
  function decrement() {
    setcounter(counter - 1);
  }
  function reset() {
    setcounter(0);
  }
  return (
    <div>
      <h1>Value of counter is = {counter}</h1>
      <button onClick={increment}>Increment</button><br />
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
