import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import HeroStyles from './HeroStyle'

export default function Hero () {
  return (
        <View style={HeroStyles.hero}>
        <ImageBackground
          source={require('../../assets/images/wave.png')}
          style={HeroStyles.wave}
        >
          <Image
            source={require('../../assets/images/wag-logo.png')}
            style={HeroStyles.logo}
          />
        </ImageBackground>
      </View>
  )
}
