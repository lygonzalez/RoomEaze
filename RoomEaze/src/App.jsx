/* import "./App.css";
import Bulletin from "./pages/bulletin/Bulletin";

function App() {
  return (
    <>
      <Bulletin />
    </>
  );
}

export default App; */



import "./App.css";
import Navbar from "./navbar";  // Import Navbar
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/Profile";  // Your profile component
import Bulletin from "./pages/bulletin/bulletin";  // The new page you want to add
import Edit from "./pages/profile/editProfile";  // The new page you want to add


function App() {
  return (
     <Router>
       <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/bulletin" element={<Bulletin />} />
        <Route path="/profile/editProfile" element={<Edit />} />
      </Routes>
    </Router> 
  );
}

export default App;
