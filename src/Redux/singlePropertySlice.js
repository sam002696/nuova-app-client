import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singlePropertyDetails: null,
  inspectionReport: null,
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
      state.inspectionReport = action.payload.inspectionReport;
      state.error = false;
    },
    propertyFetchingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateInspectionReport: (state, action) => {
      state.inspectionReport = action.payload;
    },
  },
});

export const {
  propertyFetchingStart,
  propertyFetchingSuccess,
  propertyFetchingFailure,
  singlePropertyDetails,
  updateSingleProperty,
  updateInspectionReport,
  inspectionReport,
} = singlePropertySlice.actions;

export default singlePropertySlice.reducer;
