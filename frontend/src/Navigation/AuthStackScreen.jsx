import React from 'react'
import Landing from '../Screens/Auth/Landing/Landing'
import Register from '../Screens/Auth/Register/Register'
import Login from '../Screens/Auth/Login/Login'

import { createStackNavigator } from '@react-navigation/stack'
const AuthStack = createStackNavigator()

export default function Auth () {
  return (
      <AuthStack.Navigator initialRouteName="Authentication">
        <AuthStack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerShown: false
          }}
        />
      </AuthStack.Navigator>
  )
}
