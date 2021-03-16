import {
  StyleSheet,
  StatusBar
} from 'react-native'

export default StyleSheet.create({
  groupsContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FAFAFA'
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  wagIcon: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
    marginRight: 10
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '400'
  }
})
