import axios from 'axios'
import linkActionsTypes from './linkActionsTypes'
import { loadLinks } from './linkActions'

jest.mock('axios')

describe('Given a loadLinks function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type LOAD_LINKS', async () => {
      const mockAllLinks = []

      axios.get.mockReturnValueOnce(mockAllLinks.data)

      const action = {
        type: linkActionsTypes.LOAD_LINKS,
        links: mockAllLinks.data
      }

      const dispatch = jest.fn()
      const fn = loadLinks('folderId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('When is invoked but return a throw error', () => {
  test('Then dispatch with action type LOAD_LINKS_ERROR', async () => {
    axios.get.mockImplementationOnce(() => { throw new Error() })

    const action = {
      type: linkActionsTypes.LOAD_LINKS_ERROR
    }

    const dispatch = jest.fn()
    const fn = loadLinks('folderId')
    await fn(dispatch)
    expect(dispatch).toHaveBeenCalledWith(action)
  })
})
