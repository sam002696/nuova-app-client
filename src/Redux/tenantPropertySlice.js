import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tenantPropertyDetails: null,
  loading: false,
  error: false,
};

export const tenantPropertySlice = createSlice({
  name: "tenantPropertyDetails",
  initialState,
  reducers: {
    fetchingStart: (state) => {
      state.loading = true;
    },
    fetchingSuccess: (state, action) => {
      state.loading = false;
      state.tenantPropertyDetails = action.payload;
      state.error = false;
    },
    fetchingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.tenantPropertyDetails = null;
    },
  },
});

export const {
  fetchingStart,
  fetchingSuccess,
  fetchingFailure,
  tenantPropertyDetails,
} = tenantPropertySlice.actions;

export default tenantPropertySlice.reducer;
