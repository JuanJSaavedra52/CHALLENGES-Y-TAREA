import { signInWithPopup } from "../../../firebase/config";
import { loginStart, loginSuccess, loginFailure } from "./AuthSlice";
import { googleProvider } from "../../../firebase/config";

export const googleAuth = () => async (dispatch) => {
  try {
    dispatch(loginStart());
    const result = await signInWithPopup(googleProvider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
