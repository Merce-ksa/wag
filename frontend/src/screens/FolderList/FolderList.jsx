import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadFolders } from '../../redux/actions/folderActions'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Moment from 'moment'
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

function formatDate (date) {
  Moment.locale('es')

  return Moment(`${date}`).format('D MMM YY')
}

function FolderList ({ route, navigation, folders, folderLastUpdated, actions }) {
  const {
    groupId,
    groupName
  } = route.params

  const isFocused = useIsFocused()

  useEffect(() => {
    actions.loadFolders(groupId)
  }, [isFocused])

  useEffect(() => {
    actions.loadFolders(groupId)
  }, [folderLastUpdated])

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
              <TouchableOpacity
                key={folder.name}
                style={[FolderListStyles.folderContainer, containerFolderStyle(folder.color)]}
                onPress={() => navigation.navigate('LinksList', {
                  folderId: folder.folderId,
                  folderName: folder.name
                })}
              >
                  <Image
                      source={iconFolder(folder.color)}
                  />
                  <Text style={[FolderListStyles.folderTitle, textFolderStyle(folder.color)]}>{folder.name}</Text>
                  <Text style={[FolderListStyles.folderDate, textFolderStyle(folder.color)]}>{formatDate(folder.createdAt)}</Text>
              </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={FolderListStyles.newFolderButtonContainer}>
        <TouchableOpacity
          style={FolderListStyles.newFolderButton}
          onPress={() => navigation.navigate('NewFolder', { groupId: groupId })}
        >
          <Text style={FolderListStyles.textFolderButton}>Create folder</Text>
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
    navigate: PropTypes.func
  }).isRequired,

  actions: PropTypes.shape({
    loadFolders: PropTypes.func
  }).isRequired,

  folders: PropTypes.arrayOf(PropTypes.shape({
    groupId: PropTypes.string,
    folderId: PropTypes.string,
    name: PropTypes.string,
    createdAt: PropTypes.string,
    color: PropTypes.string
  })),

  folderLastUpdated: PropTypes.string
}

function mapStateToProps (state) {
  return {
    folders: state.folders,
    folderLastUpdated: state.folderLastUpdated
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadFolders }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FolderList)
