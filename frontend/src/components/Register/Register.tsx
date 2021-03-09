import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import registerStyles from './RegisterStyles'

export default function Register () {
  return (
    <View style={registerStyles.container}>
      <View style={registerStyles.hero}>
        <ImageBackground
          source={require('../../images/wave.png')}
          style={registerStyles.wave}
        >
          <Image
            source={require('../../images/wag-logo.png')}
            style={registerStyles.logo}
          />
        </ImageBackground>
      </View>
      <View style={registerStyles.welcome}>
        <Text style={registerStyles.welcome}>Welcome to</Text>
        <Text style={registerStyles.brand}>WAG</Text>
        <Text style={registerStyles.description}>The platform to store and share digital material! Do not lose anything!</Text>
        <Text style={registerStyles.description}>Join For Free</Text>
      </View>
      <View style={registerStyles.formContainer}>

        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#9a73ef"
          autoCapitalize = "none">
        </TextInput>

        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#9a73ef"
          autoCapitalize = "none">
        </TextInput>

        <TouchableOpacity
          style = {registerStyles.submitButton}>
          <Text style = {registerStyles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
