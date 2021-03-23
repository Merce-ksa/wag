import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createFolder } from '../../redux/actions/folderActions'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import NewFolderStyles from './NewFolderStyles'
import bodyStyles from '../../assets/styles/bodyStyles'

function NewFolder ({ route, navigation, actions }) {
  const { groupId } = route.params
  const [folderName, setFolderName] = useState()
  const [colorSelected, setColor] = useState()

  return (
    <View style={NewFolderStyles.container}>
      <View style={bodyStyles.titleContent}>
        <Text style={[{ fontFamily: 'barlowMedium' }, NewFolderStyles.title]}>New Folder</Text>
      </View>

    <View>
      <TextInput
        style = {NewFolderStyles.folderName}
        underlineColorAndroid = "transparent"
        placeholder = "Folder name"
        placeholderTextColor = "#7B7F9E"
        autoCapitalize = "none"
        value={folderName}
        onChangeText={(textValue) => setFolderName(textValue)}
      />

      <View style={NewFolderStyles.selectView}>
        <DropDownPicker
          items={[
            { label: 'Blue', value: 'blue', icon: () => {}, selected: true },
            { label: 'Red', value: 'red', icon: () => {} },
            { label: 'Yellow', value: 'yellow', icon: () => {} },
            { label: 'Green', value: 'green', icon: () => {} }
          ]}
          placeholder='Select color'
          style={{ backgroundColor: '#22215B' }}
          containerStyle={{ height: 40 }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#22215B', minHeight: 200 }}
          globalTextStyle={{
            fontFamily: 'interMedium',
            fontSize: 18,
            color: '#7B7F9E'
          }}
          arrowColor='#7B7F9E'
          onChangeItem={item => setColor({
            color: item.value
          })}
        />
      </View>
    </View>
    <TouchableOpacity
      style = {NewFolderStyles.submitCreateFolder}
      onPress={() => {
        actions.createFolder(folderName, colorSelected, groupId)
        navigation.navigate('FolderList')
      }}
    >
    <Text style={NewFolderStyles.submitButtonText}> Create </Text>
    </TouchableOpacity>

    </View>
  )
}

NewFolder.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      groupId: PropTypes.string
    })
  }).isRequired,

  actions: PropTypes.shape({
    createFolder: PropTypes.func.isRequired
  }).isRequired,

  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ createFolder }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewFolder)
