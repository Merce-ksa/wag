import { combineReducers } from 'redux'
import userReducer from './userReducer'
import groupReducer from './groupReducer'
import folderReducer from './folderReducer'

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupReducer,
  folders: folderReducer
})

export default rootReducer
