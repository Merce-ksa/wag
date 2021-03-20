import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import loadFolders from '../../redux/actions/folderActions'
import DropDownPicker from 'react-native-dropdown-picker'
import {
  Platform,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import bodyStyles from '../../assets/styles/bodyStyles'
import formLinkStyles from './NewLinkStyles'

export default function FolderList () {
  const [linkName, setLinkName] = useState()
  const [groupFolder, setgroupFolder] = useState()
  // const [groupName, setGroupName] = useState()
  const setGroupName = {
    groupName: null
  }

  const setFolderName = {
    folderName: null
  }

  const setTag = {
    tag: null
  }
  return (
    <View style={formLinkStyles.container}>
        <View style={bodyStyles.titleContent}>
            <Image
                source={require('../../assets/images/new-link-title.png')}
                style={bodyStyles.sectionIcon}
            />
                <Text style={[{ fontFamily: 'barlowMedium' }, formLinkStyles.title]}>New Link</Text>
        </View>

        <View key="urlName">
          <TextInput
            style = {formLinkStyles.urlLink}
            underlineColorAndroid = "transparent"
            placeholder = "URL"
            placeholderTextColor = "#7B7F9E"
            autoCapitalize = "none"
            value={linkName}
            onChangeText={(textValue) => setLinkName(textValue)}
          />

          <TextInput
            style = {formLinkStyles.urlName}
            underlineColorAndroid = "transparent"
            placeholder = "Name"
            placeholderTextColor = "#7B7F9E"
            secureTextEntry={true}
            autoCapitalize = "none"
            value={groupFolder}
            onChangeText={(textValue) => setGroupFolder(textValue)}
          />
          <TextInput
            style = {formLinkStyles.descriptionLink}
            underlineColorAndroid = "transparent"
            placeholder = "Description"
            placeholderTextColor = "#7B7F9E"
            secureTextEntry={true}
            autoCapitalize = "none"
            value={groupFolder}
            onChangeText={(textValue) =>
              setgroupFolder(textValue)
            }
          />
        </View>
        <View style={formLinkStyles.firstSelectView}>
          <DropDownPicker
            items={[
              { label: 'Mesenterio', value: 'Mesenterio' },
              { label: 'África', value: 'África' }
            ]}
            placeholder='Select Group'
            defaultValue={setGroupName.groupName}
            style={{ backgroundColor: '#22215B' }}
            containerStyle={{ height: 40 }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#22215B', minHeight: 150 }}
            globalTextStyle={{
              fontFamily: 'interMedium',
              fontSize: 18,
              color: '#7B7F9E'
            }}
            arrowColor='#7B7F9E'
            onChangeItem={item => setGroupName({
              groupName: item.value
            })}
          />
        </View>

        <View style={formLinkStyles.selectView}>
          <DropDownPicker
            items={[
              { label: 'Vacaciones', value: 'usa' },
              { label: 'Unidades de meddia', value: 'france' }
            ]}
            placeholder='Select Folder'
            defaultValue={setGroupName.groupName}
            style={{ backgroundColor: '#22215B' }}
            containerStyle={{ height: 40 }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#22215B', minHeight: 150 }}
            globalTextStyle={{
              fontFamily: 'interMedium',
              fontSize: 18,
              color: '#7B7F9E'
            }}
            arrowColor='#7B7F9E'
            onChangeItem={item => this.setFolderName({
              folderName: item.value
            })}
        />
        <View style={formLinkStyles.selectView}>
          <DropDownPicker
            items={[
              { label: 'Newsletter', value: 'newsletter' },
              { label: 'Potcast', value: 'potcast' },
              { label: 'Video', value: 'video' },
              { label: 'Tool', value: 'tool' }
            ]}
            placeholder='Select TAG'
            defaultValue={setGroupName.groupName}
            style={{ backgroundColor: '#22215B' }}
            containerStyle={{ height: 40 }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#22215B' }}
            globalTextStyle={{
              fontFamily: 'interMedium',
              fontSize: 18,
              color: '#7B7F9E'
            }}
            arrowColor='#7B7F9E'
            onChangeItem={item => this.setTag({
              folderName: item.value
            })}
          />
        </View>

        <TouchableOpacity
            style = {formLinkStyles.submitCreateLink}
            // disabled={!email || !password}
            onPress={() =>
              console.log('Hi')
            }
        >
          <Text style={formLinkStyles.submitButtonText}> Push Link </Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}
