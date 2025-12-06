import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h2>Portfolio</h2>
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/skill">Skill</Link>
          <Link to="/project">Project</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
