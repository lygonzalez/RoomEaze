import styles from "./Bulletin.module.css";

const FilterButton = ({ text, color }) => {
  return (
    <button
      className={styles["dashboard-filter-button"]}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};
export default FilterButton;
