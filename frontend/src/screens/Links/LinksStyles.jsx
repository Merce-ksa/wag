import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
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
  postIcon: {
    width: 60,
    height: 60
  },
  postInfo: {
    width: '80%',
    marginLeft: 10
  },
  postTitleContainer: {
    width: '93%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  postDescription: {
    width: '90%',
    marginTop: 5
  }
})
