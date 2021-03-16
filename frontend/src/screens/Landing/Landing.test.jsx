import React from 'react'
// import AppLoading from 'expo-app-loading'
// import * as fonts from 'expo-font'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react-native'
import Landing from './Landing'

jest.mock('expo-app-loading')

describe('Given a Landing function', () => {
  // beforeEach(() => {
  //   jest.spyOn(fonts, 'useFonts').mockReturnValue([true])
  // })
  describe('When is rendered', () => {
    test('Should Landing match the snapshot ', () => {
      const landing = renderer.create(<Landing />).toJSON()
      expect(landing).toMatchSnapshot()
    })
  })

  describe('When clicking login button', () => {
    test('Should calls the send handler', () => {
      const navigation = {
        navigate: jest.fn()
      }

      const { getByTestId } = render(<Landing navigation = { navigation } />)

      fireEvent.press(getByTestId('register'))
      expect(navigation.navigate).toHaveBeenCalled()
    })
    test('Should calls the send handler', () => {
      const navigation = {
        navigate: jest.fn()
      }

      const { getByTestId } = render(<Landing navigation = { navigation } />)

      fireEvent.press(getByTestId('login'))
      expect(navigation.navigate).toHaveBeenCalled()
    })
  })
})
