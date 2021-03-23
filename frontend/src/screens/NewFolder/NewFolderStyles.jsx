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
  folderName: {
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
    borderBottomColor: '#7B7F9E',
    borderBottomWidth: 1,
    color: '#fff',
    fontFamily: 'interRegular'
  },
  selectView: {
    marginTop: 40
  },
  submitButtonText: {
    fontFamily: 'interSemiBold',
    color: '#fff',
    fontSize: 16
  },
  submitCreateFolder: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#7B7F9E'
  }
})
