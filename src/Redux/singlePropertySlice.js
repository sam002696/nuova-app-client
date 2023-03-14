import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singlePropertyDetails: null,
  loading: false,
  error: false,
};

export const singlePropertySlice = createSlice({
  name: "singlePropertyDetails",
  initialState,
  reducers: {
    propertyFetchingStart: (state) => {
      state.loading = true;
    },
    propertyFetchingSuccess: (state, action) => {
      state.loading = false;
      state.singlePropertyDetails = action.payload;
      state.error = false;
    },
    propertyFetchingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateSingleProperty: (state, action) => {
      state.singlePropertyDetails = action.payload;
      //   window.location.reload(false);
    },
  },
});

export const {
  propertyFetchingStart,
  propertyFetchingSuccess,
  propertyFetchingFailure,
  singlePropertyDetails,
  updateSingleProperty,
} = singlePropertySlice.actions;

export default singlePropertySlice.reducer;
