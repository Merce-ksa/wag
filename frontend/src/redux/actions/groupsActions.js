import axios from 'axios'
import groupActionsTypes from './groupActionsTypes'

// const skyHost = 'http://192.168.0.33:5000'
const homeHost = 'http://192.168.1.26:5000'

export default function loadGroups () {
  return async (dispatch) => {
    try {
      const allGroups = await axios.get(`${homeHost}/groups`, { withCredentials: true })
      const user = await axios.get(`${homeHost}/user/me`, { withCredentials: true })

      dispatch({
        type: groupActionsTypes.LOAD_GROUPS,
        groups: allGroups.data
      })
    } catch {

    }
  }
}
