import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Profile from "./pages/profile/Profile";  // Your profile component
import Bulletin from "./pages/bulletin/bulletin";  // The new page you want to add
import Edit from "./pages/profile/editProfile";  // The new page you want to add
import Navbar from "./pages/navbar/navbar";  // Import Navbar
import MyScheduler from "./pages/calender/scheduler";
import Todo from "./pages/todolist/todo";
import OpeningScreen from "./pages/openingscreen";
import SignupPage from "./pages/signup";
import SignIn from "./pages/signin";
   
function App() {
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
     <Route path="/openingscreen" element={<OpeningScreen />}/>
     <Route path="/signup" element={<SignupPage />} />
     <Route path="/signin" element={<SignIn />}/>
   </Routes>
 </Router> 
  );
}

export default App;
