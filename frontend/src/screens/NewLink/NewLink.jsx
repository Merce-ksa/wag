import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import loadFolders from '../../redux/actions/folderActions'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import bodyStyles from '../../assets/styles/bodyStyles'
// import NewLinkStyles from './NewLinkStyles'

function FolderList ({ navigation }) {
  const [linkName, setLinkName] = useState()
  const [groupFolder, setgroupFolder] = useState()
  const [nameGroup, setNameGroup] = useState()

  return (
    <View style={bodyStyles.container}>
        <View style={bodyStyles.titleContent}>
            <Image
                source={require('../../assets/images/folder-list.png')}
                style={bodyStyles.sectionIcon}
            />
                <Text style={[{ fontFamily: 'barlowMedium' }, bodyStyles.title]}>New Link</Text>
        </View>

        <View>
            <TextInput
                // style = {NewLinkStyles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#7B7F9E"
                autoCapitalize = "none"
                value={linkName}
                onChangeText={(textValue) => setLinkName(textValue)}
            />
            <TextInput
                // style = {NewLinkStyles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#7B7F9E"
                autoCapitalize = "none"
                value={nameGroup}
                onChangeText={(textValue) => setNameGroup(textValue)}
            />

            <TextInput
                // style = {NewLinkStyles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#7B7F9E"
                secureTextEntry={true}
                autoCapitalize = "none"
                value={groupFolder}
                onChangeText={(textValue) =>
                  setgroupFolder(textValue)
                }
            />

            <TouchableOpacity
                // style = {NewLinkStyles.submitButton}
                // disabled={!email || !password}
                // onPress={() => actions.register(userName, email, password)}
            />
        </View>
    </View>
  )
}
FolderList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}
export default FolderList()
