import groupActionTypes from '../actions/groupActionsTypes'

export default function groupReducer (state = [], actions) {
  switch (actions.type) {
    case groupActionTypes.LOAD_GROUPS:
      return actions.groups

    case groupActionTypes.CREATE_GROUP:
      return actions.groupLastUpdated

    case groupActionTypes.CREATE_GROUP_ERROR:
      return actions.groupLastUpdated

    default:
      return state
  }
}
