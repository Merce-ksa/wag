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
    fontSize: 42
  },
  formContainer: {
    flex: 0.5
  },
  input: {
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 42,
    borderWidth: 1,
    borderColor: '#567DF4',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
    padding: 8
  },
  submitButton: {
    height: 42,
    margin: 15,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#567DF4',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4

  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }

})
