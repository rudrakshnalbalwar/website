import React, { useState, useEffect } from "react";
import "./NSSUnit.css";
import NSSFooter from "./NSSFooter.js";
import UniversityLogo from "./UniversityLogo.png";
import NSSLogo from "./image.png";
import Volunteers from "./Images/Volunteers.png";
import HC from "./Images/HC.png";
import NEWS from "./Images/NEWS.png";
import Followers from "./Images/Followers.png";
import SE from "./Images/SE.png";
import Insta from "./Images/Insta.png";
import Education from "./Images/Education.png";
import Health from "./Images/Health.png";
import Innovation from "./Images/Innovation.png";
import Society from "./Images/Society.png";
import Environment from "./Images/Environment.png";
import Rural from "./Images/Rural.png";

const NSSUnit = () => {
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

  return (
    <div className="nss-container">
      {/* Navbar */}
      <header className="nss-header">
        <div className="nss-header-left">
          <img src={UniversityLogo} alt="University Logo" className="nss-logo" />
          <h1 className="nss-title">RAMDEOBABA UNIVERSITY</h1>
        </div>

        {/* Menu Icon */}
        <button className="nss-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <nav className={`nss-dropdown ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <div className="nss-content">
        <div className="nss-details">
          <img src={NSSLogo} alt="NSS Logo" className="nss-logo-large" />
          <div className="nss-text">
            <h2 className="nss-unit-title">NSS UNIT</h2>
            <p className="nss-slogan">NOT ME, BUT YOU</p>
          </div>
        </div>
        <button className="nss-register-btn">REGISTER FOR UPCOMING EVENTS</button>
      </div>

      {/* Our Vision Section */}
      <div className="nss-vision">
        <h2 className="nss-vision-title">OUR VISION</h2>
        <p className="nss-vision-text">
          The vision of the National Service Scheme (NSS) is to develop the
          character and personality of students through voluntary community
          service. The NSS's ideological orientation is inspired by Mahatma
          Gandhi's ideals.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="nss-who-we-are">
        <h2 className="nss-section-title">WHO WE ARE</h2>
        <p className="nss-section-text">
          We are a community of dedicated students and volunteers committed to 
          making a meaningful impact on society. Through NSS, we work towards 
          the upliftment of underprivileged communities, environmental conservation, 
          and social awareness campaigns.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="nss-what-we-do">
        <h2 className="nss-section-title">WHAT WE DO</h2>
        <p className="nss-section-text">
          Our initiatives include organizing health and education camps, blood 
          donation drives, environmental sustainability projects, and social 
          welfare programs. By participating in NSS, students develop leadership, 
          empathy, and a deep sense of responsibility toward society.
        </p>
      </div>

      {/* Our Reach Section */}
      <div className="nss-reach">
        <h2 className="nss-reach-title">OUR REACH</h2>
        <div className="nss-reach-icons">
          {/* First Row */}
          <div className="reach-item">
            <img src={Volunteers} alt="Volunteers" className="reach-icon" />
            <span className="reach-label">Volunteers</span>
            <div className="reach-content">
              <span className="reach-number">10,000+</span>
            </div>
          </div>

          <div className="reach-item">
            <img src={HC} alt="Happy Children" className="reach-icon" />
            <span className="reach-label">Happy Children</span>
            <div className="reach-content">
              <span className="reach-number">50,000+</span>
            </div>
          </div>

          {/* Second Row */}
          <div className="reach-item">
            <img src={NEWS} alt="News Features" className="reach-icon" />
            <span className="reach-label">News Features</span>
            <div className="reach-content">
              <span className="reach-number">50+</span>
            </div>
          </div>

          <div className="reach-item">
            <img src={Followers} alt="Facebook Followers" className="reach-icon" />
            <span className="reach-label">Facebook Followers</span>
            <div className="reach-content">
              <span className="reach-number">20,000+</span>
            </div>
          </div>

          {/* Third Row */}
          <div className="reach-item">
            <img src={SE} alt="Student Engagement" className="reach-icon" />
            <span className="reach-label">Students Engaged</span>
            <div className="reach-content">
              <span className="reach-number">5,000+</span>
            </div>
          </div>

          <div className="reach-item">
            <img src={Insta} alt="Instagram Followers" className="reach-icon" />
            <span className="reach-label">Instagram Followers</span>
            <div className="reach-content">
              <span className="reach-number">30,000+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Domains Section */}
      <div className="nss-domains">
        <h2 className="nss-domains-title">DOMAINS</h2>
        <div className="nss-domains-icons">
          <div className="domain-item">
            <img src={Education} alt="Education" className="domain-icon" />
            <p>EDUCATION</p>
          </div>
          <div className="domain-item">
            <img src={Health} alt="Health" className="domain-icon" />
            <p>HEALTH</p>
          </div>
          <div className="domain-item">
            <img src={Innovation} alt="Innovation" className="domain-icon" />
            <p>INNOVATION</p>
          </div>
          <div className="domain-item">
            <img src={Society} alt="Society" className="domain-icon" />
            <p>SOCIETY</p>
          </div>
          <div className="domain-item">
            <img src={Environment} alt="Environment" className="domain-icon" />
            <p>ENVIRONMENT</p>
          </div>
          <div className="domain-item">
            <img src={Rural} alt="Environment" className="domain-icon" />
            <p>Rural</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <NSSFooter />
    </div>
  );
};

export default NSSUnit;