import { Link } from "react-router-dom";
import "./Navbar.css";  // Link to your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">RoomEase</div>
      <ul className="navbar-links">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/bulletin">Bulletin</Link></li>
        <li><Link to="/profile/editProfile">Edit</Link></li>
        <li><Link to="/calender/scheduler">Schedule</Link></li>
        <li><Link to="/todolist/todo">To-Do List</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/Users/lauragonzalez/roomeaze/roomeaze/src/pages/landing-page/landing-page.jsx">Sign out</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
