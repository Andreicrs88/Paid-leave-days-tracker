// utils
import React, { useState } from "react";
import { useSelector } from "react-redux";

// components
import EntryForm from "./EntryForm";
import { IoWarningOutline } from "react-icons/io5";

// styles
import styles from "./NewEntry.module.css";

function NewEntry({ remainingDays }) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const [isEditing, setIsEditing] = useState(false);

  function startEditingHandler() {
    setIsEditing(true);
  }

  function cancelEditingHandler() {
    setIsEditing(false);
  }

  return (
    <div className={`${styles["add-new-entry"]} ${isDarkTheme ? styles.dark : ""}`}>
      {remainingDays <= 0 && (
        <p className={styles["warning-text"]}>
          <IoWarningOutline />
          You have no more days available.
        </p>
      )}
      {!isEditing && remainingDays > 0 && (
        <button
          onClick={startEditingHandler}
          className={`${styles["add-new-entry-btn"]} ${isDarkTheme ? styles.dark : ""}`}
        >
          Add New Entry
        </button>
      )}
      {isEditing && remainingDays > 0 && (
        <EntryForm
          onCancelEditing={cancelEditingHandler}
          remainingDays={remainingDays}
        />
      )}
    </div>
  );
}

export default NewEntry;

//////////////////////
// ORIGINAl
//////////////////////
// function NewEntry({ onAddEntry }) {
//   const [isEditing, setIsEditing] = useState(false);

//   function saveEntryDataHandler(enteredEntryData) {
//     const entryData = {
//       ...enteredEntryData,
//       id: (Math.random() + 1).toFixed(2),
//     };

//     onAddEntry(entryData);
//     setIsEditing(false);

//     console.log(entryData);
//   }

//   function startEditingHandler() {
//     setIsEditing(true);
//   }

//   function cancelEditingHandler() {
//     setIsEditing(false);
//   }

//   return (
//     <div className={styles["add-new-entry"]}>
//       {!isEditing && <button onClick={startEditingHandler}>Add New Entry</button>}
//       {isEditing && (
//         <EntryForm
//           onSaveEntryData={saveEntryDataHandler}
//           onCancelEditing={cancelEditingHandler}
//         />
//       )}
//     </div>
//   );
// }
