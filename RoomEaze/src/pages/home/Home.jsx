import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-box">
        <Link to="/calender/scheduler" className="home-button">
          Calendar View
        </Link>
        <Link to="/todolist/todo" className="home-button">
          <img src="/notebook-icon.png" alt="Task Icon" className="icon" />
          Task-list View
        </Link>
        <Link to="/bulletin" className="home-button">
          <img src="/chat-icon.png" alt="Message Icon" className="icon" />
          Message Board
        </Link>
      </div>
    </div>
  );
}

export default Home;