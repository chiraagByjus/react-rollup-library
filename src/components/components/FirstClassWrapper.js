import React from "react";
import FirstClass from "./FirstClass";

const FirstClassWrapper = ({ headingText, color }) => {
  return (
    <div>
      <FirstClass headingText={headingText} color={color} />
    </div>
  );
};

export default FirstClassWrapper;
