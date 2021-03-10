import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import registerStyles from './RegisterStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import register from '../../redux/actions/userActions'

function Register ({ actions }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(actions)

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
          autoCapitalize = "none"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#9a73ef"
          secureTextEntry={true}
          autoCapitalize = "none"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          >
        </TextInput>

        <TouchableOpacity
          style = {registerStyles.submitButton}
          onPress={() => actions.register(email, password)}
          disabled={!email || !password}
        >
          <Text style = {registerStyles.submitButtonText}> Create account </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      register
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Register)
