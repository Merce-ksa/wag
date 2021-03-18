import React, { useEffect } from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUserFromStorage, logout } from '../../redux/actions/userActions'
import loadGroups from '../../redux/actions/groupsActions'
import homeStyles from './HomeStyles'

function Home ({ groups, user, actions, navigation }) {
  useEffect(() => {
    actions.loadUserFromStorage()
    actions.loadGroups()
  }, [])

  if (!user.email) {
    navigation.navigate('Auth')
  }

  return (
        <View style={homeStyles.HomeContainer}>
          <View style={homeStyles.homeTitleContent}>
          <Image
            source={require('../../assets/images/groups.png')}
            style={homeStyles.wagIcon}
          />
            <Text style={[{ fontFamily: 'barlowMedium' }, homeStyles.title]}>Hi {user.userName}!</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
            >
            </TouchableOpacity>

          </View>
          <ScrollView key="groupsContainer">
                {groups && groups.map((group) => (
                  <TouchableOpacity key={group.name} style={homeStyles.cardContent}>
                      <Text style={homeStyles.card}>
                          {group.name}
                      </Text>
                      <Text style={homeStyles.cardDate}>
                          {group.date}
                      </Text>
                  </TouchableOpacity>

                ))}
              </ScrollView>

            <View style={homeStyles.floatButton}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateGroup')}
                >
                    <Text style={homeStyles.textFloatButton}>+</Text>
                </TouchableOpacity>
            </View>
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
    email: PropTypes.string.isRequired
  }).isRequired,

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