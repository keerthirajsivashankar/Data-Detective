import React from "react";
import { Link } from "react-router-dom";
import Logo from "./icon.png"
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
      <img src={Logo} alt="Logo" className="Logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/processing">Upload File</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
