import React from 'react';
import './Home.css';

const Home = () => {
  const domains = [
    { name: 'EDUCATION', icon: '🎓' },
    { name: 'HEALTH', icon: '❤️' },
    { name: 'INNOVATION', icon: '💡' },
    { name: 'SOCIETY', icon: '👥' },
    { name: 'ENVIRONMENT', icon: '🌱' },
  ];

  const stats = [
    { name: 'VOLUNTEERS', icon: '👥' },
    { name: 'HAPPY CHILDREN', icon: '😊' },
    { name: 'NEWS', icon: '📰' },
  ];

  const socialLinks = [
    { name: 'FACEBOOK FOLLOWERS', icon: '👥' },
    { name: 'STUDENT MANAGEMENT', icon: '👨‍🎓' },
    { name: 'INSTAGRAM FOLLOWERS', icon: '📸' },
  ];

  return (
    <div className="home">
      <header className="hero">
        <img src="/nss-logo.png" alt="NSS Logo" className="logo" />
        <h1>NSS UNIT</h1>
        <p className="motto">NOT ME, BUT YOU</p>
        <button className="register-btn">REGISTER FOR UPCOMING EVENTS</button>
      </header>

      <section className="vision">
        <h2>OUR VISION</h2>
        <p>
          The vision of the National Service Scheme (NSS) is to build the character
          of young students through voluntary community service. The NSS's
          ideological orientation is inspired by Mahatma Gandhi's ideals.
        </p>
      </section>

      <section className="reach">
        <h2>OUR REACH</h2>
        <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.name} className="stat-item">
               <span className="icon">{stat.icon}</span>
               <span className="label">{stat.name}</span>
              </div>
              ))}
            {socialLinks.map((link) => (
              <div key={link.name} className="social-item">
                <span className="icon">{link.icon}</span>
                <span className="label">{link.name}</span>
              </div>
          ))}
        </div>
      </section>



      <section className="domains">
        <h2>DOMAINS</h2>
        <div className="domains-grid">
          {domains.map((domain) => (
            <div key={domain.name} className="domain-item">
              <span className="icon">{domain.icon}</span>
              <span className="label">{domain.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 