import React from 'react';
import './RamdeobabaNSS.css';

const Section = ({ title, children }) => (
  <section className="rbu-section">
    <h2 className="rbu-section-title">{title}</h2>
    {children}
  </section>
);

const ReachItem = ({ imgSrc, altText, text }) => (
  <div className="rbu-reach-item">
    <img src={imgSrc} alt={altText} />
    <span dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

const RamdeobabaNSS = () => {
  return (
    <div className="rbu-container">
      {/* Header Section */}
      <header className="rbu-header">
        <h1 className="rbu-heading">Ramdeobaba University NSS UNIT</h1>
        <nav className="rbu-nav">
          <ul className="rbu-nav-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </nav>
      </header>

      {/* Vision Section */}
      <Section title="OUR VISION">
        <p className="rbu-vision-text">
          The vision of the National Service Scheme (NSS) is to develop the character and personality of students through voluntary community service. The NSS's ideological orientation is inspired by Mahatma Gandhi's ideals.
        </p>
      </Section>

      {/* Reach Section */}
      <Section title="OUR REACH">
        <div className="rbu-reach-items">
          <ReachItem imgSrc="/volunteer.png" altText="Volunteers" text="VOLUNTEERS" />
          <ReachItem imgSrc="/happy-children.png" altText="Happy Children" text="HAPPY CHILDREN" />
          <ReachItem imgSrc="/news.png" altText="News" text="NEWS" />
          <ReachItem imgSrc="/facebook.png" altText="Facebook" text="FACEBOOK<br>FOLLOWERS" />
          <ReachItem imgSrc="/student-engagement.png" altText="Student Engagement" text="STUDENT<br>ENGAGEMENT" />
          <ReachItem imgSrc="/instagram.png" altText="Instagram" text="INSTAGRAM<br>FOLLOWERS" />
        </div>
      </Section>

      {/* Footer Section */}
      <footer className="rbu-footer">
        <div className="rbu-footer-links">
          <a href="#" className="rbu-footer-link">RBU Website</a>
          <a href="#" className="rbu-footer-link">Events</a>
          <a href="#" className="rbu-footer-link">Team</a>
          <a href="#" className="rbu-footer-link">Gallery</a>
          <a href="#" className="rbu-footer-link">FAQ's</a>
        </div>
        <div className="rbu-social-media">
          <a href="https://facebook.com" className="rbu-social-icon" title="Facebook">📘</a>
          <a href="https://instagram.com" className="rbu-social-icon" title="Instagram">📸</a>
          <a href="https://twitter.com" className="rbu-social-icon" title="Twitter">🐦</a>
          <a href="https://linkedin.com" className="rbu-social-icon" title="LinkedIn">🔗</a>
        </div>
        <div className="rbu-contact">
          <p>Shri Ramdeobaba University, Nagpur</p>
          <p>nss.rbu@gmail.com</p>
          <p>+91 8530323476</p>
        </div>
      </footer>
    </div>
  );
};

export default RamdeobabaNSS;