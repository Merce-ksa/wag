import axios from 'axios'
import userActionsTypes from './userActionsTypes'
import AsyncStorage from '@react-native-community/async-storage'
// const skyHost = 'http://192.168.0.33:5000'
const homeHost = 'http://192.168.1.26:5000'

export function register (userName, email, password) {
  return async (dispatch) => {
    try {
      const statusRegister = await axios.post(`${homeHost}/auth/register`, { userName, email, password }, { withCredentials: true })
      // console.log(statusRegister)

      dispatch({
        type: userActionsTypes.REGISTERED,
        data: statusRegister
      })
    } catch {
      const statusRegister = await axios.post(`${homeHost}/auth/register`, { email, password }, { withCredentials: true })
      console.log(statusRegister)

      dispatch({
        type: userActionsTypes.NO_REGISTERED
      })
    }
  }
}

export function login (email, password) {
  return async (dispatch) => {
    const user = await axios.post(`${homeHost}/auth/login`, { email, password }, { withCredentials: true })
    // console.log('usuario logueado:')
    console.log(user)
    AsyncStorage.setItem('user', JSON.stringify(user.data))
    console.log(user.data)
    dispatch({
      type: userActionsTypes.LOGIN,
      data: user.data
    })
  }
}

export function logout () {
  return async (dispatch) => {
    await axios.post(`${homeHost}/auth/logout`, { withCredentials: true })
    AsyncStorage.removeItem('user')

    dispatch({
      type: userActionsTypes.LOGOUT
    })
  }
}

export function loadUser () {
  return async (dispatch) => {
    const userFromStorage = await AsyncStorage.getItem('user')
    const user = JSON.parse(userFromStorage)

    dispatch({
      type: userActionsTypes.LOAD_USER,
      user
    })
  }
}
