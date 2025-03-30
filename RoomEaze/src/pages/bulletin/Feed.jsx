import Post from "./Post";
import styles from "./Bulletin.module.css";

const Feed = () => {
  return (
    <div className={styles["dashboard-feed"]}>
      <Post
        pfp=""
        name="Roommate #2"
        time="3 hr"
        message="Can we make sure there's minimal noise after 1am, I have a midterm tomorrow lol"
      />
      <span className={styles["dashboard-feed-divider"]}></span>
      <Post
        pfp=""
        name="Anonymous"
        time="23 hr"
        message="Hi, can we make suer the window is closed before we go to sleep!"
      />
    </div>
  );
};
export default Feed;
