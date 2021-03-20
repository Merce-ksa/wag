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
    backgroundColor: '#FAFAFA'
  },
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  sectionIcon: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'left',
    fontFamily: 'barlowMedium',
    fontSize: 30,
    fontWeight: '400'
  },
  floatButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#22215B',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.63,
    shadowRadius: 2.62,

    elevation: 6
  },
  imageFloatButton: {
    width: 60,
    height: 60
  }
})
