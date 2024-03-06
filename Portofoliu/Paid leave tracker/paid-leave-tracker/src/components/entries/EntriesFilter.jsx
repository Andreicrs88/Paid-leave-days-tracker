// utils
import { useSelector } from "react-redux";

// styles
import styles from "./EntriesFilter.module.css";

function EntriesFilter({ selected, onChangeFilter }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  function optionChangeHandler(event) {
    onChangeFilter(event.target.value);
  }

  return (
    <div className={styles["entries-filters"]}>
      <div className={`${styles["filters-control"]} ${isDarkTheme ? styles.dark : ""}`}>
        <label>Filter by year</label>
        <select
          value={selected}
          onChange={optionChangeHandler}
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default EntriesFilter;
