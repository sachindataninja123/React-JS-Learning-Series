import React from "react";
import LeftText from "./LeftText";
import ImageContainer from "./ImageContainer";

const Page1content = () => {
  return (
    <div className="h-[90vh] py-4 px-20 pb-10  flex items-center justify-between gap-7">
      <LeftText />
      <ImageContainer />
    </div>
  );
};

export default Page1content;
