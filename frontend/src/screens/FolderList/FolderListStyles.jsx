import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  foldersContainer: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 8,
    maxHeight: '100%'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  redContainer: {
    width: '48%',
    minWidth: 148,
    height: 107,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#FEEEEE',
    marginTop: 10
  },
  redTitle: {
    fontFamily: 'interMedium',
    fontSize: 22,
    color: '#AC4141'
  },
  redDate: {
    fontFamily: 'interSemiBold',
    fontSize: 12,
    color: '#AC4141'
  },
  blueContainer: {
    width: '48%',
    height: 107,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#EEF7FE',
    marginTop: 10
  },
  blueTitle: {
    fontFamily: 'interMedium',
    fontSize: 22,
    color: '#415EB6'
  },
  blueDate: {
    fontFamily: 'interSemiBold',
    fontSize: 12,
    color: '#415EB6'
  },
  yellowContainer: {
    width: '48%',
    height: 107,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#FFFBEC',
    marginTop: 10
  },
  yellowTitle: {
    fontFamily: 'interMedium',
    fontSize: 22,
    color: '#FFB110'
  },
  yellowDate: {
    fontFamily: 'interSemiBold',
    fontSize: 12,
    color: '#FFB110'
  },
  greenContainer: {
    width: '48%',
    height: 107,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    backgroundColor: '#F0FFFF',
    marginTop: 10
  },
  greenTitle: {
    fontFamily: 'interMedium',
    fontSize: 22,
    color: '#23B0B0'
  },
  greenDate: {
    fontFamily: 'interSemiBold',
    fontSize: 12,
    color: '#23B0B0'
  }
})
