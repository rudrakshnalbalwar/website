import React from "react";
import "./NSSFooter.css";
import Instagram from "./Images/Instagram.png";
import Linkedin from "./Images/Linkedin.png";

const Footer = () => {
  return (
    <footer className="nss-footer">
      {/* Quick Links Section */}
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
        <li><a href="https://rbunagpur.in/" target="_blank">RBU Website</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Sports</a></li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.instagram.com/nss.rbu" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/nss-rcoem" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:nss@ramdeobaba.edu">nss@ramdeobaba.edu</a></p>
        <p>Ph: +91 9876543210</p>
        <p>Address: Ramdeobaba University, Nagpur</p>
      </div>
    </footer>
  );
};

export default Footer;