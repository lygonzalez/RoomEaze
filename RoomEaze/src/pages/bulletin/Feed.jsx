import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase"; // adjust path as needed
import Post from "./Post";
import styles from "./Bulletin.module.css";

const Feed = ({ groupId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!groupId) return;

    const q = query(
      collection(db, "groups", groupId, "messages"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(messages);
    });

    return () => unsubscribe();
  }, [groupId]);

  return (
    <div className={styles["dashboard-feed"]}>
      {posts.map((post, index) => (
        <React.Fragment key={post.id}>
          <Post
            pfp="" // You can fetch and pass pfp if available
            name={post.author || "Anonymous"} // Adjust based on Firestore schema
            time={post.timestamp?.toDate().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }) || "Just now"}
            message={post.message}
          />
          {index !== posts.length - 1 && (
            <span className={styles["dashboard-feed-divider"]}></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Feed;
