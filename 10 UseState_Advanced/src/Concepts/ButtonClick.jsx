import React, { useState } from "react";

const ButtonClick = () => {
  const [num, setNum] = useState(0);

  const changeNum = () => {
    console.log(num); // 0
    setNum(40);
    console.log(num); // 0 because asynchronous behavior
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeNum}>click me</button>
    </div>
  );
};

export default ButtonClick;
