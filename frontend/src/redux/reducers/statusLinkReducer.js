import linkActionTypes from '../actions/linkActionsTypes'

export default function statusLinkReducer (state = [], actions) {
  switch (actions.type) {
    case linkActionTypes.CREATE_LINK:
      return actions.statusLink
    case linkActionTypes.CREATE_LINK_ERROR:
      return actions.statusLink
    default:
      return state
  }
}
