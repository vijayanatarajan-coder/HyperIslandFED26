import React, { useRef } from "react";
import MyInput from "./MyInput";

// Example 1: Accessing a Child Component's DOM Node
function ParentComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Forwarded ref input" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Example 2: Integrating with Third-Party Libraries
function ParentComponent() {
  const customComponentRef = useRef(null);

  useEffect(() => {
    someLibrary(customComponentRef.current);
  }, []);

  return <MyCustomComponent ref={customComponentRef} />;
}

// Example 3: Creating Higher-Order Components
function withLogging(WrappedComponent) {
  return forwardRef((props, ref) => {
    console.log("Rendering component with props:", props);
    return <WrappedComponent ref={ref} {...props} />;
  });
}

const MyComponent = React.forwardRef((props, ref) => (
  <div ref={ref}>Hello, World!</div>
));

const MyComponentWithLogging = withLogging(MyComponent);

// Example 4: Customizing Exposed Instance Methods
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} {...props} />;
});

function ParentComponent() {
  const customInputRef = useRef();

  return (
    <div>
      <CustomInput ref={customInputRef} />
      <button onClick={() => customInputRef.current.focus()}>Focus</button>
      <button onClick={() => customInputRef.current.clear()}>Clear</button>
    </div>
  );
}

// Example 5: Handling Complex Component Structures
const InnerComponent = forwardRef((props, ref) => (
  <div ref={ref}>Inner Component</div>
));

const MiddleComponent = forwardRef((props, ref) => (
  <InnerComponent ref={ref} {...props} />
));

const OuterComponent = () => {
  const innerRef = useRef(null);

  return (
    <div>
      <MiddleComponent ref={innerRef} />
      <button onClick={() => console.log(innerRef.current)}>Log Ref</button>
    </div>
  );
};
