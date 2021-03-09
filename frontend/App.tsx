import React from 'react'
import { Provider } from 'react-redux'
import Register from './src/components/Register/Register'
// import Home from './src/components/Home/Home'
import store from './src/redux/stores/configureStore'

export default function App () {
  return (
    <Provider store={store}>
      <Register />
      {/* <Home /> */}
    </Provider>
  )
}
