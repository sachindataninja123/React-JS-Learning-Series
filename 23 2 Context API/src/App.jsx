import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import { DataContext } from "./context/Usercontext";
import { useContext } from "react";

const App = () => {
  const data = useContext(DataContext);

  return (
    <div>
      <h1>This is app.js: {data}</h1>
      <Header />
      <Footer />
      <Section />
    </div>
  );
};

export default App;
