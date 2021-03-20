import axios from 'axios'
import groupActionsTypes from './groupActionsTypes'
import hostApp from '../../constants/host'

const host = hostApp

export default function loadGroups () {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${host}/groups`, { withCredentials: true })
      dispatch({
        type: groupActionsTypes.LOAD_GROUPS,
        groups: data
      })
    } catch {
      dispatch({
        type: groupActionsTypes.LOAD_GROUPS_ERROR
      })
    }
  }
}
