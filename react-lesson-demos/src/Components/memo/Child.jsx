import { memo } from "react";

const Child = memo((props) => {
  console.log("Child Component Rendered");
  return (
    <div>
      <h1>Child Component</h1>
    </div>
  );
});

export default Child;
