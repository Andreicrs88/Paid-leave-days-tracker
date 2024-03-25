// utils
import { useDispatch, useSelector } from "react-redux";
import { entriesActions } from "store/entries-slice";

// components
import EntryDays from "./EntryDays";
import EntryDate from "./EntryDate";
import { ImBin } from "react-icons/im";

// styles
import styles from "./EntryItem.module.css";

function EntryItem({ id, title, description, days, date }) {
  const dispatchFn = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  function handleRemoveEntry() {
    dispatchFn(entriesActions.removeEntry(id));
  }

  return (
    <li className={`${styles["item-container"]} ${isDarkTheme ? styles.dark : ""}`}>
      <button
        className={styles["remove-btn"]}
        onClick={handleRemoveEntry}
      >
        <ImBin />
      </button>
      <div className={styles["days-item"]}>
        <EntryDays itemDays={days} />
      </div>
      <div className={styles["description-item"]}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles["date-item"]}>
        <EntryDate itemDate={date} />
      </div>
    </li>
  );
}

export default EntryItem;
