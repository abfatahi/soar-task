import { createSlice } from "@reduxjs/toolkit";
import { layoutContent } from "@/constants/content";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    activeTab: layoutContent.dashboard,
    profile: {
      name: "",
      email: "",
      userName: "",
      password: "",
      dateOfBirth: "",
      presentAddress: "",
      permanentAddress: "",
      city: "",
      postalCode: "",
      country: "",
    },
  },
  reducers: {
    handleTabChange: (state, { payload }) => {
      state.activeTab = payload;
      return state;
    },

    handleUpdateUserData: (state, { payload }) => {
      state.profile = payload;
      return state;
    },
  },
});

export const { handleTabChange, handleUpdateUserData } = userSlice.actions;

export const userSelector = (state) => state.user;
