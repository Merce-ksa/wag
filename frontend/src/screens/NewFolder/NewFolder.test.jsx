import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/stores/configureStore'
import '@testing-library/jest-native/extend-expect'
import {
  render,
  waitFor,
  fireEvent,
  cleanup
} from '@testing-library/react-native'
import NewFolder from './NewFolder'

jest.mock('react-native-dropdown-picker')

describe('Given a NewGroup component', () => {
  const navigation = {
    navigate: jest.fn()
  }

  const route = {
    params: {
      groupId: 'GR2022344110654'
    }
  }

  afterEach(cleanup)

  describe('When is rendered', () => {
    test('Then the form should be printed', async () => {
      const { getByTestId } = render(
              <Provider store={store}>
                  <NewFolder route = {route} navigation = { navigation }/>
              </Provider>
      )

      await waitFor(() => {
        expect(getByTestId('newFolderTitle')).toHaveTextContent('New Folder')
      })
    })
  })

  describe('When the content of inputs changes', () => {
    test('Should update inputs values', () => {
      const { getByTestId } = render(
        <Provider store={store}>
            <NewFolder route = {route} navigation = { navigation }/>
        </Provider>
      )

      expect(getByTestId('inputFolderName').props.value).toBe(undefined)

      fireEvent.changeText(getByTestId('inputFolderName'), 'New folder name')

      expect(getByTestId('inputFolderName').props.value).toBe('New folder name')
    })
  })
})
