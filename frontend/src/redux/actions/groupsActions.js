import axios from 'axios'
import groupActionsTypes from './groupActionsTypes'

// const sky = 'http://192.168.0.33:5000'
const house = 'http://192.168.1.26:5000'

const host = house

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
