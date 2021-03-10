import axios from 'axios'
import userActionsTypes from './userActionsTypes'

export default function register (email, password) {
  const skyHost = 'http://192.168.0.33:5000'

  return async (dispatch) => {
    await axios.post(`${skyHost}/user`, { email, password })

    dispatch({
      type: userActionsTypes.REGISTERED
    })
  }
}
