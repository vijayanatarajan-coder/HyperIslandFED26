import React from "react";
import "./MyFirstComponent.css";
import MySecondComponent from "./MySecondComponent";

function MyFirstComponent(props) {
  return (
    <div className="componentContainer">
      <h1>Welcome from my first component</h1>
      <MySecondComponent {...props} />
    </div>
  );
}

export default MyFirstComponent; // default export
