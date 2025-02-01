import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css"; // Import the CSS file
import img1 from "./Images/NSS_BG.webp";
import img2 from "./Images/NSS_BG.webp";
import img3 from "./Images/NSS_BG.webp";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

const galleryData = {
  2024: [img1, img2, img3], // Add more images if needed
  2023: [img2, img3, img1],
};

const Gallery = () => {
  const [yearIndices, setYearIndices] = useState({});  // Separate indices for each year section
  const years = Object.keys(galleryData);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);  // Use to keep track of the interval

  // Function to move to the next image for the selected year
  const handleNext = (year) => {
    setYearIndices((prev) => ({
      ...prev,
      [year]: (prev[year] === undefined ? 0 : prev[year] + 1) % galleryData[year].length,
    }));
  };

  // Function to move to the previous image for the selected year
  const handlePrev = (year) => {
    setYearIndices((prev) => ({
      ...prev,
      [year]: (prev[year] === undefined ? galleryData[year].length - 1 : prev[year] - 1 + galleryData[year].length) % galleryData[year].length,
    }));
  };

  // Reset the auto-slide interval after manual navigation
  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);  // Clear previous interval
    }
    intervalRef.current = setInterval(handleNext, 5000);  // Restart the auto-slide after manual interaction
  };

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => handleNext(years[0]), 5000); // Set initial interval to auto-slide
    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [years]);

  // Swipe detection using touch events for smooth transitions
  useEffect(() => {
    const carousel = carouselRef.current;
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (touchStartX - touchEndX > 50) {
        // Swipe left (next)
        handleNext(years[0]); // Pass the current year
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right (previous)
        handlePrev(years[0]); // Pass the current year
      }
    };

    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart);
      carousel.addEventListener("touchmove", handleTouchMove);
      carousel.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart);
        carousel.removeEventListener("touchmove", handleTouchMove);
        carousel.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [years]);

  return (
    <div>
      <Navbar />
      <div className="gallery-container">
      <div className="gallery-title">
        <h2>Gallery</h2>
        <div className="pink-underline"></div>
      </div>
        {years.map((year) => (
          <div key={year} className="gallery-year-section">
            <div className="gallery-year-heading">{year}</div>
            <div className="gallery-carousel" ref={carouselRef}>
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={() => { handlePrev(year); resetAutoSlide(); }}
              >
                ❮
              </button>

              {/* Image with link */}
              <a href={`/full-gallery/${year}`} target="_blank" rel="noopener noreferrer">
  <div className="gallery-image-container">
    <img
      src={galleryData[year][yearIndices[year] || 0]}  // Use year-specific index
      alt="Gallery"
      className="gallery-image"
    />
    <div className="event-name-overlay">
      Event Name
    </div>
  </div>
</a>

              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={() => { handleNext(year); resetAutoSlide(); }}
              >
                ❯
              </button>
            </div>
            <div className="carousel-dots">
              {galleryData[year].map((_, index) => (
                <span
                  key={index}
                  className={`dot ${yearIndices[year] === index ? "active" : ""}`}
                  onClick={() => { setYearIndices({ ...yearIndices, [year]: index }); resetAutoSlide(); }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <NSSFooter />
    </div>
  );
};

export default Gallery;