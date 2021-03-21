import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  linksContainer: {
    marginBottom: 20
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginTop: 5,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
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
    width: 45,
    height: 45
  },
  postInfo: {
    marginLeft: 15
  },
  postTitleContainer: {
    justifyContent: 'flex-start'
  },
  postDate: {
    fontFamily: 'interSemiBold',
    color: '#7B7F9E'
  },
  postDescription: {
    fontFamily: 'interMedium',
    color: '#000'
  }
})
