import { combineReducers } from 'redux'
import userReducer from './userReducer'
import groupReducer from './groupReducer'
import folderReducer from './folderReducer'
import linkReducer from './linkReducer'

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupReducer,
  folders: folderReducer,
  links: linkReducer
})

export default rootReducer
