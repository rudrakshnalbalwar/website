import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./NSSUnit.css";
import UniversityLogo from "./UniversityLogo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          const dropdown = document.querySelector(".nss-dropdown");
          const menuIcon = document.querySelector(".nss-menu-icon");
          if (dropdown && !dropdown.contains(event.target) && !menuIcon.contains(event.target)) {
            setMenuOpen(false);
          }
        };
    
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);
return(
<div className="nss-container">
      {/* Navbar */}
      <header className="nss-header">
        <div className="nss-header-left">
          <img src={UniversityLogo} alt="University Logo" className="nss-logo" />
          <h1 className="nss-title">RAMDEOBABA UNIVERSITY<span className="nss-sports"> <a href="#" target="_blank">NSS</a> | <a href="https://www.rknec.edu/Sports.aspx" target="_blank">SPORTS</a></span></h1>
        </div>

        {/* Menu Icon */}
        <button className="nss-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <nav className={`nss-dropdown ${menuOpen ? "open" : ""}`}>
            <ul>
            <li><Link to="/">Home</Link></li>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/team">Team</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </nav>
        )}
      </header>
      </div>
);
}

export default Navbar;