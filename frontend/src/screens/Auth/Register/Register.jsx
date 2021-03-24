import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import formAuthStyles from '../../../assets/styles/formAuthStyles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { register } from '../../../redux/actions/userActions'
import Hero from '../../../Components/Hero/Hero'

function Register ({ actions, user, navigation }) {
  const [userName, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  if (user && user.email) {
    navigation.replace('SplashScreen')
  }

  return (
    <View style={formAuthStyles.container}>
      <Hero />

      <View style={formAuthStyles.titleContainer}>
        <Text style={[{ fontFamily: 'barlowMedium' }, formAuthStyles.title]}>Sing up</Text>
      </View>

      <View style={formAuthStyles.formContainer}>
      <TextInput
          style = {formAuthStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Name"
          placeholderTextColor = "#7B7F9E"
          autoCapitalize = "none"
          value={userName}
          onChangeText={(textValue) => setName(textValue)}
        />

        <TextInput
          style = {formAuthStyles.input}
          underlineColorAndroid = "transparent"
          placeholder = "Email"
          placeholderTextColor = "#7B7F9E"
          autoCapitalize = "none"
          value={email}
          onChangeText={(textValue) => setEmail(textValue)}
        />

        <TextInput
          style = {formAuthStyles.input}
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
          style = {formAuthStyles.submitButton}
          disabled={!email || !password}
          onPress={() => actions.register(userName, email, password)}
        >
          <Text
            style = {[{ fontFamily: 'interSemiBold' }, formAuthStyles.submitButtonText]}
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

  user: PropTypes.shape({
    email: PropTypes.string,
    userName: PropTypes.string
  }),

  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired
  }).isRequired
}

function mapStateToProps (state) {
  return { user: state.user }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({
      register
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
