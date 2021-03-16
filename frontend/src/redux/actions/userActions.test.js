import userActionsTypes from './userActionsTypes'
import axios from 'axios'
import { loadUserFromStorage } from '../actions/userActions'

jest.mock('axios')

describe('Given a loadUserFromStorage function', () => {
  describe('When is called', () => {
    let store
    test('Then axios is called', async () => {
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
