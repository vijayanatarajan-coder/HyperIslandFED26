import React from "react";

const Person = ({ props }) => {
  const hobbies = props.info.hobbies;
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Age: {props.info.age}</p>
      <p> City: {props.info.city}</p>
      <p> Job: {props.info.job}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
    </>
  );
};

export default Person;
