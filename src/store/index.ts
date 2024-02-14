import { configureStore } from "@reduxjs/toolkit";
import authReducer, { AuthState } from "./auth";
import uiReducer, { UIState } from "./ui";
import profileReducer, { ProfileState } from "./profile";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    profile: profileReducer,
  },
});

export type RootState = {
  auth: AuthState;
  ui: UIState;
  profile: ProfileState;
};
