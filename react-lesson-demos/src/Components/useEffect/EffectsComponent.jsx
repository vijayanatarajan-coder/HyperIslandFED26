import React, { useState, useEffect } from "react";

const EffectsComponent = () => {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  // This useEffect runs once after the initial render
  useEffect(() => {
    console.log("Component mounted");

    // Cleanup function runs when the component unmounts
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  // This useEffect runs after every render
  useEffect(() => {
    console.log("Component updated");
  });

  // This useEffect runs only when `count` changes
  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  // This useEffect adds an event listener for window resize and cleans it up on unmount
  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Second count: {secondCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setSecondCount(secondCount + 1)}>
        Increment Second
      </button>
    </div>
  );
};

export default EffectsComponent;
