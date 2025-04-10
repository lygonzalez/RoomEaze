import "./profile_color.jsx";
import "./styling.css";
import ColorCircles from "./profile_color"
import myImage from "../../assets/love.gif";

const HalfColoredPage = () => {
    const circleStyle = {
        width: "200px",
        height: "200px",
        backgroundColor: "gray",
        left: "50px",
        borderRadius: "50%",
      };
      return (
        <div className="container">
            <div className="top-half">
                <Profile_image circleStyle={circleStyle} /> {/* Pass the circle style */}
            </div>
            <div className="bottom-half">
                <div>
                  <h2>Roommate Group</h2>
                  <div className = "color-bar-wrapper" style = {{width: 300, textAlign: "center"}}>
                    <h3>Dykstra Divas</h3>
                  </div>
                </div>
                <div>
                  <h3>Profile Color</h3>
                    <div className = "color-bar-wrapper">
                    <div className = "small-circles" style={{ backgroundColor: "#B9DDE3" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  const Profile_image = ({ circleStyle }) => {
    return (
      <div>
        <h1>Dormammu</h1>
        <div style={circleStyle}>
           <img src={myImage} alt="Profile_image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div> {/* This is where the image gets displayed in the circle */}
        <h4>edit profile</h4>
      </div>
    );
  };
  
  export default HalfColoredPage;
  