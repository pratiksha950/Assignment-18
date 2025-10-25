import React from 'react';
import './Navbar.css';

function Navbar({ activeMenu }) {
  return (
    <div className="navbar">
      <a href="/" className={`menu ${activeMenu === "/" ? "bold" : ""}`}>Home</a>
      <a href="/About" className={`menu ${activeMenu === "/About" ? "bold" : ""}`}>About</a>
      <a href="/Contact" className={`menu ${activeMenu === "/Contact" ? "bold" : ""}`}>Contact</a>
    </div>
  );
}

export default Navbar;
