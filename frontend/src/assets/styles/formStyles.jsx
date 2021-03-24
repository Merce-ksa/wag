import {
  StyleSheet,
  StatusBar
} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#22215B'
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'left',
    fontFamily: 'barlowMedium',
    fontSize: 30,
    fontWeight: '400',
    color: '#fff'
  },

  input: {
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
    borderBottomColor: '#7B7F9E',
    borderBottomWidth: 1,
    color: '#fff',
    fontFamily: 'interRegular'
  },
  inputMargin: {
    marginTop: 20
  },

  selectView: {
    marginTop: 40
  },

  submitCreateElement: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#7B7F9E'
  },
  marginTopMediumButton: {
    marginTop: 200
  },
  marginTopBottomButton: {
    marginTop: 300
  },
  submitButtonText: {
    fontFamily: 'interSemiBold',
    color: '#fff',
    fontSize: 16
  }
})
