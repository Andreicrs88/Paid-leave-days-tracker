import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  allEntries: [],
}

const entriesSlice = createSlice({
  name: "entries",
  initialState: initalState,
  reducers: {
    addNewEntry(state, action) {
      const newEntry = action.payload;
      state.allEntries.push(newEntry);
    },
    removeEntry(state, action) {
      const entryId = action.payload;
      state.allEntries = state.allEntries.filter((entry) => entry.id !== entryId);
    },   
  }
});

export const entriesActions = entriesSlice.actions;

export default entriesSlice;

