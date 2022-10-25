import React from "react";
import "./cardHeading.css";
const CardHeading = ({ headingText, secondary, ...rest }) => {
  return (
    <div className="heading-container">
      <p className="heading-text">{headingText}</p>
      <div>{secondary}</div>
    </div>
  );
};

export default CardHeading;
