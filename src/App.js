import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import './App.css';
import RamdeobabaNSS from './RamdeobabaNSS.js';
import NSSUnit from './NSSUnit.js';
import Gallery from './Gallery.js';
import EventPage from "./EventPage.js";

function App() {
  return (
    <Router basename="/website">
      <Routes>
        <Route path="/" element={<NSSUnit />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/full-gallery/:year/:eventName" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;