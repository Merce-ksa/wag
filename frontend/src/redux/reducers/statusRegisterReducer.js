import actionTypes from '../actions/userActionsTypes'

export default function statusRegisterReducer (state = [], actions) {
  switch (actions.type) {
    case actionTypes.REGISTERED:
      return actions.data

    default:
      return state
  }
}
