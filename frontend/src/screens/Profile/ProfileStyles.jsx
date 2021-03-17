import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#FAFAFA'
  },
  profileTitleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'left',
    fontSize: 24,
    fontWeight: '400'
  },
  logout: {
    width: 40,
    height: 40
  },
  mainContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
    marginTop: 10,
    marginBottom: 10
  },
  avatarContent: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#EEF7FE',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80
  },
  userNameContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  userName: {
    alignItems: 'center',
    fontSize: 24
  },
  editFloat: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0
  },
  EditIcons: {
    marginTop: 10,
    marginRight: 10,
    width: 20,
    height: 20
  },
  userEmail: {
    marginTop: 10,
    fontSize: 14
  },
  userDescription: {
    marginTop: 10,
    padding: 10,
    fontSize: 14,
    textAlign: 'center'
  }
})
