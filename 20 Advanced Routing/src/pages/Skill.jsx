import React from "react";
import { Link, Outlet } from "react-router-dom";

const Skill = () => {
  return (
    <>
      <div className="flex text-white items-center justify-center gap-5 py-4">
        <Link className="text-xl font-semibold" to="/skill/java">
          Java
        </Link>
        <Link className="text-xl font-semibold" to="/skill/python">
          Python
        </Link>
        <Link className="text-xl font-semibold" to="/skill/css">
          CSS
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Skill;
