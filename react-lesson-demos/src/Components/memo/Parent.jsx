import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("Parent component render");
  useEffect(() => {}, [count]);
  return (
    <main>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}> Increment</button>
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
    </main>
  );
};

export default Parent;
