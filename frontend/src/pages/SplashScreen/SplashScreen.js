/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUser } from '../../redux/actions/userActions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc'
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80
  }
})
function SplashScreen ({ actions, navigation }) {
  // State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true)
  actions.loadUser()

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false)
      AsyncStorage.getItem('user').then((value) => {
        navigation.replace(
          value === null ? 'Auth' : 'Home'
        )
      })
    }, 2000)
  }, [])

  return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/wag-icon.png')}
          style={{ width: '50%', resizeMode: 'contain', margin: 30 }}
        />
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
  )
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadUser }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SplashScreen)
