// components
import EntryItem from "./EntryItem";

// styles
import styles from "./EntriesList.module.css";

function EntriesList({ entries }) {
  if (entries.length === 0 || !entries) {
    return <h2 className={styles["entries-list-fallback"]}>No entries added.</h2>;
  }

  return (
    <ul className={styles["entries-list"]}>
      {entries.map((entry) => (
        <EntryItem
          title={entry.title}
          description={entry.description}
          days={entry.daysSpent}
          date={entry.date}
          key={entry.id}
          id={entry.id}
        />
      ))}
    </ul>
  );
}

export default EntriesList;
