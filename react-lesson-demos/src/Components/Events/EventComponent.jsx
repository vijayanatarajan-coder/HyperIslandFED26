import React, { useState } from "react";

const EventComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  const [keyPressed, setKeyPressed] = useState("");

  function handleClick() {
    alert("Button clicked!");
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleKeyPress(event) {
    setKeyPressed(event.key);
  }

  return (
    <div>
      <h1>Event Handling in React</h1>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Input value: {inputValue}</p>
      <br />
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: mouseOver ? "lightblue" : "lightgray",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Hover over me!
      </div>
      <br />
      <input
        type="text"
        onKeyDown={handleKeyPress}
        placeholder="Press any key..."
        readOnly
      />
      <p>Last key pressed: {keyPressed}</p>
    </div>
  );
};

export default EventComponent;
