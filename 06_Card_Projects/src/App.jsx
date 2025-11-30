import React from "react";
import "./App.css";
import Card from "./components/Card";
import User from "./User.json";

const App = () => {
  return (
    <div className="flex flex-wrap  items-center justify-center ">
      {User.map((elem, idx) => {
        return <Card data={elem} key={idx}/>;
      })}
    </div>
  );
};

export default App;
