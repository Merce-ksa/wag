import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
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

function WagApp () {
  return (
    <Stack.Navigator initialRouteName="WagApp">
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
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />

  </Stack.Navigator>
  )
}

function App () {
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
