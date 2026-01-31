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
          <h2 className="text-3xl font-semibold pl-4">Your Collection</h2>
          <button
            onClick={(item) => clearFromCollection(item)}
            className="px-5 py-2 text-lg bg-red-500 rounded active:scale-95 cursor-pointer "
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-4xl text-center font-semibold m-3">
          Collection is Empty
        </h2>
      )}
      <div className="flex flex-wrap w-full justify-start gap-6 overflow-auto px-4 py-6">
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
