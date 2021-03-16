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
})
