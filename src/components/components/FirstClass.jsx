import React, { useEffect, useState } from "react";
import CardHeading from "./CardHeading";
import CardWrapper from "./CardWrapper";

const FirstClass = ({ headingText, color }) => {
  return (
    <CardWrapper color={color}>
      <CardHeading headingText={headingText} />
    </CardWrapper>
  );
};

export default FirstClass;
