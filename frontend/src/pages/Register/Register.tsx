/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import registerStyles from './RegisterStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { register } from '../../redux/actions/userActions'
import Hero from '../../components/Hero/Hero'

function Register ({ actions, statusRegister, navigation }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  console.log(statusRegister.status)

  if (statusRegister.status === 200) {
    navigation.navigate('Login', { name: 'Login' })
  } else if (statusRegister.status === 500) {
    Alert.alert(
      'Error 500',
      'No se ha podido crear el usuario',
      [
        { text: 'OK' }
      ],
      { cancelable: false }
    )
  }

  return (
    <View style={registerStyles.container}>
      <Hero />

      <View style={registerStyles.titleContainer}>
        <Text style={registerStyles.title}>Sing up</Text>
      </View>

      <View style={registerStyles.formContainer}>
        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#7B7F9E"
          autoCapitalize = "none"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#7B7F9E"
          secureTextEntry={true}
          autoCapitalize = "none"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          >
        </TextInput>

        <TouchableOpacity
          style = {registerStyles.submitButton}
          disabled={!email || !password}
          onPress={() => actions.register(email, password)}
        >
          <Text
            style = {registerStyles.submitButtonText}
          > Create account </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

function mapStateToProps (state) {
  console.log(state)
  return { statusRegister: state.statusRegister }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      register
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
