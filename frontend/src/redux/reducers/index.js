import { combineReducers } from 'redux'
import userReducer from './userReducer'
import groupReducer from './groupReducer'
import statusGroupReducer from './statusGroupReducer'
import folderReducer from './folderReducer'
import statusFolderReducer from './statusFolderReducer'
import linkReducer from './linkReducer'
import statusLinkReducer from './statusLinkReducer'

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupReducer,
  folders: folderReducer,
  links: linkReducer,
  groupLastUpdated: statusGroupReducer,
  folderLastUpdated: statusFolderReducer,
  linksLastUpdated: statusLinkReducer
})

export default rootReducer
