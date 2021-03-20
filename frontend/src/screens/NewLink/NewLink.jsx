import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import loadFolders from '../../redux/actions/folderActions'
import DropDownPicker from 'react-native-dropdown-picker'

import Feather from 'react-native-vector-icons/Feather'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import bodyStyles from '../../assets/styles/bodyStyles'
import NewLinkStyles from './NewLinkStyles'

import RadioButtonRN from 'radio-buttons-react-native'

// eslint-disable-next-line react/prop-types
const CheckBoxWithoutSquare = ({ isChecked, onPress, size = 100 }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isChecked
        ? (
        <Image
          style={{ width: size, height: size }}
          source={require('../../assets/images/tools.png')}
        />
          )
        : (
        <Image
          style={{ width: size, height: size, opacity: 0.5 }}
          source={require('../../assets/images/tools.png')}
        />
          )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 100
  },

  checkContainer: {
    marginHorizontal: 15
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkText: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: 'normal',
    color: 'black'
  },
  underline: {
    textDecorationLine: 'underline',
    fontSize: 13,
    fontWeight: 'normal',
    color: 'black'
  }
})

const colorData = [
  {
    label: 'red'
  },
  {
    label: 'blue'
  }
]

export default function FolderList () {
  const agreements = [
    {
      content: 'Color blue',
      checked: false
    },
    {
      content: 'Color red',
      checked: false
    }
  ]

  const [linkName, setLinkName] = useState()
  const [groupFolder, setgroupFolder] = useState()
  const [nameGroup, setNameGroup] = useState()
  const [data, setData] = useState(agreements)
  const [isChecked, setIsChecked] = useState(true)

  const state = {
    country: null
  }

  const checkOne = (newValue, index) => {
    const temp = data.map((item, i) => {
      return index === i ? { ...item, checked: newValue } : item
    })
    setData(temp)
    setIsChecked(!isChecked)
  }

  return (
    <View style={NewLinkStyles.container}>
        <View style={bodyStyles.titleContent}>
            <Image
                source={require('../../assets/images/new-link-title.png')}
                style={bodyStyles.sectionIcon}
            />
                <Text style={[{ fontFamily: 'barlowMedium' }, NewLinkStyles.title]}>New Link</Text>
        </View>

        {data.map((item, index) => (
            <View key={item}
              style={[styles.checkBox, { justifyContent: 'space-between' }]}>
              <View style={[styles.checkBox, { marginBottom: 10 }]}>
                <CheckBoxWithoutSquare
                  isChecked={item.checked}
                  onPress={() => checkOne(!item.checked, index)}
                />
                <Text style={[styles.checkText]}>{item.content}</Text>
              </View>
            </View>
        ))}

<RadioButtonRN
  data={colorData}
  selectedBtn={(e) => console.log(e)}
/>

        <DropDownPicker
          items={[
            { label: 'USA', value: 'usa', icon: () => <Feather name="home" size={18} color="#900" /> },
            { label: 'France', value: 'france', icon: () => <Feather name="home" size={18} color="#900" /> }
          ]}
          placeholder='Select option'
          defaultValue={state.country}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => this.setState({
            country: item.value
          })}
        />
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
                onPress={() =>
                  console.log('Hi')
                }
            />
        </View>
    </View>
  )
}
