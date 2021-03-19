import axios from 'axios'
import groupActionsTypes from './groupActionsTypes'
import loadGroups from './groupsActions'

jest.mock('axios')

describe('Given a loadGroups function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type Load_Groups', async () => {
      const data = { MockActionReturnGreen: 'fakeData' }

      axios.get.mockReturnValueOnce({ data })

      const action = {
        type: groupActionsTypes.LOAD_GROUPS,
        groups: data
      }

      const dispatch = jest.fn()
      const fn = loadGroups()
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('When is invoked but return a throw error', () => {
  test('Then dispatch with action type Load_Groups_error', async () => {
    axios.get.mockImplementationOnce(() => { throw new Error() })

    const action = {
      type: groupActionsTypes.LOAD_GROUPS_ERROR
    }

    const dispatch = jest.fn()
    const fn = loadGroups()
    await fn(dispatch)
    expect(dispatch).toHaveBeenCalledWith(action)
  })
})
