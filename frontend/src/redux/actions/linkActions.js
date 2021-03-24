import axios from 'axios'
import linkActionsTypes from './linkActionsTypes'
import hostApp from '../../constants/host'

const host = hostApp

export function loadLinks (folderId) {
  return async (dispatch) => {
    try {
      const allLinks = await axios.get(`${host}/link/${folderId}`, { withCredentials: true })

      dispatch({
        type: linkActionsTypes.LOAD_LINKS,
        links: allLinks.data
      })
    } catch {
      dispatch({
        type: linkActionsTypes.LOAD_LINKS_ERROR
      })
    }
  }
}

export function createLink (url, name, description, tagSelected, folderId) {
  const tag = tagSelected.tag
  return async (dispatch) => {
    try {
      await axios.post(`${host}/link/`, { url, name, description, tag, folderId }, { withCredentials: true })
      dispatch({
        type: linkActionsTypes.CREATE_LINK,
        linksLastUpdated: `${new Date()}`
      })
    } catch {
      dispatch({
        type: linkActionsTypes.CREATE_LINK_ERROR,
        linksLastUpdated: null
      })
    }
  }
}
