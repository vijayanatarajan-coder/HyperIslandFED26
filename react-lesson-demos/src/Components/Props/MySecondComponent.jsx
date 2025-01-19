import React from "react";

function MySecondComponent(user) {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <p>Hobbies: {user.hobbies.join(", ")}</p>
    </div>
  );
}

export default MySecondComponent;
