// espremiumSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bauhausSlice = createSlice({
  name: "bauhaus",
  initialState: {
    adminStatus: false,
    imagesRedux: [],
    textsRedux: [],
  },
  reducers: {
    setAdminStatus(state, action) {
      state.adminStatus = action.payload;
    },
    setImages(state, action) {
      state.imagesRedux = action.payload;
    },
    setTexts(state, action) {
      state.textsRedux = action.payload;
    },
  },
});

export const { setAdminStatus, setImages, setTexts } = bauhausSlice.actions;

export const bauhausReducer = bauhausSlice.reducer;
