import React from "react";
import Nav2 from "./Nav2";
import { useContext } from "react";
import { themeDataContext } from "../Context/ThemeContext";

const Navbar = () => {
  const data = useContext(themeDataContext);
//   console.log(data);

  return (
    <div className="nav">
      <h1>{data.value1}</h1>
      <Nav2 />
    </div>
  );
};

export default Navbar;
