import { RootState } from "store";
import { ProfileState } from "store/profile";

export const PROFILE_SELECTOR = (state: RootState) => {
  const { profile = {} as ProfileState } = { ...state };
  return profile;
};
