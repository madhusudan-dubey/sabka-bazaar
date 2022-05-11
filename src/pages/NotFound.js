import React, { useEffect } from "react";
import Wrapper from "../layout/Wrapper";

const NotFound = () => {
  useEffect(() => {
    console.log("runng");
  }, []);
  return (
    <>
      <h1>404 - Not Found</h1>
    </>
  );
};

export default NotFound;
