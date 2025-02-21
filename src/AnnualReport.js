import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";
import './ReachReport.css';

function AnnualReport() {
  const [selectedYear, setSelectedYear] = useState("2025"); // Default to 2025 or the current year
  const navigate = useNavigate(); // Use the new `useNavigate` hook
  const [isActive, setIsActive] = useState(false); // To trigger content display after load
  useEffect(() => {
          window.scrollTo(0, 0); // Scroll to the top of the page
          setIsActive(true); // Activate the content display after the component is mounted
      }, [selectedYear]); // Re-run the effect whenever the labelreport changes
  // Function to handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const navigateToYearReport = () => {
    if (selectedYear) {
        // Redirect to the year-specific report route
        navigate(`/annnualreport/${selectedYear}`);
    }
};

  return (
    <div>
        <Navbar />
{/* Report Display (This could be dynamic based on selected year) */}
      <div className={`report-page ${isActive ? 'active' : ''}`}>
                    <h1>🎉 Welcome to the Annual Report Section 🎉</h1>
                    <p>Select the session to view the report:</p>
                    <select value={selectedYear} onChange={handleYearChange}>
                        <option value="">-- Select Session --</option>
                        <option value="2023">2023-24</option>
                        <option value="2024">2024-25</option>
                    </select>
                    <div className="buttonReport">
                        <button onClick={navigateToYearReport} disabled={!selectedYear}>View Report</button>
                    </div>
        </div>
      <NSSFooter />
    </div>
  );
}

export default AnnualReport;