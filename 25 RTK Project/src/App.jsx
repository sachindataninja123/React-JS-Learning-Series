import React, { useEffect } from "react";
import "./App.css";
import { fetchPhotos, fetchvideos } from "./api/mediaApi";

const App = () => {
  return (
    <div>
      <div className="h-screen w-full bg-gray-950 text-white">
        <button
          onClick={async () => {
            const data = await fetchPhotos("dog");
            console.log(data.results);
          }}
          className="bg-gray-500 p-2 rounded-full m-5"
        >
          Get photos
        </button>

        <button
          onClick={async () => {
            const data = await fetchvideos("dog");
            console.log(data.videos);
          }}
          className="bg-green-500 p-2 rounded-full m-5"
        >
          Get videos
        </button>
      </div>
    </div>
  );
};

export default App;
