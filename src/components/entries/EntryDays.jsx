// utils
import { useSelector } from "react-redux";

// styles
import styles from "./EntryDays.module.css";

function EntryDays({ itemDays }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <div className={`${styles["item-spent-days"]} ${isDarkTheme ? styles.dark : ""} `}>
      <span>Days spent:</span>
      <p>{itemDays}</p>
    </div>
  );
}

export default EntryDays;
