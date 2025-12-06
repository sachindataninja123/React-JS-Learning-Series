import React, { createContext, useState } from "react";

export const themeDataContext = createContext();

const ThemeContext = (props) => {
  console.log(props);

  const [value1, setValue1] = useState("Sachin");
  const [value2, setValue2] = useState([
    "Apple",
    "Mango",
    "Guava",
    "Pineapple",
  ]);

  return (
    <div>
      <themeDataContext.Provider
        value={{ value1, value2, setValue1, setValue2 }}
      >
        {props.children}
      </themeDataContext.Provider>
    </div>
  );
};

export default ThemeContext;
