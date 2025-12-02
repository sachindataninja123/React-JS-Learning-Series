import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );

    const UsersData = await response.json();

    setData(UsersData);
    // console.log(UsersData);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let PrintUserData = (
    <h3 className="text-gray-500 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading....
    </h3>
  );

  {
    if (data.length > 0) {
      PrintUserData = data.map((elem, idx) => {
        return (
          <div key={idx}>
            <a href={elem.url} target="_blank">
              <div className=" h-60 w-70 rounded-xl overflow-hidden ">
                <img
                  className="h-full w-full object-cover"
                  src={elem.download_url}
                  alt=""
                />
              </div>
            </a>
            <h1 className="text-xl">{elem.author}</h1>
          </div>
        );
      });
    }
  }

  return (
    <>
      <div className="bg-black overflow-auto text-white h-screen w-full">
        {/* <button
        onClick={getData}
        className="bg-green-600 m-6 px-8 py-4 rounded-[5px] active:scale-95 cursor-pointer"
      >
        GetData
      </button> */}
        <div className="flex flex-wrap  gap-5 ml-4 mt-3">{PrintUserData}</div>
        <div className="flex justify-center items-center gap-5 p-4 m-4">
          <button
            style={{ opacity: index == 1 ? 0.6 : 1 }}
            className="bg-amber-400 text-black px-4 py-2 font-semibold rounded-sm  active:scale-95 cursor-pointer"
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setData([]);
              }
            }}
          >
            Prev
          </button>
          <h2>Page {index}</h2>
          <button
            className="bg-amber-400 text-black px-4 py-2 font-semibold rounded-sm active:scale-95 cursor-pointer"
            onClick={() => {
              setData([]);
              setIndex(index + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
