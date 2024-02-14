import api from "api";
import { GET_PROFILE_DATA } from "api/queries/profile";
import { useDispatch } from "react-redux";
import { setProfile } from "store/profile";
import { showLoader, hideLoader } from "store/ui";

export const fetchProfile = async (apiKey: string, dispatch: Function) => {
  try {
    dispatch(showLoader());
    const response: any = await api.request(apiKey, GET_PROFILE_DATA);
    dispatch(setProfile(response?.currentUser));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(hideLoader());
  }
};

const useProfileService = () => {
  const dispatch = useDispatch();
  const _fetchProfile = async (apiKey: string) => {
    const response = await fetchProfile(apiKey, dispatch);
    return response;
  };

  return {
    fetchProfile: _fetchProfile,
  };
};

export default useProfileService;
