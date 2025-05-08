import { Link } from "react-router-dom";
import "./Navbar.css";  // Link to your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">RoomEaze</div>
      <ul className="navbar-links">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/bulletin">Bulletin</Link></li>
        <li><Link to="/profile/editProfile">Edit</Link></li>
        <li><Link to="/calender/scheduler">Schedule</Link></li>
        <li><Link to="/todolist/todo">To-Do List</Link></li>
        <li><Link to="/openingscreen">Opening Screen</Link></li>
        <li><Link to="/signup">Sign Up Page</Link></li>
        <li><Link to="/App">Home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
