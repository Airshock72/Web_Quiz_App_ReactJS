import React from "react";
import "./header.styles.css";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        Web Quiz
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
