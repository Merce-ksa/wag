/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'

import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'

import { Provider } from 'react-redux'
import store from './src/redux/stores/configureStore'
import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import Landing from './src/screens/Landing/Landing'
import Register from './src/screens/Register/Register'
import Login from './src/screens/Login/Login'
import Home from './src/screens/Home/Home'
import CreateGroup from './src/screens/CreateGroup/CreateGoup'
import Profile from './src/screens/Profile/Profile'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Auth () {
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
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

function HomeStack () {
  return (
    <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    <Stack.Screen
      name="CreateGroup"
      component={CreateGroup}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
  )
}

function WagApp () {
  return (
    <Tab.Navigator
    initialRouteName="WagApp"
    tabBarOptions={{
      activeTintColor: '#22215B'
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        )
      }} />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" color={color} size={size} />
        )
      }}
    />
  </Tab.Navigator>

  )
}

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
            options={{ headerShown: false }}
          />
            <Stack.Screen
              name="Auth"
              component={Auth}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="WagApp"
              component={WagApp}
              options={{ headerShown: false }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
