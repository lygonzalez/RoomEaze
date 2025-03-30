import Feed from "./Feed";
import NewPostForm from "./NewPostForm";
import Filter from "./Filter";
import styles from "./Bulletin.module.css";

import { IoSearch } from "react-icons/io5";

const Bulletin = () => {
  return (
    <div>
      <h1>House Feed</h1>
      <button className={styles["dashboard-post-button"]}>+ Post</button>
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
          <Feed />{" "}
        </div>
        <div className={styles["dashboard-right"]}>
          <Filter />
        </div>
      </div>
    </div>
  );
};
export default Bulletin;
