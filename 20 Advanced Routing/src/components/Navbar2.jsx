import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-700">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="font-medium bg-amber-800 px-7 py-2 rounded-[5px] cursor-pointer active:scale-95 m-4"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="font-medium bg-amber-800 px-7 py-2 rounded-[5px] cursor-pointer active:scale-95 m-4"
      >
        Back
      </button>
       <button
        onClick={() => {
          navigate(+1);
        }}
        className="font-medium bg-amber-800 px-7 py-2 rounded-[5px] cursor-pointer active:scale-95 m-4"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
