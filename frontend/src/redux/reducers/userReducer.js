import actionTypes from '../actions/userActionsTypes'

export default function userReducer (state = [], actions) {
  switch (actions.type) {
    case actionTypes.LOGIN:
      return actions.user

    case actionTypes.LOGOUT:
      return null

    default:
      return state
  }
}
