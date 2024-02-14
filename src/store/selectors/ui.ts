import { RootState } from "store";
import { UIState } from "store/ui";

export const LOADING_SELECTOR = (state: RootState) => {
  const { ui = {} as UIState } = { ...state };
  return ui.loading;
};
