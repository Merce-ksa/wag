/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import loadGroups from '../../redux/actions/groupsActions'
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import homeStyles from './HomeStyles'

function Home ({ groups, user, actions }) {
  console.log('info que llega a home del user:')
  console.log(user)
  console.log('grupos que llegan a la home:')
  console.log(groups)
  console.log(actions)

  useEffect(() => {
    console.log('merche')
    console.log(actions)
    actions.loadGroups()
  }, [])

  return (
        <View style={homeStyles.HomeContainer}>
          <View style={homeStyles.homeTitleContent}>
          <Image
            source={require('../../assets/images/wag-icon.png')}
            style={homeStyles.wagIcon}
          />
            <Text style={homeStyles.title}>My Groups</Text>
            <Text>Bienvenido {user.data.email}</Text>
          </View>
                {groups && groups.map((group) => (
                    <ScrollView key="groupsContainer">
                        <TouchableOpacity key={group.name} style={homeStyles.cardContent}>
                            <Text style={homeStyles.card}>
                                {group.name}
                            </Text>
                            <Text style={homeStyles.cardDate}>
                                {group.date}
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                ))
                }

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
  console.log(state.groups)
  return {
    groups: state.groups,
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadGroups }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
