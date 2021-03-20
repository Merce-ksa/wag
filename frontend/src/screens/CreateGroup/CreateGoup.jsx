import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import CreateGroupStyles from './CreateGroupStyles'
import formStyles from '../../assets/styles/formStyles'
import bodyStyles from '../../assets/styles/bodyStyles'

export default function CreateGroup () {
  const [groupName, setGroupName] = useState()
  const [members, setMembers] = useState()

  const [fontsLoaded] = useFonts({
    interExtraLight: require('../../assets/fonts/Inter-ExtraLight.ttf'),
    interSemiBold: require('../../assets/fonts/Inter-SemiBold.ttf'),
    barlowLight: require('../../assets/fonts/BarlowSemiCondensed-Light.ttf'),
    barlowMedium: require('../../assets/fonts/BarlowSemiCondensed-Medium.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
        <View style={CreateGroupStyles.groupsContainer}>
            <View style={CreateGroupStyles.titleContent}>
            <Image
                source={require('../../assets/images/wag-icon.png')}
                style={CreateGroupStyles.wagIcon}
            />
            <Text style={CreateGroupStyles.title}>New Groups</Text>
          </View>

            <View style={CreateGroupStyles.formGroup}>
                <TextInput
                    style = {formStyles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Group name"
                    placeholderTextColor = "#7B7F9E"
                    autoCapitalize = "none"
                    value={groupName}
                    onChangeText={(textValue) => setGroupName(textValue)}
                />
                <TextInput
                    style = {formStyles.inputMembers}
                    underlineColorAndroid = "transparent"
                    placeholder = "☺︎ members group"
                    placeholderTextColor = "#7B7F9E"
                    autoCapitalize = "none"
                    value={members}
                    onChangeText={(textValue) => setMembers(textValue)}
                />

                <TouchableOpacity
                    onPress={() => console.log('NewLink')}
                >
                   <Text>Create new group</Text>
                </TouchableOpacity>

            </View>
        </View>
  )
}
