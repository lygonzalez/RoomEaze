
import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="blob-background">
        <h1 className="welcome-title">Welcome to<br />RoomEaze</h1>
      </div>
      <p className="subtitle">
        Ease your roommate experience with a shared space<br />for scheduling and communication.
      </p>
      <Link to="/profile">
        <button className="sign-in-btn">Sign In</button>
      </Link>
      <p className="signup-text">
        Don’t have an account yet? Let’s get started!
        <br />
        <Link to="/signup" className="signup-link">Sign Up!</Link>
      </p>
    </div>
  );
}
export default LandingPage;
