import axios from 'axios'
import linkActionsTypes from './linkActionsTypes'
import { loadLinks, createLink } from './linkActions'

jest.mock('axios')

describe('Given a loadLinks function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type LOAD_LINKS', async () => {
      const { data } = { data: [] }

      axios.get.mockReturnValueOnce({ data: [] })

      const action = {
        type: linkActionsTypes.LOAD_LINKS,
        links: data
      }

      const dispatch = jest.fn()
      const fn = loadLinks('folderId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked but return a throw error', () => {
    test('Then dispatch with action type LOAD_LINKS_ERROR', async () => {
      axios.get.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: linkActionsTypes.LOAD_LINKS_ERROR,
        links: null
      }

      const dispatch = jest.fn()
      const fn = loadLinks('folderId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})

describe('Given a createLink function', () => {
  describe('When is invoked with parameters', () => {
    test('Then dispatch an object with action type CREATE_LINK', async () => {
      axios.post.mockReturnValueOnce()

      const action = {
        type: linkActionsTypes.CREATE_LINK,
        linksLastUpdated: `${new Date()}`
      }
      const dispatch = jest.fn()
      const fn = createLink('url', 'name', 'description', 'tagSelected', 'folderId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })

  describe('When is invoked but return a throw error', () => {
    test('Then dispatch with action type CREATE_LINK_ERROR', async () => {
      axios.post.mockImplementationOnce(() => { throw new Error() })

      const action = {
        type: linkActionsTypes.CREATE_LINK_ERROR,
        linksLastUpdated: null
      }

      const dispatch = jest.fn()
      const fn = createLink('url', 'name', 'description', 'tagSelected', 'folderId')
      await fn(dispatch)
      expect(dispatch).toHaveBeenCalledWith(action)
    })
  })
})
