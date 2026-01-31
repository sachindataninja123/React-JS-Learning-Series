import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <div>
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
              removeFromCollection(item);
            }}
            className="bg-red-500 rounded px-3 py-1 cursor-pointer active:scale-95"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
