import React, { useState } from 'react'
import "./App.css"

const Counter = () => {

const [value , setCount] = useState(0);

    function increment() {
        setCount(value + 1);
    }
    function decrement() {
        setCount((value - 1));
    }
  return (
    <div>
      <h1>Number is : {value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => {
        setCount(0)
      }}>Reset</button>
    </div>
  )
}

export default Counter
