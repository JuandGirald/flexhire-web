import { useDispatch } from "react-redux";
import { setApiKey } from "store/auth";

const useAuthService = () => {
  const dispatch = useDispatch();
  const _setApiKey = async (apiKey: string) => {
    dispatch(setApiKey(apiKey));
  };

  return {
    setApiKey: _setApiKey,
  };
};

export default useAuthService;
