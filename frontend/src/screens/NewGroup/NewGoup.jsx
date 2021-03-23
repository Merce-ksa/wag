import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createGroup } from '../../redux/actions/groupsActions'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import NewGroupStyles from './NewGroupStyles'
import bodyStyles from '../../assets/styles/bodyStyles'

function NewGroup ({ navigation, actions }) {
  const [groupName, setGroupName] = useState()
  const [members, setMembers] = useState()

  console.log(groupName, members)
  return (
    <View style={NewGroupStyles.container}>
      <View style={bodyStyles.titleContent}>
        <Text style={[{ fontFamily: 'barlowMedium' }, NewGroupStyles.title]}>New Link</Text>
      </View>

    <View key="urlName">
      <TextInput
        style = {NewGroupStyles.groupName}
        underlineColorAndroid = "transparent"
        placeholder = "Group name"
        placeholderTextColor = "#7B7F9E"
        autoCapitalize = "none"
        value={groupName}
        onChangeText={(textValue) => setGroupName(textValue)}
      />

      <TextInput
        style = {NewGroupStyles.members}
        underlineColorAndroid = "transparent"
        placeholder = "Mail to members"
        placeholderTextColor = "#7B7F9E"
        autoCapitalize = "none"

        multiline={true}
        numberOfLines={10}

        value={members}
        onChangeText={(textValue) => setMembers(textValue)}
      />
    </View>
    <TouchableOpacity
      style = {NewGroupStyles.submitCreateGroup}
      onPress={() => {
        actions.createGroup(groupName, members)
        navigation.navigate('Home')
      }}
    >
    <Text style={NewGroupStyles.submitButtonText}> Create </Text>
    </TouchableOpacity>

    </View>
  )
}

NewGroup.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      email: PropTypes.string
    })
  }).isRequired,

  actions: PropTypes.shape({
    createGroup: PropTypes.func.isRequired
  }).isRequired,

  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ createGroup }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewGroup)
