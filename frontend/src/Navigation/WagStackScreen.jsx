/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserPages from '../Navigation/UserStackScreen'
import Feather from 'react-native-vector-icons/Feather'
import Profile from '../screens/Profile/Profile'
const WagTab = createBottomTabNavigator()

export default function WagApp () {
  return (
      <WagTab.Navigator
        initialRouteName="WagApp"
        tabBarOptions={{
          activeTintColor: '#22215B'
        }}>
        <WagTab.Screen
          name="UserSpace"
          component={UserPages}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            )
          }} />
        <WagTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            )
          }}
        />
      </WagTab.Navigator>
  )
}
