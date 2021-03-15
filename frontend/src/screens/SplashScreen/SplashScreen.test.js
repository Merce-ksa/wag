import React from 'react'
import renderer from 'react-test-renderer'
// import { render } from '@testing-library/react-native'
import SplashScreen from './SplashScreen'

describe('Given a Landing function', () => {
  describe('When is rendered', () => {
    test('Should Landing match the snapshot ', () => {
      const splash = renderer.create(<SplashScreen />).toJSON()
      expect(splash).toMatchSnapshot()
    })
  })

  //   describe('When clicking login button', () => {
  //     test('Should calls the send handler', () => {
  //       const navigation = {
  //         navigate: jest.fn()
  //       }

  //       const { getByTestId } = render(<Landing navigation = { navigation } />)

  //       fireEvent.press(getByTestId('register'))
  //       expect(navigation.navigate).toHaveBeenCalled()
  //     })
  //     test('Should calls the send handler', () => {
  //       const navigation = {
  //         navigate: jest.fn()
  //       }

  //       const { getByTestId } = render(<Landing navigation = { navigation } />)

//       fireEvent.press(getByTestId('login'))
//       expect(navigation.navigate).toHaveBeenCalled()
//     })
//   })
})
