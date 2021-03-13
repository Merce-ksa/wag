import { combineReducers } from 'redux'
import userReducer from './userReducer'
import statusRegisterReducer from './statusRegisterReducer'
import groupReducer from './groupReducer'

const rootReducer = combineReducers({
  user: userReducer,
  statusRegister: statusRegisterReducer,
  groups: groupReducer
})

export default rootReducer
