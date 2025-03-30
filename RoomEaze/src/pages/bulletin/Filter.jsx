import styles from "./Bulletin.module.css";
import FilterButton from "./FilterButton";
import { FaFilter } from "react-icons/fa";

const Filter = () => {
  return (
    <div className={styles["dashboard-filter"]}>
      <div className={styles["dashboard-filter-title"]}>
        <FaFilter />
        <h3>Filter</h3>
      </div>
      <FilterButton text="Request" color="rgba(242, 108, 160, 0.22)" />
      <FilterButton text="Reminder" color="rgba(232, 188, 28, 0.23)" />
      <FilterButton text="Notice" color="rgba(185, 255, 190, 0.49)" />
      <FilterButton text="Random" color="rgba(211, 239, 245, 0.64)" />
    </div>
  );
};
export default Filter;
