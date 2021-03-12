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

const Stack = createStackNavigator()

export default function App () {
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
