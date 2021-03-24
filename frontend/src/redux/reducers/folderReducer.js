import folderActionTypes from '../actions/folderActionsTypes'

export default function folderReducer (state = [], actions) {
  switch (actions.type) {
    case folderActionTypes.LOAD_FOLDERS:
      return actions.folders

    default:
      return state
  }
}
