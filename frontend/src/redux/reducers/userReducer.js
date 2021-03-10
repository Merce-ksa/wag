import actionTypes from '../actions/userActionsTypes'

export default function userReducer (state = [], actions) {
  switch (actions.type) {
    case actionTypes.LOGIN:
      return actions.user

    case actionTypes.LOGOUT:
      return null

    case actionTypes.REGISTERED:
      return 200

    default:
      return state
  }
}
