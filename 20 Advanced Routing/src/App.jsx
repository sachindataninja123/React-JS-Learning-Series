import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Python from "./pages/Python";
import Java from "./pages/Java";
import CSS from "./pages/CSS";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/skill" element={<Skill />}>
          <Route path="python" element={<Python />} />
          <Route path="java" element={<Java />} />
          <Route path="css" element={<CSS />} />
        </Route>

        <Route path="/project" element={<Project />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
