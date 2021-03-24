import groupActionTypes from '../actions/groupActionsTypes'

export default function statusGroupReducer (state = [], actions) {
  switch (actions.type) {
    case groupActionTypes.CREATE_GROUP:
      return actions.groupLastUpdated

    case groupActionTypes.CREATE_GROUP_ERROR:
      return actions.groupLastUpdated

    default:
      return state
  }
}
