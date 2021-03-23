import folderActionTypes from '../actions/folderActionsTypes'

export default function folderReducer (state = [], actions) {
  switch (actions.type) {
    case folderActionTypes.LOAD_FOLDERS:
      return actions.folders

    case folderActionTypes.CREATE_FOLDER:
      return actions.folderLastUpdated

    case folderActionTypes.CREATE_FOLDER_ERROR:
      return actions.folderLastUpdated
    default:
      return state
  }
}
