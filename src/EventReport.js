import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EventReport() {
  const { eventName } = useParams();
  const [selectedYear, setSelectedYear] = useState("2025"); // Default to 2025 or the current year

  // List of available years for the dropdown (you can dynamically generate this list as well)
  const availableYears = ["2023", "2024", "2025", "2026"];

  // Function to handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div>
      <h1>Event Report for: {eventName}</h1>
      
      {/* Year Selector */}
      <div>
        <label htmlFor="yearSelect">Choose Year: </label>
        <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
          {availableYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Report Display (This could be dynamic based on selected year) */}
      <div>
        <h2>Report for {selectedYear}</h2>
        {/* Replace with dynamic content for each year */}
        <p>This is the event report for {eventName} in {selectedYear}.</p>
        {/* You can dynamically load the report from a backend, display a PDF, or show specific data for the year */}
      </div>
    </div>
  );
}

export default EventReport;