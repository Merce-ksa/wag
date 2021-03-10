import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import registerStyles from './RegisterStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import register from '../../redux/actions/userActions'
import Hero from '../../components/Hero/Hero'

function Register ({ actions }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log(actions)

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
          onChange={(event) => setPassword(event.target.value)}
          >
        </TextInput>
        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Repeat password"
          placeholderTextColor = "#7B7F9E"
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
