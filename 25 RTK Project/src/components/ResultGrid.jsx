import React, { useEffect } from "react";
import { fetchPhotos, fetchvideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
import Loader from "./Loader";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading())
        let data = [];
        if (activeTab === "Photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }

        if (activeTab === "Videos") {
          let response = await fetchvideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err));
      }
    };

    getData();
  }, [query, activeTab,dispatch]);

  if (error) return <h1>Error</h1>;
  if (loading) return <Loader />;

  return (
    <div className="flex flex-wrap w-full justify-center gap-6 overflow-auto pb-6 ">
      {results.map((item, idx) => {
        return (
          <ResultCard key={idx} item={item} />
        );
      })}
    </div>
  );
};

export default ResultGrid;
