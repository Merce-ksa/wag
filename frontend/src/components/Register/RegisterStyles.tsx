import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  hero: {
    flex: 0.5
  },
  wave: {
    height: '100%',
    width: '100%'
  },
  logo: {
    resizeMode: 'contain',
    width: '60%'
  },
  brand: {
    textAlign: 'left',
    padding: 5,
    fontSize: 38
  },
  welcome: {
    padding: 5,
    textAlign: 'left',
    fontSize: 20,
    color: 'black'
  },
  description: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    color: '#7B7F9E'
  },
  formContainer: {
    flex: 0.5
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#0594e3',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#0534e3',
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5

  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center'
  }

})
