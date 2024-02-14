import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  apiKey: string | undefined;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    apiKey: undefined,
  },
  reducers: {
    setApiKey(state: AuthState, action: PayloadAction<string>) {
      state.apiKey = action.payload;
    },
    clearApiKey(state: AuthState) {
      state.apiKey = undefined;
    },
  },
});

export const { setApiKey, clearApiKey } = authSlice.actions;
export default authSlice.reducer;
