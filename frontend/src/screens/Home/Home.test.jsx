import React from 'react'
import renderer from 'react-test-renderer'
// import { render, fireEvent } from '@testing-library/react-native'
export default from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import Home from './Home'

describe('Given a Home function', () => {
  describe('When is rendered', () => {
    test('Should Home match the snapshot ', () => {
      const landing = renderer.create(<Home />).toJSON()
      expect(landing).toMatchSnapshot()
    })
  })
})
