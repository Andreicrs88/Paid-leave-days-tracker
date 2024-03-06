// utils
import { useSelector } from "react-redux";

// styles
import styles from "./EntryDate.module.css";

function EntryDate({ itemDate }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const date = new Date(itemDate);
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={`${styles["item-date"]} ${isDarkTheme ? styles.dark : ""}`}>
      <div className={styles["date-day"]}>{day}</div>
      <div className={styles["date-month"]}>{month}</div>
      <div className={styles["date-year"]}>{year}</div>
    </div>
  );
}

export default EntryDate;
