import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  setDoc
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import CircleChoice from "./profile_color"; 
import "./styling.css";

  
const editProfile = () => {
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");
  const [color, setColor] = useState("#B9DDE3");
  const [joinCode, setJoinCode] = useState('');
  const [newGroupName, setNewGroupName] = useState('');
  const [error, setError] = useState('');

  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setName(data.name || "");
        setGroup(data.groupId || "");
        setColor(data.profileColor || "#B9DDE3");
      }
    };

    fetchData();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    await updateDoc(doc(db, "users", user.uid), {
      name,
      groupId: group,
      profileColor: color,
      updatedAt: serverTimestamp(),
    });
    navigate("/profile")
  };

  const handleJoinGroup = async () => {
    setError('');
    const groupRef = doc(db, 'groups', joinCode.toUpperCase());
    const snap = await getDoc(groupRef);
  
    if (!snap.exists()) {
      setError("Group not found.");
      return;
    }
  
    await updateDoc(groupRef, {
      members: arrayUnion(user.uid),
    });
  
    await updateDoc(doc(db, "users", user.uid), {
      groupId: joinCode.toUpperCase(),
    });
  
    alert("Joined group successfully!");
    setGroup(joinCode.toUpperCase());
  };
  
  const handleCreateGroup = async () => {
    if (!newGroupName) {
      setError("Enter a group name.");
      return;
    }
  
    const newGroupId = uuidv4().slice(0, 6).toUpperCase();
    await setDoc(doc(db, 'groups', newGroupId), {
      name: newGroupName,
      members: [user.uid],
    });
  
    await updateDoc(doc(db, "users", user.uid), {
      groupId: newGroupId,
    });
  
    alert(`Group created! Share this code: ${newGroupId}`);
    setGroup(newGroupId);
  };

  return (
    <div className="edit-profile-page">
      <h1>Edit Profile</h1>
      <div className="edit-fields">
        <div>
          <h2>Change Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {!group || group === "" ? (
  <>
    <div>
      <h2>Join a Roommate Group</h2>
      <input
        type="text"
        placeholder="Enter group code"
        value={joinCode}
        onChange={(e) => setJoinCode(e.target.value)}
      />
      <div> </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <button className = "groupbutton" onClick={handleJoinGroup}>Join Group</button>
      </div>
    </div>

    <div style={{ marginTop: "1rem" }}>
      <h2>Or Create a New Group</h2>
      <input
        type="text"
        placeholder="Group name"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
      />
      <div> </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <button className = "groupbutton" onClick={handleCreateGroup}>Create Group</button>
      </div>
    </div>

    {error && <p style={{ color: "red" }}>{error}</p>}
    </>
    ) : (
    <div>
        <h2>You’re in group: {group}</h2>
    </div>
    )}
        <div>
          <h2>Change Profile Color</h2>
          <CircleChoice selectedColor={color} onColorSelect={setColor} />
        </div>
        <div
          className="save-button"
          onClick={handleSave}
        >
          <h4 style={{ margin: 0 }}>Done</h4>
        </div>
      </div>
    </div>
  );
  
};

export default editProfile;


  