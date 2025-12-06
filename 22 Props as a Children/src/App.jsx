import Navbar from "./components/Navbar";
import React, { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Navbar theme={theme}>
        <p>Props as a children 1</p>
        <p>props as a children 2</p>
      </Navbar>
    </div>
  );
};

export default App;
