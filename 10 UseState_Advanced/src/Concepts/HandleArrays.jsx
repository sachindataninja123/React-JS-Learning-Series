import React, { useState } from "react";

const HandleArrays = () => {
  const [num, setNum] = useState([12, 34, 56, 78]);

  const handleArray = () => {
    const newNum = [...num];
    console.log(newNum)
    newNum.push(99); // add elem in last
    newNum.pop(); // remove last elem
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleArray}>Change</button>
    </div>
  );
};

export default HandleArrays;
