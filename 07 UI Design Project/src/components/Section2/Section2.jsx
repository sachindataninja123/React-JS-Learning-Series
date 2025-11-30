import React from "react";
import NavBar from "../section1/NavBar";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Section2 = () => {
  return (
    <>
      <div className="border w-[90%] m-auto"></div>
      <div className="h-screen w-full pt-2 bg-gray-200 ">
        <NavBar />

        <div className="flex items-center justify-between gap-10 px-20 py-9 mb-5">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </>
  );
};

export default Section2;
