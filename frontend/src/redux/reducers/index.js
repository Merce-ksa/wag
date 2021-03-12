import { combineReducers } from 'redux'
import userReducer from './userReducer'
import statusRegisterReducer from './statusRegisterReducer'

const rootReducer = combineReducers({
  user: userReducer,
  statusRegister: statusRegisterReducer
})

export default rootReducer
