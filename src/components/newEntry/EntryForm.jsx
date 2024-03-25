// utils
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { entriesActions } from "store/entries-slice";

// styles
import styles from "./EntryForm.module.css";

function EntryForm({ onCancelEditing, remainingDays }) {
  const dispatchFn = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDays, setEnteredDays] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function changeLocationHandler(event) {
    setEnteredLocation(event.target.value);
  }

  function changeDescriptionHandler(event) {
    setEnteredDescription(event.target.value);
  }

  function changeDaysHandler(event) {
    setEnteredDays(event.target.value);
  }

  function changeDateHandler(event) {
    setEnteredDate(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const newEntryData = {
      title: enteredLocation,
      description: enteredDescription,
      maxDaysAvailable: 21,
      date: enteredDate,
      daysSpent: +enteredDays,
      id: (Math.random() + 1).toFixed(3),
    };

    dispatchFn(entriesActions.addNewEntry(newEntryData));

    // reset inputs
    setEnteredLocation("");
    setEnteredDescription("");
    setEnteredDays("");
    setEnteredDate("");

    // close the form
    onCancelEditing();
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles["new-item-inputs"]}>
        <div className={`${styles["new-item-input"]} ${isDarkTheme ? styles.dark : ""}`}>
          <label htmlFor="item-location">Enter location name:</label>
          <input
            value={enteredLocation}
            id="item-location"
            type="text"
            onChange={changeLocationHandler}
            required
          />
        </div>
        <div className={`${styles["new-item-input"]} ${isDarkTheme ? styles.dark : ""}`}>
          <label htmlFor="item-days">Enter description:</label>
          <textarea
            value={enteredDescription}
            id="item-description"
            rows="5"
            cols="20"
            onChange={changeDescriptionHandler}
            required
          />
        </div>
        <div className={`${styles["new-item-input"]} ${isDarkTheme ? styles.dark : ""}`}>
          <label htmlFor="item-days">Enter days spent:</label>
          <input
            value={enteredDays}
            id="item-days"
            type="number"
            min="1"
            max={remainingDays}
            onChange={changeDaysHandler}
            required
          />
        </div>
        <div className={`${styles["new-item-input"]} ${isDarkTheme ? styles.dark : ""}`}>
          <label htmlFor="item-date">Enter event date:</label>
          <input
            value={enteredDate}
            id="item-date"
            type="date"
            onChange={changeDateHandler}
            required
          />
        </div>
      </div>
      <div className={`${styles["new-item-actions"]} ${isDarkTheme ? styles.dark : ""} `}>
        <button type="submit">Add entry</button>
        <button
          type="button"
          onClick={onCancelEditing}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EntryForm;
