import actionTypes from '../actions/userActionsTypes'

export default function userReducer (state = [], actions) {
  switch (actions.type) {
    case actionTypes.LOGIN:
      return actions.data

    default:
      return state
  }
}
