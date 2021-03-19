import axios from 'axios'
import folderActionsTypes from './folderActionsTypes'
import loadFolders from './folderActions'

jest.mock('axios')

describe('Given a loadGroups function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type Load_Groups', async () => {
      const mockAllFolders = [  {data: { FakeDataReturn: 'fakeData' }]

      axios.get.mockReturnValueOnce({ mockAllFolders.data })

      const action = {
        type: folderActionsTypes.LOAD_FOLDERS,
        groups: mockAllFolders.data
      }

      const dispatch = jest.fn()
      const fn = loadFolders()
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('When is invoked but return a throw error', () => {
  test('Then dispatch with action type Load_Groups_error', async () => {
    axios.get.mockImplementationOnce(() => { throw new Error() })

    const action = {
      type: folderActionsTypes.LOAD_FOLDERS_ERROR
    }

    const dispatch = jest.fn()
    const fn = loadFolders()
    await fn(dispatch)
    expect(dispatch).toHaveBeenCalledWith(action)
  })
})
