import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: "none"}}>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/bulletin">Bulletin</Link></li>
        <li><Link to="/profile/editProfile">Edit</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;  // Export the component
