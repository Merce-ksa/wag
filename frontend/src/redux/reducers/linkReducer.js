import linkActionsTypes from '../actions/linkActionsTypes'

export default function linkReducer (state = [], actions) {
  switch (actions.type) {
    case linkActionsTypes.LOAD_LINKS:
      return actions.links

    default:
      return state
  }
}
