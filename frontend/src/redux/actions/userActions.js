import axios from 'axios'
import userActionsTypes from './userActionsTypes'

export function register (email, password) {
  // const skyHost = 'http://192.168.0.33:5000'
  const homeHost = 'http://192.168.1.26:5000'

  return async (dispatch) => {
    try {
      const statusRegister = await axios.post(`${homeHost}/auth/register`, { email, password })
      // console.log(statusRegister)

      dispatch({
        type: userActionsTypes.REGISTERED,
        data: statusRegister
      })
    } catch {
      const statusRegister = await axios.post(`${homeHost}/auth/register`, { email, password })
      console.log(statusRegister)

      dispatch({
        type: userActionsTypes.NO_REGISTERED
      })
    }
  }
}

export function login (email, password) {
  // const skyHost = 'http://192.168.0.33:5000'
  const homeHost = 'http://192.168.1.26:5000'

  return async (dispatch) => {
    const user = await axios.post(`${homeHost}/auth/login`, { email, password })
    console.log('usuario logueado:')
    console.log(user)

    dispatch({
      type: userActionsTypes.LOGIN,
      data: user
    })
  }
}
