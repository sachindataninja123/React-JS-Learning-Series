import React from "react";
import "./App.css";

const App = () => {
  ////four methods : clear() , setItem(), getItem() , removeItem()

  // localStorage.clear();
  // localStorage.setItem("name", "sachin");
  // localStorage.setItem("age", "19");
  // localStorage.setItem("state", "bihar");

  // const age = localStorage.getItem("age");
  // const user = localStorage.getItem("name");
  // console.log(age);
  // console.log(user);

  // localStorage.removeItem('age')

  // const data = { name: "sachin", age: "19", state: "Bihar", course: "B.tech" };

  // localStorage.setItem('data', JSON.stringify(data))

  const user = localStorage.getItem("data")
  console.log(user)
  console.log(JSON.parse(user))


  return <div></div>;
};

export default App;
