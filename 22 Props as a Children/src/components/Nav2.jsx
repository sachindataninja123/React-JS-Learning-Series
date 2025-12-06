import React from "react";

const Nav2 = (props) => {
  return (
    <div className="nav2">
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Courses</h2>
      <h2>Contact</h2>

      <h4>{props.theme}</h4>
    </div>
  );
};

export default Nav2;
