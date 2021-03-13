import groupActionTypes from '../actions/groupActionsTypes'

export default function groupReducer (state = [], actions) {
  switch (actions.type) {
    case groupActionTypes.LOAD_GROUPS:
      return actions.groups
    default:
      return state
  }
}
