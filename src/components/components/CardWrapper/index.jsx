import React from "react";
import "./cardWrapper.css";

const CardWrapper = ({ children, color, ...rest }) => {
  return (
    <div className={`card-wrapper`} style={{ background: color }}>
      {children}
    </div>
  );
};

export default CardWrapper;
