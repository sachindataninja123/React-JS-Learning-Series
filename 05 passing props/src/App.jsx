import React from "react";
import "./App.css";
import Card from "./Card";
import Card2 from "./Card2";

const App = () => {
  const users = [
    {
      name: "Rahul Sharma",
      age: 28,
      city: "Mumbai",
      profession: "Software Engineer",
      profile_picture: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ananya Verma",
      age: 24,
      city: "Delhi",
      profession: "Graphic Designer",
      profile_picture: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Karan Mehta",
      age: 31,
      city: "Bengaluru",
      profession: "Data Scientist",
      profile_picture: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      name: "Priya Iyer",
      age: 27,
      city: "Chennai",
      profession: "Doctor",
      profile_picture: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      name: "Amit Joshi",
      age: 35,
      city: "Pune",
      profession: "Entrepreneur",
      profile_picture: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];
  return (
    <div>
      <div className="p-10 text-center m-5">
        {users.map(function (elem) {
          return (
            <Card2
              name={elem.name}
              city={elem.city}
              age={elem.age}
              profession={elem.profession}
              image={elem.profile_picture}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
