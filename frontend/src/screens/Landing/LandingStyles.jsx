import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    padding: 5,
    textAlign: 'left',
    fontSize: 20,
    color: 'black'
  },
  brand: {
    textAlign: 'left',
    padding: 5,
    fontSize: 38
  },
  description: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    color: '#7B7F9E'
  },
  autenticationContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  loginText: {
    color: '#567DF4',
    fontWeight: 'bold'
  },
  register: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#567DF4'
  },
  registerTetx: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    padding: 20
  }
})
