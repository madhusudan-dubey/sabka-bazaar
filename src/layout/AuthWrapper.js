import React from "react";

const AuthWrapper = ({ children }) => {
  return (
    <div className="auth-wrapper">
      <div className="auth-row row">{children}</div>
    </div>
  );
};

export default AuthWrapper;
