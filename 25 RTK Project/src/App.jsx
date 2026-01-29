import React, { useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div>
      <div className="h-screen w-full bg-gray-950 text-white">
        <SearchBar />
        <Tabs/>
        <ResultGrid />
      </div>
    </div>
  );
};

export default App;
