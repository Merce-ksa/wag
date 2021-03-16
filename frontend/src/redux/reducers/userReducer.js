import actionTypes from '../actions/userActionsTypes'

export default function userReducer (state = [], actions) {
  switch (actions.type) {
    case actionTypes.LOGIN:
      return actions.data

    case actionTypes.LOGOUT:
      return {}

    case actionTypes.REGISTERED:
      return actions.data

    case actionTypes.LOAD_USER:
      return actions.user

    default:
      return state
  }
}
