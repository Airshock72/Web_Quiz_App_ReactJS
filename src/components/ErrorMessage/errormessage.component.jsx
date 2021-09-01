import React from "react";
import "./errormessage.styles.css";

const ErrorMessage = ({ children }) => {
  return <div className="error-message">{children}</div>;
};

export default ErrorMessage;
