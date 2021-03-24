import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createLink } from '../../redux/actions/linkActions'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import bodyStyles from '../../assets/styles/bodyStyles'
import formStyles from '../../assets/styles/formStyles'

function NewLink ({ route, navigation, actions }) {
  const { folderId } = route.params
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [tag, setTag] = useState('')

  return (
    <View style={formStyles.container}>
      <View style={bodyStyles.titleContent}>
        <Image
        source={require('../../assets/images/new-link-title.png')}
        style={bodyStyles.sectionIcon}
        />
        <Text style={formStyles.title}>New Link</Text>
      </View>

    <View key="urlName">
      <TextInput
        style = {formStyles.input}
        underlineColorAndroid = "transparent"
        placeholder = "URL"
        placeholderTextColor = "#7B7F9E"
        autoCapitalize = "none"
        value={url}
        onChangeText={(textValue) => setUrl(textValue)}
      />

      <TextInput
        style = {formStyles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Name"
        placeholderTextColor = "#7B7F9E"
        autoCapitalize = "none"
        minLength={1}
        maxLength={25}
        value={name}
        onChangeText={(textValue) => setName(textValue)}
      />
      <TextInput
        style = {formStyles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Description"
        placeholderTextColor = "#7B7F9E"
        autoCapitalize = "none"
        maxLength={30}
        value={description}
        onChangeText={(textValue) => setDescription(textValue)}
      />
      <View style={formStyles.selectView}>
        <DropDownPicker
          items={[
            { label: 'Newsletter', value: 'newsletter', icon: () => {}, selected: true },
            { label: 'Podcast', value: 'podcast', icon: () => {} },
            { label: 'Video', value: 'video', icon: () => {} },
            { label: 'Tool', value: 'tool', icon: () => {} }
          ]}
          placeholder='Select tag'
          defaultValue={tag.tagSelected}
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
          onChangeItem={item => setTag({
            tag: item.value
          })}
        />
      </View>

    </View>
    <TouchableOpacity
      style = {[formStyles.submitCreateElement, formStyles.marginTopMediumButton]}
      onPress={() => {
        if (name === '' || name === ' ') {
          alert('Debes completar el campo del nombre')
        } else if (url === '' || url === ' ') {
          alert('Debes introducir una url')
        } else if (url.slice(0, 8).toUpperCase() !== 'HTTPS://') {
          alert('Debes introducir una url que comience con https://')
        }

        actions.createLink(url, name, description, tag, folderId)
        navigation.navigate('LinksList')
      }}

    >
    <Text style={formStyles.submitButtonText}> Push Link </Text>
    </TouchableOpacity>

    </View>
  )
}

NewLink.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      folderId: PropTypes.string
    })
  }).isRequired,

  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,

  actions: PropTypes.shape({
    createLink: PropTypes.func
  }).isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ createLink }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewLink)
