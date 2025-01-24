import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Ramdobaba University</Link>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>
      <div className={`navbar-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <Link to="/" className="navbar-item" onClick={toggleMenu}>Home</Link>
        <Link to="/events" className="navbar-item" onClick={toggleMenu}>Events</Link>
        <Link to="/team" className="navbar-item" onClick={toggleMenu}>Team</Link>
        <Link to="/gallery" className="navbar-item" onClick={toggleMenu}>Gallery</Link>
      </div>
    </nav>
  );
};

export default Navbar; 