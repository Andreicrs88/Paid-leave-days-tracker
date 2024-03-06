import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkTheme: false,
}

const themeSlice = createSlice({
  name: "theme", 
  initialState: initialState, 
  reducers: {   
    applyDarkTheme(state) {
      state.isDarkTheme = true;
    },
    removeDarkTheme(state) {
      state.isDarkTheme = false;
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice;