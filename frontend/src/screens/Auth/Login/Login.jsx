/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'
import PropTypes from 'prop-types'
import formAuthStyles from '../../../assets/styles/formAuthStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../../redux/actions/userActions'
import Hero from '../../../Components/Hero/Hero'

function Login ({ actions, user, navigation }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow')
    Keyboard.addListener('keyboardDidHide')

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow')
      Keyboard.removeListener('keyboardDidHide')
    }
  }, [])

  if (user && user.email) {
    navigation.navigate('WagApp')
  }

  return (
    <View style={formAuthStyles.container}>
      <Hero />

      <View style={formAuthStyles.titleContainer}>
        <Text style={[{ fontFamily: 'barlowMedium' }, formAuthStyles.title]}>Login</Text>
      </View>

      <View style={formAuthStyles.formContainer}>

          <TextInput
            style = {formAuthStyles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Email"
            placeholderTextColor = "#7B7F9E"
            autoCapitalize = "none"
            value={email}
            onChangeText={(textValue) => setEmail(textValue)}
            onSubmitEditing={Keyboard.dismiss}
          />
          <TextInput
            style = {formAuthStyles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Password"
            placeholderTextColor = "#7B7F9E"
            secureTextEntry={true}
            autoCapitalize = "none"
            value={password}
            onChangeText={(textValue) => setPassword(textValue)}
            >
          </TextInput>

        <TouchableOpacity
          style = {formAuthStyles.submitButton}
          onPress={() => actions.login(email, password)}
          disabled={!email || !password}
        >
          <Text style={[{ fontFamily: 'interSemiBold' }, formAuthStyles.submitButtonText]}> Send </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

Login.propTypes = {
  actions: PropTypes.shape({
    login: PropTypes.func
  }).isRequired,

  user: PropTypes.shape({
    email: PropTypes.string
  }),

  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      login
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
