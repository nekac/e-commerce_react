import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../Assets/logo.svg";
import "../Styles/header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="option">
      <Link className="logo-container" to="/shop">
        SHOP
      </Link>
      <Link className="logo-container" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
