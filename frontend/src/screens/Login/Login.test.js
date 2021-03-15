import React from 'react'
import renderer from 'react-test-renderer'
import Login from './Login'

describe('Given a Login function', () => {
  describe('When is rendered', () => {
    test('Should Login match the snapshot', () => {
      const login = renderer.create(<Login />).toJSON()
      expect(login).toMatchSnapshot()
    })
  })
})
