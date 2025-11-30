import React, { useState } from "react";

const BatchUpdate = () => {
  const [num, setNum] = useState(0);

  const changeNum = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeNum}>Update Num</button>
    </div>
  );
};

export default BatchUpdate;
