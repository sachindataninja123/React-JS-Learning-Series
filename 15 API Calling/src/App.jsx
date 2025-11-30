import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos"
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };

  // async function getData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //   const userData = await response.json();

  //   console.log(userData);
  // }

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    // console.log(response.data);
    setData(response.data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map((elem ,key) => {
        return(
          <div key={key}>
            <h2 key={key}>hello ,{elem.author} {key}</h2>
          </div>
        )
      })}
    </div>
  );
};

export default App;
