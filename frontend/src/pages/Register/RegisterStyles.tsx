import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: 'left',
    padding: 35,
    fontSize: 38
  },
  formContainer: {
    flex: 0.5
  },
  input: {
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderWidth: 1,
    borderColor: '#0594e3',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
    padding: 8
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
