import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import PropTypes from 'prop-types'
import registerStyles from './RegisterStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { register } from '../../redux/actions/userActions'
import Hero from '../../components/Hero/Hero'

function Register ({ actions, statusRegister, navigation }) {
  const [userName, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  if (statusRegister.status === 200) {
    navigation.replace('Auth')
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
          placeholder = "Name"
          placeholderTextColor = "#7B7F9E"
          autoCapitalize = "none"
          value={userName}
          onChangeText={(textValue) => setName(textValue)}
        />

        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#7B7F9E"
          autoCapitalize = "none"
          value={email}
          onChangeText={(textValue) => setEmail(textValue)}
        />

        <TextInput
          style = {registerStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Password"
          placeholderTextColor = "#7B7F9E"
          secureTextEntry={true}
          autoCapitalize = "none"
          value={password}
          onChangeText={(textValue) =>
            setPassword(textValue)
          }
          >
        </TextInput>

        <TouchableOpacity
          style = {registerStyles.submitButton}
          disabled={!email || !password}
          onPress={() => actions.register(userName, email, password)}
        >
          <Text
            style = {registerStyles.submitButtonText}
          > Create account </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

Register.propTypes = {
  actions: PropTypes.shape({
    register: PropTypes.func.isRequired
  }).isRequired,

  statusRegister: PropTypes.shape({
    status: PropTypes.number.isRequired
  }).isRequired,

  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }).isRequired
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
