import { StyleSheet, StatusBar } from 'react-native'
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
    fontSize: 24,
    // fontFamily: 'InterRegular',
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
  },
  floatButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#22215B',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFloatButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
