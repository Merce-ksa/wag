import axios from 'axios'
import folderActionsTypes from './folderActionsTypes'
import hostApp from '../../constants/host'

const host = hostApp

export function loadFolders (groupId) {
  return async (dispatch) => {
    try {
      const allFoldersGroup = await axios.get(`${host}/folder/${groupId}`, { withCredentials: true })
      console.log(allFoldersGroup)

      dispatch({
        type: folderActionsTypes.LOAD_FOLDERS,
        folders: allFoldersGroup.data
      })
    } catch {
      dispatch({
        type: folderActionsTypes.LOAD_FOLDERS_ERROR,
        folders: null
      })
    }
  }
}

export function createFolder (name, colorSelected, groupId) {
  console.log(colorSelected.color)
  const color = colorSelected.color
  return async (dispatch) => {
    try {
      await axios.post(`${host}/folder/`, { name, color, groupId }, { withCredentials: true })

      dispatch({
        type: folderActionsTypes.CREATE_FOLDER,
        folderLastUpdated: `${new Date()}`
      })
    } catch {
      dispatch({
        type: folderActionsTypes.CREATE_FOLDER_ERROR,
        folderLastUpdated: null
      })
    }
  }
}
