import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import LandingStyles from './LandingStyles'
import Hero from '../../components/Hero/Hero'

export default function Landing ({ navigation }: any) {
  return (
    <View style={LandingStyles.container}>
      <Hero />
      <View style={LandingStyles.welcome}>
        <Text style={LandingStyles.welcome}>Welcome to</Text>
        <Text style={LandingStyles.brand}>WAG</Text>
        <Text style={LandingStyles.description}>The platform to store and share digital material! Do not lose anything!</Text>
        <Text style={LandingStyles.description}>Join For Free</Text>
      </View>
      <View style={LandingStyles.autenticationContainer}>
        <TouchableOpacity
          testID="login"
          onPress={() =>
            navigation.navigate('Login', { name: 'Login' })
          }
        >
          <Text style = {LandingStyles.loginText}> I have an account </Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="register"
          style = {LandingStyles.register}
          onPress={() =>
            navigation.navigate('Register', { name: 'Register' })
          }
        >
          <Text style = {LandingStyles.registerTetx}> Sing up </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
