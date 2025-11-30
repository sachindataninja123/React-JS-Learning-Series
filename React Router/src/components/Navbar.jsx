import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-emerald-700 py-7 px-10 text-white flex items-center justify-between">
      <h2 className="text-3xl">Hello</h2>
    
      <div className="flex items-center justify-between gap-10 underline text-lg">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
        <Link to="/header">Header</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
