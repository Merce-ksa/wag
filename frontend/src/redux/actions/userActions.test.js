import userActionsTypes from './userActionsTypes'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { register, login, loadUserFromStorage } from '../actions/userActions'
import store from '../stores/configureStore'

jest.mock('@react-native-community/async-storage')
jest.mock('axios')

const mockReturnValues = {
  arrayUser: JSON.stringify(['red', 'blue']),
  objectUser: JSON.stringify({
    isATest: true,
    hasNestedData: {
      ohYeah: 'it\'s true'
    }
  }),
  stringUser: JSON.stringify('testing string')
}

jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(() => {
    return new Promise((resolve) => {
      resolve(null)
    })
  }),
  getItem: jest.fn((key) => {
    return new Promise((resolve) => {
      if (mockReturnValues[key]) {
        resolve(mockReturnValues[key])
      } else {
        resolve(null)
      }
    })
  })
}))

describe('Given a Login function', () => {
  describe('When it is invoked with the email and password of a registered user', () => {
    test('Should dispatch an object with action type is LOGIN', async () => {
      const mockUserLogin = {
        data: [{ email: 'fakeEmail', password: 'facePass' }]
      }

      axios.get.mockReturnValueOnce(mockUserLogin.data)

      const dispatch = jest.fn()
      const fn = login('email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalled()
    })
  })

  describe('When invoked and throwing an error', () => {
    test('Then should dispatch an object with Type LOGIN_ERROR and payload (401)', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })
      const action = {
        type: userActionsTypes.LOGIN_ERROR
      }
      const dispatch = jest.fn()
      const fn = login('email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a Register function', () => {
  describe('When it is invoked with the name, email and password of a registered user', () => {
    test('Should dispatch an object with action type is RESGITERED', async () => {
      axios.get.mockReturnValueOnce({ json: ([]) })

      const action = {
        type: userActionsTypes.REGISTERED,
        data: []
      }

      const dispatch = jest.fn()
      const fn = register('userName', 'email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When invoked and throwing an error', () => {
    test('Then should dispatch an object with Type REGISTERED_ERROR', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: userActionsTypes.REGISTERED_ERROR
      }

      const dispatch = jest.fn()
      const fn = register('userName', 'email', 'password')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

xdescribe('Given a loadUserFromStorage function', () => {
  describe('When is called', () => {
    let store
    test('Then axios is called', async () => {
      // store.save('objectUser', JSON.parse(mockReturnValues.objectUser)).then((error) => {
      //   expect(error).toEqual(null)
      //   expect(AsyncStorage.setItem).toBeCalledWith('objectUser', mockReturnValues.objectUser)
      //   expect(dispatch).toHaveBeenCalledWith(action)
      // })

      axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({
        user: { results: [{ name: 'mock user name' }] }
      }))

      store.dispatch = jest.fn()

      const dispatchFunction = loadUserFromStorage()

      await dispatchFunction(store.dispatch)

      expect(store.dispatch).toHaveBeenCalledWith({
        type: userActionsTypes.LOAD_USER,
        user: { userName: 'mock user name' }
      })
    })
  })
})
