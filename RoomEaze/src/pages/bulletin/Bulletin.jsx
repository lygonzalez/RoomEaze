import Feed from "./Feed";
import NewPostForm from "./NewPostForm";
import Filter from "./Filter";
import styles from "./Bulletin.module.css";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { auth } from '../../firebase';
import { doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';


const Bulletin = () => {
  const [showForm, setShowForm] = useState(false);
  const [groupId, setGroupId] = useState('');


  const handleNewPost =() => {
    setShowForm(!showForm);
  }
  
useEffect(() => {
  const fetchGroupId = async () => {
    const user = auth.currentUser;
    if (!user) {
      console.warn('User not signed in');
      return;
    }

    try {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        console.warn('User document not found');
        return;
      }

      const data = userDoc.data();
      console.log('Fetched user data:', data);

      if (data?.groupId) {
        setGroupId(data.groupId.toString());
      } else {
        console.warn('No groupId found in user data');
      }
    } catch (error) {
      console.error('Error fetching user document:', error);
    }
  };

  fetchGroupId();
}, []);


  return (
    <div >
      <h1>House Feed</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className={styles["post-button"]} onClick={handleNewPost}
    >
      + Post
        </button>
      </div>

       {showForm && groupId &&(
        <div style={{ margin: '20px auto', maxWidth: '600px' }} >
          <NewPostForm groupId={groupId} />
        </div>
        
      )}

      <div className={styles["dashboard-main"]}>
        <div className={styles["dashboard-left"]}>
          <div className={styles["dashboard-searchbar"]}>
            <IoSearch />
            <input
              className={styles["dashboard-searchbar-input"]}
              type="text"
              placeholder="Search"
            />
          </div>
          <Feed groupId={groupId}/>
        </div>
      </div>
    </div>
  );
};
export default Bulletin;
