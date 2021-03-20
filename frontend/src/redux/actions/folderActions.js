import axios from 'axios'
import folderActionsTypes from './folderActionsTypes'
import hostApp from '../../constants/host'

const host = hostApp

export default function loadFolders (groupId) {
  return async (dispatch) => {
    try {
      const allFolders = await axios.get(`${host}/folder/${groupId}`, { withCredentials: true })
      console.log(allFolders.data)

      dispatch({
        type: folderActionsTypes.LOAD_FOLDERS,
        folders: allFolders.data
      })
    } catch {
      dispatch({
        type: folderActionsTypes.LOAD_FOLDERS_ERROR
      })
    }
  }
}
