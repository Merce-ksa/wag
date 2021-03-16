import { combineReducers } from 'redux'
import userReducer from './userReducer'
import groupReducer from './groupReducer'

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupReducer
})

export default rootReducer
