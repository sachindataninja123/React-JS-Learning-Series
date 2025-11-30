import React from "react";
import RightCard from "./RightCard";
import users from "./user.json";

const ImageContainer = () => {
  return (
    <div id="right" className=" w-2/3  h-full p-5 flex overflow-x-auto flex-nowrap gap-7">
      {users.map((elem, key) => {
        return <RightCard data={elem} key={key}/>;
      })}
    </div>
  );
};

export default ImageContainer;
