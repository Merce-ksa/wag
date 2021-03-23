import axios from 'axios'
import linkActionsTypes from './linkActionsTypes'
import hostApp from '../../constants/host'

const host = hostApp

export function loadLinks (folderId) {
  return async (dispatch) => {
    try {
      const allLinks = await axios.get(`${host}/link/${folderId}`, { widthCredentials: true })
      dispatch({
        type: linkActionsTypes.LOAD_LINKS,
        links: allLinks.data
      })
    } catch {
      dispatch({
        type: linkActionsTypes.LOAD_LINKS_ERROR,
        links: null
      })
    }
  }
}

export function createLink (url, name, description, tag, folderId) {
  console.log(url, name, description)
  return async (dispatch) => {
    try {
      await axios.post(`${host}/link/`, { url, name, description, tag, folderId }, { widthCredentials: true })
      dispatch({
        type: linkActionsTypes.CREATE_LINKS,
        statusLink: true
      })
    } catch {
      dispatch({
        type: linkActionsTypes.CREATE_LINKS_ERROR,
        statusLink: false
      })
    }
  }
}
