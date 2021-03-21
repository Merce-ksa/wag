import axios from 'axios'
import linkActionsTypes from './linkActionsTypes'
import hostApp from '../../constants/host'

const host = hostApp

export default function loadLinks (folderId) {
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
