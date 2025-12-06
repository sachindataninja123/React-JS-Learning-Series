import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-20 py-5 bg-[#643EEE]">
      <h2 className="text-2xl font-bold"> Portfolio</h2>
      <div className="flex items-center justify-center gap-10 text-lg">
        <Link to="/">Home</Link>
        <Link to="/skill">Skill</Link>
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
