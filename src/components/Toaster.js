import React from "react";

const Toaster = ({ text }) => {
  return (
    <div className="toaster-wrapper">
      <div className="toaster">{text}</div>
    </div>
  );
};

export default Toaster;
