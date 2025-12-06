import React from "react";
import Nav2 from "./Nav2";

const Navbar = (props) => {
  console.log(props);

  return (
    <div className="nav1">
      <h1>Shreiyans</h1>
      <p>{props.children[0]}</p>
      <p>{props.children[1]}</p>
      <Nav2 theme={props.theme} />
    </div>
  );
};

export default Navbar;
