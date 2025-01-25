import React from "react";
import './NSSUnit.css';

const NSSUnit = () => {
  return (
    <div className="nss-container">
      <header className="nss-header">
        <img
          src="university-logo.png"
          alt="University Logo"
          className="nss-logo"
        />
        <h1 className="nss-title">Ramdobaba University</h1>
        <button className="nss-menu-icon">☰</button>
      </header>

      <div className="nss-content">
        <div className="nss-overlay">
          <img
            src="nss-background.jpg"
            alt="NSS Event"
            className="nss-background"
          />
        </div>
        <div className="nss-details">
          <img
            src="nss-logo.png"
            alt="NSS Logo"
            className="nss-logo-large"
          />
          <h2 className="nss-unit-title">NSS UNIT</h2>
          <p className="nss-slogan">NOT ME, BUT YOU</p>
          <button className="nss-register-btn">
            REGISTER FOR UPCOMING EVENTS
          </button>
        </div>
      </div>
    </div>
  );
};

export default NSSUnit;