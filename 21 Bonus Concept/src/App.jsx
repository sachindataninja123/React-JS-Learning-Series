import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <h1>This is a {theme} Theme.</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
