import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Bulletin from "./pages/bulletin/Bulletin";
import MyScheduler from "./pages/calender/scheduler"; // Make sure this import is correct!
function App() {
  return (
    <Router>
        <div style={{ padding: "20px" }}>
          {/* Navigation Links */}
          <nav>
            <Link to="/" style={{ marginRight: "15px" }}>Bulletin</Link>
            <Link to="/calendar">Calendar</Link>
          </nav>

          {/* Route Definitions */}
          <Routes>
            <Route path="/" element={<Bulletin />} />
            <Route path="/calendar" element={<MyScheduler />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
