import React from "react";

const MyWrapperComponent = ({ Component, ComponentProps }) => {
  return (
    <div className="wrapper">
      <Component {...ComponentProps} />
    </div>
  );
};

export default MyWrapperComponent;
