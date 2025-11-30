import React from "react";
import "./App.css";

const App = () => {
  // function inputHandler(e) {
  //   console.log(e.target.value);
  // }

  return (
    // <div>
    //   <input
    //     onChange={(e) => inputHandler(e)}
    //     className="inputbox"
    //     type="text"
    //     placeholder="Enter you name"
    //   />
    // </div>

    // <div
    //   className="box"
    //   onMouseMove={(elem) => {
    //     console.log("value of x: ", elem.clientX);
    //     console.log("value of y: ", elem.clientY);
    //   }}
    // ></div>

    <div
      onWheel={function (e) {
        console.log(e.pageX);
        console.log(e.pageY)
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
