import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./pages/profile/Profile";  // Your profile component
import Bulletin from "./pages/bulletin/bulletin";  // The new page you want to add
import Edit from "./pages/profile/editProfile";  // The new page you want to add
import Navbar from "./navbar";  // Import Navbar
import MyScheduler from "./pages/calender/scheduler";

   
function App() {
  return (
    <Router>
    <Navbar />
   <Routes>
     <Route path="/profile" element={<Profile />} />
     <Route path="/bulletin" element={<Bulletin />} />
     <Route path="/profile/editProfile" element={<Edit />} />
     <Route path="/calender/scheduler" element={<MyScheduler />}/>
   </Routes>
 </Router> 
  );
}

export default App;
