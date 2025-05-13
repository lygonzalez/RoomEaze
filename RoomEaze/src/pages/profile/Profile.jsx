import React, { useState, useEffect } from "react";
import "./profile_color.jsx";
import "./styling.css";
import myImage from "../../assets/love.gif";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase"; // Adjust path if needed
import { doc, getDoc } from "firebase/firestore";

const HalfColoredPage = () => {
  const [name, setName] = useState("Loading...");
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("#B9DDE3");
  const [groupId, setGroupId] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (!user) return;
  
      setName(user.displayName || "Unnamed");
  
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        const data = userSnap.data();
        setName(data.name || user.displayName || "Unnamed");
        setColor(data.profileColor || "#B9DDE3");
  
        const groupId = data.groupId;
        if (groupId) {
          const groupRef = doc(db, "groups", groupId);
          const groupSnap = await getDoc(groupRef);
          if (groupSnap.exists()) {
            const groupData = groupSnap.data();
            setGroupName(groupData.name);
            setGroupId(groupId);
          } else {
            setGroupName("Group not found");
          }
        } else {
          setGroupName("No group");
        }
      }
    };
  
    fetchUserData();
  }, []);
  
  

  const circleStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: color,
    left: "50px",
    borderRadius: "50%",
    overflow: "hidden",
  };

  return (
    <div className="container">
      <div className="top-half" style = {{ backgroundColor: color}}>
        <ProfileImage name={name} circleStyle={circleStyle} />
      </div>
      <div className="bottom-half">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Roommate Group</h2>
        <div
          style={{
            backgroundColor: "#e0e0e0",      // light gray box
            padding: "0.5rem 1rem",
            borderRadius: "10px",
            textAlign: "center",
            minWidth: "200px",
          }}
        >
          <h3 style={{ margin: "0 0 0.3rem 0" }}>{groupName}</h3>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#555" }}>
            Share code: {groupId}
          </p>

        </div>
      </div>

        <div>
          <h3>Profile Color</h3>
          <div className="color-bar-wrapper">
            <div className="small-circles" style={{ backgroundColor: color }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileImage = ({ name, circleStyle }) => {
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>{name}</h1>
      <div style={circleStyle}>
        <img
          src={myImage}
          alt="Profile_image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <Link
        to="/profile/editProfile"
        style={{
          color: "black",
          border: "none",
          background: "none",
          cursor: "pointer",
          marginTop: "1rem", 
          fontSize: "1rem"
        }}
      >
        Edit Profile
      </Link>
    </div>
  );
};


export default HalfColoredPage;

