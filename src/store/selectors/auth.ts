import { RootState } from "store";
import { AuthState } from "store/auth";

export const API_KEY_SELECTOR = (state: RootState) => {
  const { auth = {} as AuthState } = { ...state };
  return auth.apiKey;
};
