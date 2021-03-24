import axios from 'axios'
import groupActionsTypes from './groupActionsTypes'
import { loadGroups, createGroup } from './groupsActions'

jest.mock('axios')

describe('Given a loadGroups function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type LOAD_GROUPS', async () => {
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

  describe('When is invoked but return a throw error', () => {
    test('Then dispatch with action type LOAD_GROUPS_ERROR', async () => {
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
})

describe('Given a createGroup function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type CREATE_GROUP', async () => {
      axios.post.mockReturnValueOnce()

      const action = {
        type: groupActionsTypes.CREATE_GROUP,
        groupLastUpdated: `${new Date()}`
      }
      const dispatch = jest.fn()
      const fn = createGroup('name', 'members')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked but return a throw error', () => {
    test('Then dispatch with action type CREATE_GROUP_ERROR', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: groupActionsTypes.CREATE_GROUP_ERROR,
        groupLastUpdated: null
      }

      const dispatch = jest.fn()
      const fn = createGroup('name', 'members')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})
