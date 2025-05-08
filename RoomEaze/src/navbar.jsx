import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: "none"}}>
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

export default Navbar;  // Export the component
