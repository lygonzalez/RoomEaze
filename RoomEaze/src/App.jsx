import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";}
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

export default App; */



import "./App.css";
import Navbar from "./navbar";  // Import Navbar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";  // Your profile component
import Bulletin from "./pages/bulletin/bulletin";  // The new page you want to add
import Edit from "./pages/profile/editProfile";  // The new page you want to add


function App() {
  return (
     <Router>
       <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/bulletin" element={<Bulletin />} />
        <Route path="/profile/editProfile" element={<Edit />} />
      </Routes>
    </Router> 
  );
}

export default App;
