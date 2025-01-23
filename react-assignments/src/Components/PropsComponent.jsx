import React from "react";

function PropsComponent(props) {
  const { name, info } = props;
  return (
    <>
      <h1>{name}</h1>
      <p>Age: {info.age}</p>
      <p>City: {info.city}</p>
      <p>Job: {info.job}</p>
      <h2>Hobbies:</h2>
      <ul>
        {info.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default PropsComponent;
