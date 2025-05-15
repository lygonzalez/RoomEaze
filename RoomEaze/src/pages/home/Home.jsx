import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-box">
        <Link to="/calender/scheduler" className="home-button">
        <img src="/calender_icon.png" alt="Task Icon" className="icon" />
          Calendar View
        </Link>
        <Link to="/todolist/todo" className="home-button">
          <img src="/todoicon.png" alt="Task Icon" className="icon" />
          Task-list View
        </Link>
        <Link to="/bulletin" className="home-button">
          <img src="/bulletin.png" alt="Message Icon" className="icon" />
          Message Board
        </Link>
      </div>
    </div>
  );
}

export default Home;