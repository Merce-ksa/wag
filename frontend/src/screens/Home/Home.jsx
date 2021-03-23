import React, { useEffect } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUserFromStorage, logout } from '../../redux/actions/userActions'
import { loadGroups } from '../../redux/actions/groupsActions'
import homeStyles from './HomeStyles'
import bodyStyles from '../../assets/styles/bodyStyles'

function Home ({ groups, user, actions, navigation }) {
  const isFocused = useIsFocused()

  useEffect(() => {
    actions.loadUserFromStorage()
  }, [])

  useEffect(() => {
    console.log('use effect loadgroups')
    actions.loadGroups()
  }, [isFocused])

  if (!user.email) {
    navigation.navigate('Auth')
  }

  return (
    <View style={bodyStyles.container}>
    <View style={bodyStyles.titleContent}>
    <Image
      source={require('../../assets/images/groups.png')}
      style={bodyStyles.sectionIcon}
    />
      <Text style={bodyStyles.title}>Hi {user.userName}!</Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Profile')
        }
      >
      </TouchableOpacity>

    </View>
    <ScrollView key="groupsContainer">
      <View style={homeStyles.groupsContainer}>
        <Text style={homeStyles.titleGroups}>My groups</Text>
      {groups && groups.map((group) => (
        <TouchableOpacity
          key={group.name}
          style={homeStyles.cardContent}
          onPress={() => navigation.navigate('FolderList', {
            groupId: group.groupId,
            groupName: group.name
          })}
        >
          <View style={homeStyles.infoGroupRight}>
            <Text style={homeStyles.card}>
                  {group.name}
              </Text>
              <Text style={homeStyles.cardDate}>
                  {group.date}
              </Text>
          </View>
          <View style={homeStyles.infoGroupRight}>
            <Text style={homeStyles.arrowGroup}>→</Text>
          </View>

        </TouchableOpacity>
      ))}
      </View>
      <View style={[homeStyles.groupsContainer, homeStyles.newGroupContainer]}>
          <Text style={homeStyles.titleGroups}>Create your own group</Text>
          <Text style={homeStyles.subTitleGroups}>
              Share a world of resources with your friends.
          </Text>
          <View style={homeStyles.newGroupButtonContainer}>
            <TouchableOpacity
              style={homeStyles.newGroupButton}
              onPress={() => navigation.navigate('NewGroup')}
            >
              <Text style={homeStyles.textGroupButton}>Create group</Text>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  </View>
  )
}

Home.propTypes = {
  actions: PropTypes.shape({
    loadGroups: PropTypes.func.isRequired,
    loadUserFromStorage: PropTypes.func.isRequired
  }).isRequired,

  user: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string
  }),

  groups: PropTypes.arrayOf(PropTypes.shape({
    groupId: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })),

  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

function mapStateToProps (state) {
  return {
    groups: state.groups,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadGroups, logout, loadUserFromStorage }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
