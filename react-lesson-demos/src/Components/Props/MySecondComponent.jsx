import React from "react";

function MySecondComponent({ name, age, city, hobbies }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
    </div>
  );
}

export default MySecondComponent;
