import axios from 'axios'
import userActionsTypes from './userActionsTypes'
import AsyncStorage from '@react-native-community/async-storage'
// const host = 'http://192.168.0.33:5000'
const host = 'http://192.168.1.26:5000'

export function register (userName, email, password) {
  return async (dispatch) => {
    try {
      const user = await axios.post(`${host}/auth/register`, { userName, email, password }, { withCredentials: true })
        .then(() => axios.post(`${host}/auth/login`, { email, password }, { withCredentials: true }))
        .then(() => axios.get(`${host}/user/me`, { withCredentials: true }))

      AsyncStorage.setItem('user', JSON.stringify(user.data))

      dispatch({
        type: userActionsTypes.REGISTERED,
        data: user.data
      })
    } catch {
      console.log('registro fallido')

      dispatch({
        type: userActionsTypes.REGISTERED_ERROR
      })
    }
  }
}

export function login (email, password) {
  return async (dispatch) => {
    try {
      const user = await axios.post(`${host}/auth/login`, { email, password }, { withCredentials: true })
        .then(() => axios.get(`${host}/user/me`, { withCredentials: true }))

      AsyncStorage.setItem('user', JSON.stringify(user.data))

      dispatch({
        type: userActionsTypes.LOGIN,
        data: user.data
      })
    } catch {
      dispatch({
        type: userActionsTypes.LOGIN_ERROR
      })
    }
  }
}

export function logout () {
  return async (dispatch) => {
    await axios.post(`${host}/auth/logout`, { withCredentials: true })
    AsyncStorage.removeItem('user')

    dispatch({
      type: userActionsTypes.LOGOUT
    })
  }
}

export function loadUserFromStorage () {
  return async (dispatch) => {
    const userFromStorage = await AsyncStorage.getItem('user')
    const user = JSON.parse(userFromStorage)

    dispatch({
      type: userActionsTypes.LOAD_USER,
      user
    })
  }
}
