import React from "react";

const Card = (props) => {
//   console.log(props.user);
  return (
    <div>
      <h2>{props.user}  {props.surname} </h2>
      <h2>{props.city} , {props.age}</h2>
      <button>Add Friend</button>
    </div>
  );
};

export default Card;
