import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/stores/configureStore'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import SplashScreen from './src/Screens/Auth/SplashScreen/SplashScreen'
import Auth from './src/Navigation/AuthStackScreen'
import WagApp from './src/Navigation/WagStackScreen'

const StackApp = createStackNavigator()

function App () {
  const [fontsLoaded] = useFonts({
    interExtraLight: require('./src/assets/fonts/Inter-ExtraLight.ttf'),
    interThin: require('./src/assets/fonts/Inter-Thin.ttf'),
    interLight: require('./src/assets/fonts/Inter-Light.ttf'),
    interMedium: require('./src/assets/fonts/Inter-Medium.ttf'),
    interRegular: require('./src/assets/fonts/Inter-Regular.ttf'),
    interSemiBold: require('./src/assets/fonts/Inter-SemiBold.ttf'),
    interBold: require('./src/assets/fonts/Inter-Bold.ttf'),
    interExtraBold: require('./src/assets/fonts/Inter-ExtraBold.ttf'),
    interBlack: require('./src/assets/fonts/Inter-Black.ttf'),
    barlowMedium: require('./src/assets/fonts/BarlowSemiCondensed-Medium.ttf'),
    barlowLight: require('./src/assets/fonts/BarlowSemiCondensed-Light.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="SplashScreen" screenOptions={{
          headerShown: false
        }}>
            <StackApp.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
            <StackApp.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />

            <StackApp.Screen
              name="WagApp"
              component={WagApp}
              options={{ headerShown: false }}
            />
        </StackApp.Navigator>
      </NavigationContainer>
    </Provider>
    )
  }
}

export default App
