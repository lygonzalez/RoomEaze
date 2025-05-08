import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Profile from "./pages/profile/Profile";  // Your profile component
import Bulletin from "./pages/bulletin/bulletin";  // The new page you want to add
import Edit from "./pages/profile/editProfile";  // The new page you want to add
import Navbar from "./pages/navbar/navbar";  // Import Navbar
import MyScheduler from "./pages/calender/scheduler";
import Todo from "./pages/todolist/todo";
import LandingPage from "/Users/lauragonzalez/roomeaze/roomeaze/src/pages/landing-page/landing-page.jsx"; 
import Home from "./pages/home/Home"; // adjust path if it's elsewhere

function AppContent() {
  const location = useLocation(); ////to remove navbar from desired slifes 

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<Home />} />
   <Route path="/profile" element={<Profile />} />
     <Route path="/bulletin" element={<Bulletin />} />
     <Route path="/profile/editProfile" element={<Edit />} />
     <Route path="/calender/scheduler" element={<MyScheduler />}/>
     <Route path="/todolist/todo" element={<Todo />}/>
   </Routes> 
 </>
  );

}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
