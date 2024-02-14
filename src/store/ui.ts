import { createSlice } from "@reduxjs/toolkit";

export type UIState = {
  loading: boolean;
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoader(state: UIState) {
      state.loading = true;
    },
    hideLoader(state: UIState) {
      state.loading = false;
    },
  },
});

export const { showLoader, hideLoader } = uiSlice.actions;
export default uiSlice.reducer;
