import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'

export const loginAuth = (email, password) => {
  return async (dispatch) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
    if (response) {
      const { email } = response.user
      dispatch(login({ email }))
    } else {
      throw new Error('login failed')
    }
  }
}
