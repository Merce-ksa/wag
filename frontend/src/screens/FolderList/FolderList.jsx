import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import bodyStyles from '../../assets/styles/bodyStyles'
import FolderListStyles from './FolderListStyles'

export default function FolderList ({ navigation }) {
  return (
          <View style={bodyStyles.container}>
            <View style={bodyStyles.titleContent}>
            <Image
              source={require('../../assets/images/folder-list.png')}
              style={bodyStyles.sectionIcon}
            />
              <Text style={[{ fontFamily: 'barlowMedium' }, bodyStyles.title]}>SKYLAB 202101</Text>
            </View>
                <Text>SKYLAB 202101</Text>
            <ScrollView key="groupsContainer" style={FolderListStyles.foldersContainer}>
                <View style={FolderListStyles.row}>
                    <TouchableOpacity style={FolderListStyles.redContainer}>
                        <Image
                            source={require('../../assets/images/folder-red.png')}
                        />
                        <Text style={FolderListStyles.redTitle}>CSS</Text>
                        <Text style={FolderListStyles.redDate}>25/12/2021</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

              <View style={bodyStyles.floatButton}>
                  <TouchableOpacity
                      onPress={() => navigation.navigate('CreateGroup')}
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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}
