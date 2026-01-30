import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex bg-gray-900 items-center px-5 justify-between">
        <div className=" p-5  text-2xl font-semibold">Media Search</div>
        <div className="flex items-center gap-5">
          <Link
            className="text-base font-medium active:scale-95 bg-blue-800 rounded px-4 py-2"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-base font-medium active:scale-95 bg-blue-800 rounded px-4 py-2"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
