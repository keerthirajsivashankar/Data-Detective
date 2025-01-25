import React from "react";
import { Link } from "react-router-dom";
import Logo from "./icon.png"
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
      <img src={Logo} alt="Logo" className="Logo" />
      <h1 className="controls">Fraud Detection</h1>
        <ul>
          <li><h3><Link to="/">Home</Link></h3></li>
          <li><h3><Link to="/processing">Upload File</Link></h3></li>
          <li><h3><Link to="/profile">Profile</Link></h3></li>
          <li><h3><Link to="/profile">Pricing</Link></h3></li>
        </ul>
      <button className="buttonh"><h3>Sign Up/Login</h3></button>
      </nav>
    </header>
  );
};

export default Header;
