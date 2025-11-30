import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaExclamation } from "react-icons/fa";

const LeftCont = () => {
  return (
    <>
      <div className=" w-[40%]  h-[80vh]">
        <div className="p-5 flex justify-between flex-col">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
              The{" "}
              <span className="bg-green-300 rounded-full px-2 py-1">
                opportunity
              </span>
            </h1>
            <p className="text-lg leading-tight">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              voluptatum mollitia unde quod error. Autem perspiciatis quasi
              veritatis quia totam exercitationem amet? Molestiae corporis amet,
              quidem sequi praesentium culpa nostrum aspernatur.
            </p>
            <p className="text-lg leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id
              doloribus aut soluta quasi reiciendis ipsam odit assumenda
              corporis provident nemo, rem quis ipsa voluptas pariatur ratione,
              illo dicta error!
            </p>
          </div>
          <div className="flex items-center mt-60">
            <button className="bg-gray-400 px-10 rounded-full py-2 ">
              <FaExclamation />
            </button>
            <button className="bg-gray-400 px-2 rounded-full py-2 ml-3 ">
              <ImArrowUpRight2 />
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default LeftCont;
