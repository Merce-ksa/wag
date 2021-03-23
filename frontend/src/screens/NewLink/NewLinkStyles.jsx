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
    fontSize: 30,
    fontWeight: '400',
    color: '#fff'
  },
  urlLink: {
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
    borderBottomColor: '#7B7F9E',
    borderBottomWidth: 1,
    color: '#fff',
    fontFamily: 'interRegular'
  },
  urlName: {
    marginTop: 20,
    paddingLeft: 10,
    height: 50,
    fontSize: 20,
    borderBottomColor: '#7B7F9E',
    borderBottomWidth: 1,
    color: '#fff',
    fontFamily: 'interRegular'
  },
  descriptionLink: {
    marginTop: 20,
    paddingLeft: 10,
    height: 50,
    fontSize: 20,
    borderBottomColor: '#7B7F9E',
    borderBottomWidth: 1,
    color: '#fff',
    fontFamily: 'interRegular'
  },
  selectView: {
    marginTop: 20
  },
  submitCreateLink: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#7B7F9E'
  },
  submitButtonText: {
    fontFamily: 'interSemiBold',
    color: '#fff',
    fontSize: 16
  }
})
