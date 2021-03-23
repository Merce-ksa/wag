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
  folderContainer: {
    width: '48%',
    height: 107,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    marginTop: 10
  },
  folderTitle: {
    fontFamily: 'interMedium',
    fontSize: 18
  },
  folderDate: {
    fontFamily: 'interSemiBold',
    fontSize: 12
  },
  redContainer: {
    backgroundColor: '#FEEEEE'
  },
  blueContainer: {
    backgroundColor: '#EEF7FE'
  },
  yellowContainer: {
    backgroundColor: '#FFFBEC'
  },
  greenContainer: {
    backgroundColor: '#F0FFFF'
  },
  redText: {
    color: '#AC4141'
  },
  blueText: {
    color: '#415EB6'
  },
  yellowText: {
    color: '#FFB110'
  },
  greenText: {
    color: '#23B0B0'
  },
  newFolderButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  newFolderButton: {
    width: 150,
    height: 38,
    margin: 15,
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#567DF4'
  },
  textFolderButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  }
})
