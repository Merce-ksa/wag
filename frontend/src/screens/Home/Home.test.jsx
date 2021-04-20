import React from 'react'
import { Provider } from 'react-redux'
import * as groupsActions from '../../redux/actions/groupsActions'
import * as userActions from '../../redux/actions/userActions'
import { render, waitFor, fireEvent } from '@testing-library/react-native'
import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Home from './Home'

const mockStore = configureStore([thunk])

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useIsFocused: () => false
}))

jest.mock('@react-native-community/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve()),
  setItem: jest.fn(() => Promise.resolve())
}))

describe('Given a Home function', () => {
  let store
  let navigation
  beforeEach(() => {
    jest.spyOn(groupsActions, 'loadGroups').mockReturnValueOnce({ type: '' })
    jest.spyOn(userActions, 'loadUserFromStorage').mockReturnValueOnce({ type: '' })
    store = mockStore({
      groups: [
        {
          grouId: 'firstNumber',
          name: 'first Group Name',
          date: 'mockDate'
        },
        {
          grouId: 'secondNumber',
          name: 'second Group Name',
          date: 'mockDate'
        }
      ],
      user: {
        userName: 'mockName'
      },
      groupLastUpdated: 'mockNewDate'
    })

    navigation = {
      navigate: jest.fn()
    }
  })

  describe('When is rendered', () => {
    test('Should list user groups', async () => {
      const { getAllByTestId } = await waitFor(() => render(<Provider store={store}><Home navigation = { navigation } /></Provider>))

      expect(getAllByTestId('group-name').length).toBe(2)
      expect(getAllByTestId('group-name')[0].props.children).toBe('first Group Name')
    })
  })

  describe('When the group button is pressed', () => {
    test('Then navigation should invoked', async () => {
      const { getAllByTestId } = await waitFor(() => render(<Provider store={store}><Home navigation = { navigation } /></Provider>))

      fireEvent.press(getAllByTestId('group-navigate')[0])
      console.log(getAllByTestId('group-navigate')[0].props)
      expect(getAllByTestId('group-navigate')[0].props).toBeDefined()
    })
  })

  describe('When the profile button is pressed', () => {
    test('Then navigation should invoked', async () => {
      const { getByTestId } = await waitFor(() => render(<Provider store={store}><Home navigation = { navigation } /></Provider>))

      fireEvent.press(getByTestId('profile-navigate'))

      expect(getByTestId('profile-navigate').props).toBeDefined()
    })
  })

  describe('When the New Group button is pressed', () => {
    test('Then navigation should invoked', async () => {
      const { getByTestId } = await waitFor(() => render(<Provider store={store}><Home navigation = { navigation } /></Provider>))

      fireEvent.press(getByTestId('group-navigate'))

      expect(getByTestId('group-navigate').props).toBeDefined()
    })
  })
})
