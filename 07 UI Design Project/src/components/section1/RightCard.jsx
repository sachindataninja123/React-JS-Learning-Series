import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RightCard = ({data}) => {
    console.log(data)
  return (
    <>
      <div className=" h-full w-75 rounded-4xl  overflow-hidden relative shrink-0">
        <img
          className="h-full w-full object-cover"
          src={data.image}
          alt=""
        />
        <div className="absolute top-0 left-0 h-full w-full p-7 flex items-start flex-col justify-between">
          <h2 className="bg-white h-10 w-10 rounded-full flex items-center justify-center text-2xl font-bold">
            {data.id}
          </h2>
          <div className="text-white">
            <p className="text-lg text-shadow-2xs">
              {data.description}
            </p>
            <div className="flex items-center pt-5 justify-between">
              <button style={{backgroundColor : data.themeColor}} className="px-6 py-2 rounded-full font-semibold ">
                {data.title}
              </button>
              <button style={{backgroundColor : data.themeColor}} className=" px-2 py-2 rounded-full font-semibold">
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightCard;
