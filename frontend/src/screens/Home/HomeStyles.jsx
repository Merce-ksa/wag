import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  groupsContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20
  },
  titleGroups: {
    fontFamily: 'interSemiBold',
    fontSize: 18
  },
  subTitleGroups: {
    marginTop: 5,
    fontFamily: 'interRegular',
    fontSize: 16
  },
  cardContent: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
    padding: 10,

    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,

    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 6
  },
  infoGroupRight: {
    marginRight: 20
  },
  card: {
    fontFamily: 'interMedium',
    paddingLeft: 10,
    fontSize: 20,
    color: '#22215B'
  },
  cardDate: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7B7F9E'
  },
  arrowGroup: {
    fontFamily: 'interRegular',
    fontSize: 18
  },
  newGroupContainer: {
    height: 150,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  newGroupButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  newGroupButton: {
    width: 150,
    height: 38,
    margin: 15,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#567DF4'
  },
  textGroupButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
})
