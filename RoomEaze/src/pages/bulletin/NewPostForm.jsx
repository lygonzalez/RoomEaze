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
import styles from './Bulletin.module.css'; 
import { auth } from '../../firebase';


const NewPostForm = ({ groupId }) => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('');
  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    if (!groupId) return;

    const q = query(
      collection(db, 'groups', groupId, 'messages'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, [groupId]);


  const handleSubmit = async (e) => {
    const user = auth.currentUser;
    e.preventDefault();
    if (inputValue.trim() === '' || category === '' || !groupId) return;

    try {
      await addDoc(collection(db, 'groups', groupId, 'messages'),
      {
        message: inputValue,
        category,
        timestamp: serverTimestamp(),
        author: user.displayName || user.email || user.uid,
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
        {/* <h1>{groupId ? `Group ID: ${groupId}` : 'No group ID provided'}</h1> */}
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
          <label style={{ width: '45%' }}>
            <input
              type="radio"
              name="option"
              value="Request"
              checked={category === 'Request'}
              onChange={(e) => setCategory(e.target.value)}
            /> Request
          </label>
          <label style={{ width: '45%' }}>
            <input
              type="radio"
              name="option"
              value="Reminder"
              checked={category === 'Reminder'}
              onChange={(e) => setCategory(e.target.value)}
            /> Reminder
          </label>
          <label style={{ width: '45%' }}>
            <input
              type="radio"
              name="option"
              value="Notice"
              checked={category === 'Notice'}
              onChange={(e) => setCategory(e.target.value)}
            /> Notice
          </label>
          <label style={{ width: '45%' }}>
            <input
              type="radio"
              name="option"
              value="Random"
              checked={category === 'Random'}
              onChange={(e) => setCategory(e.target.value)}
            /> Random
          </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" className={styles["post-button"]} >
              Send
            </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
