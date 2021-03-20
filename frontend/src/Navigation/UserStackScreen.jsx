import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home/Home'
import CreateGroup from '../screens/CreateGroup/CreateGoup'
import FolderList from '../screens/FolderList/FolderList'
import Links from '../screens/Links/Links'
import NewLink from '../screens/NewLink/NewLink'

const UserStack = createStackNavigator()

export default function UserSpace () {
  return (
      <UserStack.Navigator initialRouteName="HomeStack">
        <UserStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <UserStack.Screen
          name="FolderList"
          component={FolderList}
          options={{ headerShown: false }}
        />

        <UserStack.Screen
          name="Links"
          component={Links}
          options={{ headerShown: false }}
        />

        <UserStack.Screen
          name="CreateGroup"
          component={CreateGroup}
          options={{ headerShown: false }}
        />

        <UserStack.Screen
          name="NewLink"
          component={NewLink}
          options={{ headerShown: false }}
        />

      </UserStack.Navigator>
  )
}
