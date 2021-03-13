/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import loginStyles from './LoginStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../redux/actions/userActions'
import Hero from '../../components/Hero/Hero'

function Login ({ actions, user, navigation }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  // console.log(user)
  if (user.status === 200) {
    navigation.navigate('Home')
  } else if (user.status === 500) {
    alert('No se ha encontrado el usuario')
  }

  return (
    <View style={loginStyles.container}>
      <Hero />

      <View style={loginStyles.titleContainer}>
        <Text style={loginStyles.title}>Login</Text>
      </View>

      <View style={loginStyles.formContainer}>
        <TextInput
          style = {loginStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#7B7F9E"
          autoCapitalize = "none"
          value={email}
          onChangeText={(textValue) => setEmail(textValue)}
        />
        <TextInput
          style = {loginStyles.input}
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
          style = {loginStyles.submitButton}
          onPress={() => actions.login(email, password)}
          // disabled={!email || !password}
        >
          <Text style = {loginStyles.submitButtonText}> Send </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
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
