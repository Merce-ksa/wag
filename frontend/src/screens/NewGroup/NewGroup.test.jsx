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
import NewGroup from './NewGroup'

describe('Given a NewGroup component', () => {
  const navigation = {
    navigate: jest.fn()
  }

  afterEach(cleanup)

  describe('When is rendered', () => {
    test('Then the form should be printed', async () => {
      const { getByTestId } =
        render(
            <Provider store={store}>
                <NewGroup navigation = { navigation }/>
            </Provider>
        )

      const textNewGroupButton = getByTestId('createNewGroupButtonText')

      await waitFor(() => {
        expect(getByTestId('inputGroupName')).toBeTruthy()
        expect(getByTestId('inputGroupName')).toHaveProp('placeholder', 'Group name')
        expect(getByTestId('inputAddMembersGroup')).toBeTruthy()
        expect(getByTestId('inputAddMembersGroup')).toHaveProp('placeholder', 'Add members')
        expect(getByTestId('createNewGroupButton')).toContainElement(textNewGroupButton)
        expect(textNewGroupButton).toHaveTextContent('Create')
      })
    })
  })

  describe('When the content of inputs changes', () => {
    test('Should update inputs values', () => {
      const { getByTestId } = render(
        <Provider store={store}>
            <NewGroup navigation = { navigation }/>
        </Provider>
      )

      expect(getByTestId('inputGroupName').props.value).toBe(undefined)
      expect(getByTestId('inputAddMembersGroup').props.value).toBe(undefined)

      fireEvent.changeText(getByTestId('inputGroupName'), 'New group name')
      expect(getByTestId('inputGroupName').props.value).toBe('New group name')

      fireEvent.changeText(getByTestId('inputAddMembersGroup'), 'user@user.com')
      expect(getByTestId('inputAddMembersGroup').props.value).toBe('user@user.com')
    })
  })

  describe('When clicking create new group button', () => {
    test('Should navigate to Home component', () => {
      const { getByTestId } = render(
        <Provider store={store}>
            <NewGroup navigation = { navigation }/>
        </Provider>
      )

      fireEvent.press(getByTestId('createNewGroupButton'))
      expect(navigation.navigate).toHaveBeenCalledWith('Home')
    })
  })
})
