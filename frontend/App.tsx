import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import Landing from './src/screens/Landing/Landing'
import Register from './src/screens/Register/Register'
import Login from './src/screens/Login/Login'
import Home from './src/screens/Home/Home'
import store from './src/redux/stores/configureStore'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const Stack = createStackNavigator()

function Auth () {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Authentication">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register',
          headerShown: false // Set Header Title
        }}
      />
    </Stack.Navigator>
  )
};

function App () {
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
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{ headerShown: false }}
          />
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              // Hiding header for Navigation Drawer
              options={{ headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
