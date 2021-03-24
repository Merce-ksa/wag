import folderActionsTypes from '../actions/folderActionsTypes'

export default function statusFolderReducer (state = [], actions) {
  switch (actions.type) {
    case folderActionsTypes.CREATE_FOLDER:
      return actions.folderLastUpdated

    case folderActionsTypes.CREATE_FOLDER_ERROR:
      return actions.folderLastUpdated
    default:
      return state
  }
}
