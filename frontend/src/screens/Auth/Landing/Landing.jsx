import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import LandingStyles from './LandingStyles'
import PropTypes from 'prop-types'

export default function Landing ({ navigation }) {
  return (
    <View style={LandingStyles.landingContainer}>
      <View>
        <Image
          source={require('../../../assets/images/illustration.png')}
        />
      </View>
      <View style={LandingStyles.landingMain}>
        <Text style={[{ fontFamily: 'interExtraLight' }, LandingStyles.subtitle]}>Welcome to</Text>
        <Text style={[{ fontFamily: 'barlowLight' }, LandingStyles.title]}>WAG</Text>
        <Text style={[{ fontFamily: 'interSemiBold' }, LandingStyles.description]}>The platform to store and share digital material! Do not lose anything!</Text>
        <Text style={[{ fontFamily: 'interSemiBold' }, LandingStyles.description]}>Join For Free</Text>

        <View style={LandingStyles.autenticationContainer}>
          <TouchableOpacity
            testID="login"
            onPress={() =>
              navigation.navigate('Login', { name: 'Login' })
            }
          >
            <Text style={[{ fontFamily: 'interBold' }, LandingStyles.loginText]}> I have an account </Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="register"
            style = {LandingStyles.register}
            onPress={() => navigation.navigate('Register', { name: 'Register' })}
          >
            <Text style = {LandingStyles.registerTetx}> Sing up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

Landing.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
}
