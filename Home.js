import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // You can create a CSS file for your Navbar component

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <h1 className="logo">DevDeakin</h1>
      </div>
      <div className="right-section">
        <input type="text" placeholder="Search" className="search-input" />
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
