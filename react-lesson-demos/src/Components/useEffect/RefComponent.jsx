import React, { useRef, useEffect, useState, forwardRef } from "react";

// Create a component that forwards its ref to an input element
const InputComponent = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

const RefComponent = () => {
  // Create a ref to store the input element
  const inputRef = useRef(null);

  // Create a ref to store a mutable value
  const countRef = useRef(0);

  // Create a ref to store the previous state value
  const prevCountRef = useRef();

  // Create a state to demonstrate previous state value
  const [count, setCount] = useState(0);

  // Create a ref to store an interval ID
  const intervalRef = useRef();

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
    console.log(inputRef.current);
  }, []);

  useEffect(() => {
    // Store the previous count value
    prevCountRef.current = count;
  }, [count]);

  const handleButtonClick = () => {
    // Increment the countRef value
    countRef.current += 1;
    console.log(`Button clicked ${countRef.current} times`);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <InputComponent ref={inputRef} placeholder="Focus me on mount" />
      <button onClick={handleButtonClick}>Click me</button>
      <button onClick={startInterval}>Start Interval</button>
      <button onClick={stopInterval}>Stop Interval</button>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
    </div>
  );
};

export default RefComponent;
