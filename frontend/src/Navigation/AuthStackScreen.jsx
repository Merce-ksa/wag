import React from 'react'
import Landing from '../screens/Landing/Landing'
import Register from '../screens/Register/Register'
import Login from '../screens/Login/Login'

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
