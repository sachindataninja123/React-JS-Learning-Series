import React from "react";
import { useState } from "react";

const HandleObject = () => {
  const [num, setNum] = useState({ user: "sachin", age: "19" });

  const changeUserDet = () => {
    const newNum = { ...num };
    console.log(newNum);
    newNum.user = "Rajesh";
    newNum.age = "25";
    console.log(newNum);
    setNum(newNum);
  };
  return (
    <div>
      <h1>
        {num.user}, {num.age}
      </h1>
      <button onClick={changeUserDet}>change user</button>
    </div>
  );
};

export default HandleObject;
