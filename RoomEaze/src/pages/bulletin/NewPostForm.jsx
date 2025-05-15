import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import './Bulletin.module.css'; // Make sure this file includes the provided CSS or is imported globally

const NewPostForm = ({ groupId }) => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '' || category === '' || !groupId) return;

    try {
      await addDoc(collection(db, "groups", groupId, "messages"), {
        message: inputValue,
        category,
        timestamp: serverTimestamp()
      });
      setInputValue('');
      setCategory('');
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>New Post</h2>
        <textarea
          placeholder="Type your message here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            width: '80%',
            height: '100px',
            borderRadius: '1rem',
            padding: '1rem',
            fontSize: '1rem',
            border: '1px solid #ccc',
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9'
          }}
        />
        <h3>Categories</h3>
        <div style={{ marginBottom: '1rem' }}>
          <label>
            <input
              type="radio"
              name="option"
              value="Request"
              checked={category === 'Request'}
              onChange={(e) => setCategory(e.target.value)}
            /> Request
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="option"
              value="Reminder"
              checked={category === 'Reminder'}
              onChange={(e) => setCategory(e.target.value)}
            /> Reminder
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="option"
              value="Notice"
              checked={category === 'Notice'}
              onChange={(e) => setCategory(e.target.value)}
            /> Notice
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="option"
              value="Random"
              checked={category === 'Random'}
              onChange={(e) => setCategory(e.target.value)}
            /> Random
          </label>
        </div>
        <button type="submit" className="dashboard-post-button">
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
