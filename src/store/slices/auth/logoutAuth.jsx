import { signInWithEmailAndPassword } from "../../../firebase/config";
import { loginStart, loginSuccess, loginFailure } from "./AuthSlice";

export const loginAuth = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const userCredential = await signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
