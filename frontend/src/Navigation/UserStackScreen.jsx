import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home/Home'
import NewGroup from '../Screens/NewGroup/NewGoup'
import FolderList from '../Screens/FolderList/FolderList'
import NewFolder from '../Screens/NewFolder/NewFolder'
import LinksList from '../Screens/Links/Links'
import NewLink from '../Screens/NewLink/NewLink'

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
          name="LinksList"
          component={LinksList}
          options={{ headerShown: false }}
        />

        <UserStack.Screen
          name="NewGroup"
          component={NewGroup}
          options={{ headerShown: false }}
        />

        <UserStack.Screen
          name="NewFolder"
          component={NewFolder}
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
