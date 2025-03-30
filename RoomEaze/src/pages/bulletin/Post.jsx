import styles from "./Bulletin.module.css";

const Post = ({ pfp, name, time, message }) => {
  return (
    <div className={styles["dashboard-post"]}>
      <img className={styles["dashboard-post-pfp"]} src={pfp}></img>
      <div className={styles["dashboard-post-content"]}>
        <div className={styles["dashboard-post-title"]}>
          <h3>{name}</h3>
          <h3>{time}</h3>
        </div>

        <p className={styles["dashboard-post-message"]}>{message}</p>
      </div>
    </div>
  );
};
export default Post;
