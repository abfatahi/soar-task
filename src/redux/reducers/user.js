import { createSlice } from "@reduxjs/toolkit";
import { sidebarContent } from "../../constants/content";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    errors: null,
    activeTab: sidebarContent.dashboard,
    profile: {
      name: "Abdulfatahi Ishaq",
      email: "abfatahi.iaf@gmail.com",
      userName: "abfat_snr",
      password: "Test1234!",
      dateOfBirth: "2005-11-02",
      presentAddress: "No 12, Bode Thomas Street, Ikeja, Lagos",
      permanentAddress: "No 12, Bode Thomas Street, Ikeja, Lagos",
      city: "Ikeja",
      postalCode: "100111",
      country: "Nigeria",
    },
  },
  reducers: {
    handleTabChange: (state, { payload }) => {
      state.activeTab = payload;
      return state;
    },
  },
});

export const { handleTabChange } = userSlice.actions;

export const userSelector = (state) => state.user;
