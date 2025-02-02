import React from 'react';
import './Event.css';
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const Event = () => {
  const events = [
    { name: 'PRERNA', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'AARAMBH FOUNDATION WEEK', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'HAPPYTHON', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'INDEPENDENCE DAY', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'YOGA DAY', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'NATIONAL YOUTH DAY', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'REPUBLIC DAY', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'CLEANLINESS DRIVE', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
    { name: 'BLOOD DONATION CAMP', image: 'https://image.nssiitd.in/current_team/Faculty/Ankesh%20Jain_Innovation.png' },
  ];

  return (
    <div>
      < Navbar/>
      <div className="events-container">
        {/* Events Section */}
        <section>
          <h2 className="events-title">EVENTS</h2>
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.name} className="event-card">
                <img
                  src={event.image}
                  alt={event.name}
                  className="event-image"
                />
                <div className="event-overlay">
                  <h3 className="event-name">{event.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      < NSSFooter/>
      </div>
  );
};

export default Event;