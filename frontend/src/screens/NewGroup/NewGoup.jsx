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
import formStyles from '../../assets/styles/formStyles'
import bodyStyles from '../../assets/styles/bodyStyles'

function NewGroup ({ navigation, actions }) {
  const [groupName, setGroupName] = useState()
  const [members, setMembers] = useState()

  return (
    <View style={formStyles.container}>
      <View style={bodyStyles.titleContent}>
        <Text style={formStyles.title}>New Group</Text>
      </View>

    <View key="urlName">
      <TextInput
        style = {formStyles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Group name"
        placeholderTextColor = "#7B7F9E"
        autoCapitalize = "none"
        value={groupName}
        onChangeText={(textValue) => setGroupName(textValue)}
      />

      <TextInput
        style = {[formStyles.input, formStyles.inputMargin]}
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
      style = {[formStyles.submitCreateElement, formStyles.marginTopBottomButton]}
      onPress={() => {
        actions.createGroup(groupName, members)
        navigation.navigate('Home')
      }}
    >
    <Text style={formStyles.submitButtonText}> Create </Text>
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
