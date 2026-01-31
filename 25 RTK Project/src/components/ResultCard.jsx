import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollecton = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast())
    // console.log("added");
  };

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <div className="h-full">
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </div>
      <div
        id="bottom"
        className="w-full px-2 py-6 absolute bottom-0 items-center justify-between flex gap-5 text-white"
      >
        <h2 className="text-sm font-semibold line-clamp-2 capitalize">
          {item.title}
        </h2>
        <button
          onClick={() => {
            addToCollecton(item);
          }}
          className="bg-blue-500 rounded px-3 py-1 cursor-pointer active:scale-95"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
