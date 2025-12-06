import React from "react";

const Navbar = (props) => {
  console.log(props);

  function changeTheme() {
    // console.log("theme change ho gya", props.theme);
    props.setTheme('dark');
  }
  return (
    <div>
        <h2>{props.theme}</h2>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
