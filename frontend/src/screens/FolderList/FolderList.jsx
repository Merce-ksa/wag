import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import loadFolders from '../../redux/actions/folderActions'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import bodyStyles from '../../assets/styles/bodyStyles'
import FolderListStyles from './FolderListStyles'

const folderRed = require('../../assets/images/folder-red.png')
const folderBlue = require('../../assets/images/folder-blue.png')
const folderGreen = require('../../assets/images/folder-green.png')
const folderYellow = require('../../assets/images/folder-yellow.png')

function containerFolderStyle (color) {
  switch (color) {
    case 'red':
      return FolderListStyles.redContainer
    case 'blue':
      return FolderListStyles.blueContainer
    case 'green':
      return FolderListStyles.greenContainer
    case 'yellow':
      return FolderListStyles.yellowContainer
  }
}

function textFolderStyle (color) {
  switch (color) {
    case 'red':
      return FolderListStyles.redText
    case 'blue':
      return FolderListStyles.blueText
    case 'green':
      return FolderListStyles.greenText
    case 'yellow':
      return FolderListStyles.yellowText
  }
}

function iconFolder (color) {
  switch (color) {
    case 'red':
      return folderRed
    case 'blue':
      return folderBlue
    case 'green':
      return folderGreen
    case 'yellow':
      return folderYellow
  }
}

function FolderList ({ route, navigation, folders, actions }) {
  const {
    groupId,
    groupName
  } = route.params

  useEffect(() => {
    actions.loadFolders(groupId)
  }, [])

  return (
          <View style={bodyStyles.container}>
            <View style={bodyStyles.titleContent}>
            <Image
              source={require('../../assets/images/folder-list.png')}
              style={bodyStyles.sectionIcon}
            />
              <Text style={[{ fontFamily: 'barlowMedium' }, bodyStyles.title]}>{groupName}</Text>
            </View>
            <ScrollView key="groupsContainer" style={FolderListStyles.foldersContainer}>
              <View style={FolderListStyles.row}>
                {folders && folders.map((folder) => (
                    <TouchableOpacity key={folder.name} style={[FolderListStyles.folderContainer, containerFolderStyle(folder.color)]}>
                        <Image
                            source={iconFolder(folder.color)}
                        />
                        <Text style={[FolderListStyles.folderTitle, textFolderStyle(folder.color)]}>{folder.name}</Text>
                        <Text style={[FolderListStyles.folderDate, textFolderStyle(folder.color)]}>{folder.createdAt}</Text>
                    </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View style={bodyStyles.floatButton}>
              <TouchableOpacity
                  onPress={() => navigation.navigate('NewLink')}
              >
                  <Image
                    style={bodyStyles.imageFloatButton}
                    source={require('../../assets/images/new-link.png')}
                  />
              </TouchableOpacity>
            </View>
          </View>
  )
}

FolderList.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      groupId: PropTypes.string,
      groupName: PropTypes.string
    }).isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,

  actions: PropTypes.shape({
    loadFolders: PropTypes.func.isRequired
  }).isRequired,

  folders: PropTypes.arrayOf(PropTypes.shape({
    groupId: PropTypes.string,
    folderId: PropTypes.string,
    name: PropTypes.string,
    createdAt: PropTypes.string,
    color: PropTypes.string
  })).isRequired
}

function mapStateToProps (state) {
  return {
    folders: state.folders
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadFolders }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderList)
