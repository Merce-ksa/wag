import axios from 'axios'
import groupActionsTypes from './groupActionsTypes'
import hostApp from '../../constants/host'

const host = hostApp

export function loadGroups () {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${host}/groups`, { withCredentials: true })

      console.log(data)

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

export function createGroup (name, members) {
  return async (dispatch) => {
    try {
      await axios.post(`${host}/groups`, { name, members }, { withCredentials: true })

      dispatch({
        type: groupActionsTypes.CREATE_GROUP,
        groupLastUpdated: `${new Date()}`
      })
    } catch {
      dispatch({
        type: groupActionsTypes.CREATE_GROUP_ERROR,
        groupLastUpdated: null
      })
    }
  }
}
