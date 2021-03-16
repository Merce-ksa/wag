import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  View,
  Image
} from 'react-native'
import splashStyles from './SplashScreenStyles'
import PropTypes from 'prop-types'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUserFromStorage } from '../../redux/actions/userActions'

function SplashScreen ({ actions, navigation }) {
  const [animating, setAnimating] = useState(true)

  actions.loadUserFromStorage()

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false)
      AsyncStorage.getItem('user').then((value) => {
        navigation.replace(
          value === null ? 'Auth' : 'Home'
        )
      })
    }, 5000)
  }, [])

  return (
      <View style={splashStyles.container}>
        <Image
          source={require('../../assets/images/splash.png')}
          style={splashStyles.imageSplash}
        />

        <ActivityIndicator
          animating={animating}
          marginTop="10%"
          color="#red"
          size="large"
          style={splashStyles.activityIndicator}
        />
      </View>
  )
}

SplashScreen.propTypes = {
  actions: PropTypes.shape({
    loadUserFromStorage: PropTypes.func.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired
  })
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadUserFromStorage }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SplashScreen)
