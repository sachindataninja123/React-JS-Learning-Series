import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
