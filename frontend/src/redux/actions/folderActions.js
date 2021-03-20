import axios from 'axios'
import folderActionsTypes from './folderActionsTypes'

// const sky = 'http://192.168.0.33:5000'
const house = 'http://192.168.1.26:5000'

const host = house

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
