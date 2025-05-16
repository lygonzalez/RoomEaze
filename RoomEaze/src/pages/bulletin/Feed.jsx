import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, limit} from "firebase/firestore";
import { db } from "../../firebase";
import Post from "./Post";
import styles from "./Bulletin.module.css";



const Feed = ({ groupId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered. groupId:", groupId);
    if (!groupId) {
      console.warn("No groupId provided — skipping Firestore query.");
      return;
    }

    const q = query(
      collection(db, "groups", groupId, "messages"),
      orderBy("timestamp", "desc"),
    );
    console.log("Firestore query created:", q);

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log("📥 onSnapshot triggered. Docs count:", snapshot.docs.length);
        const messages = snapshot.docs.map((doc) => {
          const data = doc.data();
          console.log("➡️ Doc:", doc.id, data);
          return {
            id: doc.id,
            ...data,
          };
        });

        setPosts(messages);
        console.log("✅ State updated with", messages.length, "messages");
      },
      (error) => {
        console.error("🔥 Firestore onSnapshot error:", error);
      }
    );

    return () => {
      console.log("🧹 Cleaning up snapshot listener");
      unsubscribe();
    };
  }, [groupId]);

  return (
    <div className={styles["dashboard-feed"]}>
      {posts.map((post, index) => (
        <React.Fragment key={post.id}>
          <Post
            pfp=""
            name={post.author || "Anonymous"}
            time={
              post.timestamp?.toDate().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }) || "Just now"
            }
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
