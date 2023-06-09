import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotifications: null,
  propertyManagerNotifications: null,
  tenantNotifications: null,
  landlordNotifications: null,
  contractorNotifications: null,
  loading: false,
  error: false,
};

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    notificationFetchingStart: (state) => {
      state.loading = true;
    },
    notificationFetchingSuccess: (state, action) => {
      state.loading = false;
      state.allNotifications = action.payload;
      state.error = false;
    },
    notificationPropertyManager: (state, action) => {
      state.propertyManagerNotifications = action.payload;
    },
    notificationTenant: (state, action) => {
      state.tenantNotifications = action.payload;
    },
    notificationLandlord: (state, action) => {
      state.landlordNotifications = action.payload;
    },
    notificationContractor: (state, action) => {
      state.contractorNotifications = action.payload;
    },
    notificationFetchingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  propertyManagerNotifications,
  notificationFetchingStart,
  notificationFetchingSuccess,
  notificationPropertyManager,
  notificationTenant,
  notificationLandlord,
  notificationContractor,
  notificationFetchingFailure,
} = notificationSlice.actions;

export default notificationSlice.reducer;
