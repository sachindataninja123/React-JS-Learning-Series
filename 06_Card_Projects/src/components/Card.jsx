import React from "react";
import { CiBookmark } from "react-icons/ci";
import data from "../User.json"

const Card = ({data}) => {
  return (
    <>
      <div className="w-[300px] py-7 border rounded-xl bg-gray-100 m-3">
        <div className="flex items-center justify-between px-5">
          <img
            className="h-[50px] w-[50px]  rounded-full border border-[#dadada]"
            src={data.logo}
            alt=""
          />
          <div className="flex items-center justify-around bg-gray-300 py-1 px-2 rounded-[7px] cursor-pointer border border-[#dadada]">
            <button className="cursor-pointer">Save </button>
            <CiBookmark />
          </div>
        </div>
        <div className="flex items-start justify-between flex-col p-7">
          <div className="flex items-center gap-2 justify-center ">
            <h4 className=" text-[20px] font-bold ">{data.company}</h4>
            <p className="text-gray-700 text-[12px] mt-2">{data.posted}</p>
          </div>
          <div>
            <h2 className="text-[24px] ">{data.job_title}</h2>
          </div>
          <div className="flex items-center justify-center gap-3 ">
            <p className="bg-gray-300 px-3 py-1 rounded-md">{data.job_type}</p>
            <p className="bg-gray-300 px-3 py-1 rounded-md mt-1">
              {data.experience_level}
            </p>
          </div>
        </div>

        <div className="border mx-7 mt-6 border-[#dadada]"> </div>
        <div className="flex items-center justify-between px-8 mt-7">
          <div>
            <h2>{data.salary}</h2>
            <p className="text-gray-600">{data.location}</p>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-[7px] cursor-pointer border border-[#dadada]">
            Apply now
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
