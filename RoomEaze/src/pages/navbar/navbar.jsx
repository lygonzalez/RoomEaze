import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../authContext";
import { doSignOut } from "../../auth"; // Make sure this is implemented
import "./Navbar.css";  // Your CSS styles

function Navbar() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const handleLogout = async () => {
    try {
      await doSignOut();
      navigate("/signin"); // redirect to signin after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">RoomEaze</div>
      <ul className="navbar-links">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/bulletin">Bulletin</Link></li>
        <li><Link to="/profile/editProfile">Edit</Link></li>
        <li><Link to="/calender/scheduler">Schedule</Link></li>
        <li><Link to="/todolist/todo">To-Do List</Link></li>
        <li><Link to="/">Opening Screen</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        {userLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
