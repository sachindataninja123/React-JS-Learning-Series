import React from "react";
import { createContext } from "react";

export const DataContext = createContext();

const Usercontext = ({ children }) => {
  const userName = "Sachin";

  return (
    <div>
      <DataContext.Provider value={userName}>{children}</DataContext.Provider>
    </div>
  );
};
export default Usercontext;
