import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>QuickLinks</h3>
        <ul>
          <li><a href="#">RRU Website</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">FAQ's</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Social Media</h3>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Ramdobaba University Jaipur</p>
        <p>nss.rbu@gmail.com</p>
        <p>+91 9530323476</p>
      </div>
    </footer>
  );
};

export default Footer; 