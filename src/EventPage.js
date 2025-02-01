import React from "react";
import { useParams } from "react-router-dom";
import img1 from "./Images/NSS_BG.webp";
import img2 from "./Images/NSS_BG.webp";
import img3 from "./Images/NSS_BG.webp";
import img4 from "./Images/NSS_BG.webp";
import img5 from "./Images/NSS_BG.webp";
import img6 from "./Images/NSS_BG.webp";
import Navbar from "./Navbar";
import NSSFooter from "./NSSFooter";
import "./EventPage.css";

// Sample event data
const eventImages = {
  event1: [img1, img2 , img3, img4, img5, img6],
  event2: [img2, img3],
  event3: [img3, img1],
};

const EventPage = () => {
  const { year, eventName } = useParams(); // Get params from URL

  return (
    <div>
      <Navbar />
      <div className="event-page">
        <h2>{eventName.toUpperCase()} - {year}</h2>
        <div className="event-gallery">
          {eventImages[eventName]?.map((img, index) => (
            <a key={index} href={img} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={`Event ${eventName}`} className="event-image" />
            </a>
          ))}
        </div>
      </div>
      <NSSFooter />
    </div>
  );
};

export default EventPage;