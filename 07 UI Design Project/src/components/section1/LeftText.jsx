import React from "react";

import Herotext from "./Herotext";
import Arrow from "./Arrow";

const LeftText = () => {
  return (
    <div className=" w-1/3  h-full flex items-start justify-between flex-col p-1">
        <Herotext />
        <Arrow />
    </div>
  );
};

export default LeftText;
