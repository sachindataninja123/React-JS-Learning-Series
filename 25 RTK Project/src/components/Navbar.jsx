import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex bg-gray-900 items-center px-5 justify-between">
        <NavLink to="/" className=" lg:p-5 py-5  lg:text-2xl font-semibold text-xl">
          Media Search
        </NavLink>
        <div className="flex items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "bg-blue-600 font-bold px-3 py-2 rounded" : 'bg-white text-black px-3 py-2 rounded'
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/collection"
            className={({isActive}) => isActive  ? 'bg-blue-600 font-bold px-3 py-2 rounded' :'bg-white text-black px-3 py-2 rounded'}
          >
            Collection
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
