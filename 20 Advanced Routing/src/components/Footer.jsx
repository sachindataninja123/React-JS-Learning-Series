import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#643EEE] absolute bottom-0 w-full py-9 px-20 flex items-start justify-between">
        <div className="flex items-start justify-center flex-col gap-5">
          <h2 className="font-bold text-xl">Portfolio</h2>
          <div className="flex  items-center gap-15">
            <div className="flex flex-col ">
              <a href="/">Websites</a>
              <a href="/">Collections</a>
              <a href="/">Elements</a>
            </div>
            <div className="flex flex-col ">
              <a href="/">Academy</a>
              <a href="/">Jobs</a>
              <a href="/">Market</a>
            </div>
            <div className="flex flex-col ">
              <a href="/">FAQs</a>
              <a href="/">About Us</a>
              <a href="/">Conatct Us</a>
            </div>
          </div>
        </div>

        <div>
          <p className="uppercase">Got a Project in Mind ?</p>
          <h2 className="text-9xl font-bold">Let's talk</h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
