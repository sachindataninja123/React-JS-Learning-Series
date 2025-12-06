import React from "react";
import { useContext } from "react";
import { themeDataContext } from "../Context/ThemeContext";

const Nav2 = () => {
  const fruitsData = useContext(themeDataContext);
//   console.log(fruitsData);

  return (
    <div className="nav2">
      {fruitsData.value2.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
    </div>
  );
};

export default Nav2;
