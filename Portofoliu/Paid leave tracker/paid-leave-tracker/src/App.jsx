// utils
import { useState } from "react";
import { useSelector } from "react-redux";

// components
import NewEntry from "components/newEntry/NewEntry";
import Entries from "components/entries/Entries";
import ThemeButton from "components/theme/ThemeButton";

// styles
import styles from "./App.module.css";

export default function App() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [filteredYear, setFilteredYear] = useState("2024");
  const entries = useSelector((state) => state.entries.allEntries);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const maxPaidLeaveDaysYear = 21;

  const filteredYearEntries = entries.filter((entry) => new Date(entry.date).getFullYear().toString() === filteredYear);

  const totalDaysSpent = filteredYearEntries.reduce((prevValue, currentValue) => prevValue + currentValue.daysSpent, 0);
  const remainingDays = maxPaidLeaveDaysYear - totalDaysSpent;

  let remainingDaysColor = "#3ec112";

  if (remainingDays <= 5) {
    remainingDaysColor = "#f00";
  } else if (5 < remainingDays && remainingDays <= 10) {
    remainingDaysColor = "#dea90b";
  }

  function changeFilterHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <>
      <div className={`${styles.wrapper} ${isDarkTheme ? styles.dark : ""}`}>
        <h1>Paid leave days tracker</h1>
        <ThemeButton />
        <NewEntry remainingDays={remainingDays} />
        <Entries
          maxPaidLeaveDaysYear={maxPaidLeaveDaysYear}
          selected={filteredYear}
          entries={filteredYearEntries}
          onChangeFilter={changeFilterHandler}
          remainingDaysColor={remainingDaysColor}
          remainingDays={remainingDays}
        />
      </div>
      <div className={styles.rights}>
        <p>Crisan Andrei</p>
        <p> © {currentYear} Paid leave days tracker™. All rights reserved.</p>
      </div>
    </>
  );
}
