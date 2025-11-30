import React from "react";
import LeftCont from "./LeftCont";
import RightCont from "./RightCont";
import NavBar from "../section1/NavBar";

const Section3 = () => {
  return (
    <>
      <div className="border w-[90%] m-auto "></div>
      <div className="bg-gray-200 h-screen w-full pt-5">
        <NavBar />
        <div className="flex gap-9 items-center justify-between px-20 py-3 w-full">
          <LeftCont />
          <RightCont />
        </div>
      </div>
    </>
  );
};

export default Section3;
