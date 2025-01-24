import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    { name: 'PRERNA', image: require('../assets/event-bg.jpg') },
    { name: 'AARAMB', image: require('../assets/event-bg.jpg') },
    { name: 'HAPPYTHON', image: require('../assets/event-bg.jpg') }
  ];

  return (
    <div className="events-container">
      <h1 className="events-title">EVENTS</h1>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-image-container">
              <img src={event.image} alt={event.name} className="event-image" />
              <div className="event-overlay">
                <h3 className="event-name">{event.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events; 