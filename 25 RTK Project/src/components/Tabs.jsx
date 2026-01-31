import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);
  console.log(activeTab)

  return (
    <div className="flex items-center gap-7 m-5 ">
      {tabs.map((elem, idx) => {
        return (
          <div
            className={`${activeTab === elem ? "bg-blue-500" : "bg-gray-600"}  rounded px-4 py-2 transition-all  text-white cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
          >
            {elem}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
