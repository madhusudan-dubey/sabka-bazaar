import React from "react";

const Wrapper = ({ children, style }) => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row" style={style}>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Wrapper;
