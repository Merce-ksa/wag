import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  landingMain: {
    marginTop: 40,
    paddingLeft: 20,
    paddingRight: 20
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 20,
    color: 'black'
  },
  title: {
    paddingBottom: 5,
    textAlign: 'left',
    fontSize: 65
  },
  description: {
    textAlign: 'left',
    fontSize: 14,
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
    fontSize: 16,
    color: '#567DF4'
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
    padding: 20,
    fontFamily: 'interSemiBold',
    fontSize: 18,
    color: '#fff',
    textAlign: 'center'
  }
})
