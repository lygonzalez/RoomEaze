import Feed from "./Feed";
import NewPostForm from "./NewPostForm";
import Filter from "./Filter";
import styles from "./Bulletin.module.css";
import "../navbar/Navbar.css"; 
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const Bulletin = () => {
  const [showForm, setShowForm] = useState(false);


  const handleNewPost =() => {
    setShowForm(!showForm);
  }
  

  return (
    <div >
      <h1>House Feed</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="logout-button" style={{ backgroundColor: "rgba(232, 188, 28, 0.23)", color: "#61AFBD", }} onClick={handleNewPost}
    >
      + Post
        </button>
      </div>

       {showForm && (
        <div style={{ margin: '20px auto', maxWidth: '600px' }}>
          <NewPostForm groupId = ""/>
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
