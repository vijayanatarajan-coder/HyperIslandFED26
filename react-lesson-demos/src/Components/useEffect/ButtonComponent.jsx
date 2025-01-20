import React, { forwardRef } from "react";

// Create a component that forwards its ref to a button element
const ButtonComponent = forwardRef((props, ref) => {
  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  );
});

export default ButtonComponent;
