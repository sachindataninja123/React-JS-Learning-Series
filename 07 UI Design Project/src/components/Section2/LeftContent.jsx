import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

const LeftContent = () => {
  return (
    <>
      <div className=" h-[80vh] w-[50%] p-5 flex items-center justify-between flex-col">
      <div>
          <h1 className="text-5xl font-bold">E-com market is expected to exceed $300B in 2027</h1>
        <div className="flex items-start justify-center gap-3 mt-9">
          <div className="mt-2">
            <FaBoltLightning />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            corporis commodi id quos nulla ut excepturi odit ullam harum
            voluptatibus!Totam
            corporis commodi id quos.
          </p>
        </div>
      </div>

        <div className="flex items-center justify-between gap-8">
          <div className="bg-blue-400 p-5 rounded-2xl h-[250px] relative ">
            <h1 className="text-4xl font-bold">27.5%</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="absolute right-0 bottom-0 p-3 bg-black rounded-full m-3 text-white text-4xl">
                <MdOutlineArrowOutward />
            </div>
          </div>
          <div className="bg-green-300 p-5 rounded-2xl h-[250px] relative">
            <h2 className="text-4xl font-bold">32.9%</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
             <div className="absolute right-0 bottom-0 p-3 bg-black rounded-full m-3 text-white text-4xl">
                <MdOutlineArrowOutward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
