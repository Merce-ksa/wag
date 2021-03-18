import React from 'react'
import renderer from 'react-test-renderer'
// import { render, fireEvent } from '@testing-library/react-native'
import Landing from './Landing'

import { renderHook } from '@testing-library/react-hooks'
import * as Font from 'expo-font'
import { useFonts } from '../../../node_modules/expo-font/src/FontHooks'

const DATA = 0
const Fonts = {
  interExtraLight: require('../../assets/fonts/Inter-ExtraLight.ttf'),
  interBold: require('../../assets/fonts/Inter-Bold.ttf'),
  interSemiBold: require('../../assets/fonts/Inter-SemiBold.ttf'),
  barlowLight: require('../../assets/fonts/BarlowSemiCondensed-Light.ttf')
}

describe('Given a Landing function', () => {
  beforeEach(() => {
    jest.spyOn(fonts, 'useFonts').mockReturnValue([true])
  })

  describe('When is rendered', () => {
    test('Should Landing match the snapshot ', () => {
      const landing = renderer.create(<Landing />).toJSON()

      expect(landing).toMatchSnapshot()
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

// test('loads fonts when mounted', async () => {
//   jest.spyOn(Font, 'loadAsync').mockResolvedValue()

//   const hook = renderHook(() => useFonts(Fonts))

//   expect(hook.result.current[DATA]).toBe(false)

//   await hook.waitForNextUpdate()

//   expect(hook.result.current[DATA]).toBe(true)
// })
