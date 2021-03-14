/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUser, logout } from '../../redux/actions/userActions'
import loadGroups from '../../redux/actions/groupsActions'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import homeStyles from './HomeStyles'

function Home ({ groups, user, actions, navigation }) {
  // console.log(user)
  useEffect(() => {
    // console.log('merche')
    // console.log(actions)
    actions.loadGroups()
  }, [])

  console.log(user)
  if (!user.email) {
    console.log('entro')
    navigation.navigate('Auth')
  }

  return (
        <View style={homeStyles.HomeContainer}>
          <View style={homeStyles.homeTitleContent}>
          <Image
            source={require('../../assets/images/wag-icon.png')}
            style={homeStyles.wagIcon}
          />
            <Text style={homeStyles.title}>My Groups</Text>

            <TouchableOpacity
              onPress={() => actions.logout()}
            >
              <Text>Log out</Text>
            </TouchableOpacity>
          </View>
          <Text>Bienvenido {user.email}</Text>
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
                    disabled
                    onPress={() => console.log('holi')}
                >
                    <Text style={homeStyles.textFloatButton}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
  )
}

function mapStateToProps (state) {
  console.log(state)
  console.log(state.groups)
  return {
    groups: state.groups,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadGroups, logout, loadUser }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
