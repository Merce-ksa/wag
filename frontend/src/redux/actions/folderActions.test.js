import axios from 'axios'
import folderActionsTypes from './folderActionsTypes'
import { loadFolders, createFolder } from './folderActions'

jest.mock('axios')

describe('Given a loadGroups function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type Load_Groups', async () => {
      const { data } = {
        data: []
      }

      axios.get.mockReturnValueOnce({ data: [] })

      const action = {
        type: folderActionsTypes.LOAD_FOLDERS,
        folders: data
      }

      const dispatch = jest.fn()
      const fn = loadFolders('groupId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked but return a throw error', () => {
    test('Then dispatch with action type Load_Groups_error', async () => {
      axios.get.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: folderActionsTypes.LOAD_FOLDERS_ERROR
      }

      const dispatch = jest.fn()
      const fn = loadFolders('groupId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a createFolder function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type CREATE_FOLDER', async () => {
      axios.post.mockReturnValueOnce()

      const action = {
        type: folderActionsTypes.CREATE_FOLDER,
        folderLastUpdated: `${new Date()}`
      }
      const dispatch = jest.fn()
      const fn = createFolder('name', 'colorSelected', 'groupId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked but return a throw error', () => {
    test('Then dispatch with action type CREATE_FOLDER_ERROR', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: folderActionsTypes.CREATE_FOLDER_ERROR,
        folderLastUpdated: null
      }

      const dispatch = jest.fn()
      const fn = createFolder('name', 'colorSelected', 'groupId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})
