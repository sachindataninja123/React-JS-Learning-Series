import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import Navbar from "../components/Navbar";
import {
  clearAllToast,
  clearCollection,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const clearFromCollection = (item) => {
    dispatch(clearCollection(item));
    dispatch(clearAllToast());
  };

  return (
    <>
      <Navbar />
      {collection.length > 0 ? (
        <div className="flex items-center justify-between px-6 py-3">
          <h2 className="lg:text-3xl font-semibold lg:pl-4 text-2xl">Your Collection</h2>
          <button
            onClick={(item) => clearFromCollection(item)}
            className="px-5 py-2 text-lg bg-red-500 rounded active:scale-95 cursor-pointer "
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="lg:text-4xl text-center font-semibold m-3 text-2xl">
          Collection is Empty
        </h2>
      )}
      <div
        className="
  w-full
  grid
  gap-6
  pb-6
  px-4
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
"
      >
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CollectionPage;
