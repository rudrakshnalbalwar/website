import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Event.css';
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";
import {Link} from "react-router-dom";

const events = [
  {
    name: 'INDEPENDENCE DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'A patriotic event celebrating India’s independence with cultural programs and flag hoisting.',
    description2: 'Students and faculty participate in speeches, dances, and community service initiatives.',
  },
  {
    name: 'YOGA DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'Promoting health and wellness through yoga sessions conducted by trained professionals.',
    description2: 'People of all ages join together to practice mindfulness and improve their physical well-being.',
  },
  {
    name: 'REPUBLIC DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'Commemorating the adoption of the Indian Constitution with parades and cultural programs.',
    description2: 'A day filled with patriotic fervor, music, and awareness drives about citizens’ responsibilities.',
  },
  {
    name: 'AARAMBH FOUNDATION WEEK',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'A week-long celebration of the foundation of NSS, featuring various activities and workshops.',
    description2: 'This event emphasizes the mission and vision of social service and community engagement.',
  },
  {
    name: 'HAPPYTHON',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'A fun-filled marathon promoting happiness, mental health awareness, and physical well-being.',
    description2: 'Participants engage in joyful activities, interactive sessions, and group runs.',
  },
  {
    name: 'NATIONAL YOUTH DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'Celebrating the energy and contribution of youth in nation-building and social welfare.',
    description2: 'The event includes motivational talks, debates, and youth-centric activities.',
  },
  {
    name: 'CLEANLINESS DRIVE',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'A campaign to promote hygiene, waste management, and environmental sustainability.',
    description2: 'Volunteers clean public places and educate people about keeping surroundings clean.',
  },
  {
    name: 'BLOOD DONATION CAMP',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'A life-saving event encouraging individuals to donate blood and help those in need.',
    description2: 'Medical professionals guide donors and ensure safe and effective blood collection.',
  },
  {
    name: 'NATIONAL FOUNDATION DAY',
    images: [
      "https://media.istockphoto.com/id/1497811046/photo/a-doctor-and-her-assistant-doctor-engaged-in-a-conversation-with-family-members-of-a-village.jpg?s=612x612&w=0&k=20&c=tlxfJh1vYnm5PrnHvID4vdxnrqXmjpiinIxhgM5UrSY=",
      "https://media.istockphoto.com/id/1125843699/photo/real-estate-agent-with-group-of-villagers.jpg?s=612x612&w=0&k=20&c=E0EpqKdr4v59EMB1hfevF1QcwELQk0dvekJyLfIrpq0=",
      "https://media.istockphoto.com/id/1318617341/photo/low-angle-view-group-of-volunteers-busy-working-by-arranging-vegetables-and-clothes-on.jpg?s=612x612&w=0&k=20&c=CJsDJ1nIMKr5NPBQufc5eyjsbSV_3XhqgcQusavGXIk=",
    ],
    description1: 'A day of celebration marking the foundation of NSS, fostering unity and pride.',
  },
];

function EventSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="event-slider">
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img} alt="event slide" className="event-slide-image" />
        </div>
      ))}
    </Slider>
  );
}

function RegularEvents() {
  return (
    <div>
      <Navbar />
    <div className="events-container">
      <h2 className="events-title">EVENTS</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={event.name} className="event-box">
          <EventSlider images={event.images} />
          <div className="event-details">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-description">{event.description1}</p>
            <p className="event-description">{event.description2}</p>
            <Link to={`/event-report/${event.name}`} className="event-report-btn">
                  Event Report
                </Link>
          </div>
        </div>        
        ))}
      </div>
    </div>
    <NSSFooter />
    </div>

  );
}

export default RegularEvents;