import axios from 'axios'
import userActionsTypes from './userActionsTypes'

export default function register (email, password) {
  return async (dispatch) => {
    console.log(process.env.REACT_APP_BACKEND_REGISTER)
    await axios.post('http://localhost:5000/user', { email, password })
    dispatch({
      type: userActionsTypes.USER_REGISTERED
    })
  }
}
