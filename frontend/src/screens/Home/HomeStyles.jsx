import {
  StyleSheet,
  StatusBar
} from 'react-native'

export default StyleSheet.create({
  HomeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FAFAFA'
  },
  homeTitleContent: {
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
    fontSize: 30,
    fontWeight: '400'
  },
  cardContent: {
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#BBCBFB',
    borderLeftColor: '#567DF4',
    borderLeftWidth: 8,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10
  },
  card: {
    paddingLeft: 10,
    fontSize: 20
  },
  cardDate: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7B7F9E'
  }
})
