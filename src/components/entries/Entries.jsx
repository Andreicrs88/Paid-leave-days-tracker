// utils
import { useSelector } from "react-redux";

// components
import EntriesList from "./EntriesList";
import EntriesFilter from "./EntriesFilter";
import EntriesChart from "./EntriesChart";

// styles
import styles from "./Entries.module.css";

function Entries({ entries, selected, onChangeFilter, maxPaidLeaveDaysYear, remainingDaysColor, remainingDays }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div className={`${styles["entries-container"]} ${isDarkTheme ? styles.dark : ""}`}>
      <EntriesFilter
        selected={selected}
        onChangeFilter={onChangeFilter}
      />
      <div className={styles["days-remaining-container"]}>
        Remaining days this year: <span style={{ color: remainingDaysColor }}>{remainingDays}</span> /
        {maxPaidLeaveDaysYear}
      </div>
      <EntriesChart entries={entries} />
      <EntriesList entries={entries} />
    </div>
  );
}

export default Entries;
