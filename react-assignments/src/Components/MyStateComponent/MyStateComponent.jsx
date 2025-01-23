import React, { useState } from "react";
import "./MyStateComponent.css";

const MyStateComponent = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.name || !inputValue.age) {
      alert("Please fill out both fields.");
      return;
    }
    console.log(`Form submitted with input: ${JSON.stringify(inputValue)}`);

    setInputValue({
      name: "",
      age: "",
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className="form-container">
        <h1>Form</h1>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            value={inputValue.age}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MyStateComponent;
