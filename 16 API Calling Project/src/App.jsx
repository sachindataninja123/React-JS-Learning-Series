import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    // console.log(response.data);
    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    getData();
  });
  
  return (
    <div>
      {/* <button
        onClick={getData}
        className="bg-teal-600 px-7 py-3 rounded m-10 font-bold  text-white text-2xl  active:scale-95"
      >
        Get Data
      </button> */}

      <div className="p-5 m-5 text-white text-2xl border-2 bg-gray-950">
        {data.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="flex items-center justify-between text-black bg-gray-400 border-2 p-2"
            >
              <img className="h-40 " src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
