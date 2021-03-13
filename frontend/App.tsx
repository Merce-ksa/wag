import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import Landing from './src/pages/Landing/Landing'
import Register from './src/pages/Register/Register'
import Login from './src/pages/Login/Login'
import Home from './src/pages/Home/Home'
import store from './src/redux/stores/configureStore'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const Stack = createStackNavigator()

export default function App () {
  const [loaded] = useFonts({
    InterBlack: require('./src/assets/fonts/Inter-Black.ttf'),
    InterBold: require('./src/assets/fonts/Inter-Bold.ttf'),
    InterExtraBold: require('./src/assets/fonts/Inter-ExtraBold.ttf'),
    InterSemiBold: require('./src/assets/fonts/Inter-SemiBold.ttf'),
    InterExtraLight: require('./src/assets/fonts/Inter-ExtraLight.ttf'),
    InterLight: require('./src/assets/fonts/Inter-Light.ttf'),
    InterMedium: require('./src/assets/fonts/Inter-Medium.ttf'),
    InterRegular: require('./src/assets/fonts/Inter-Regular.ttf'),
    InterThin: require('./src/assets/fonts/Inter-Thin.ttf')
  })

  if (!loaded) {
    return <AppLoading />
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="Wag" component={Landing} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
