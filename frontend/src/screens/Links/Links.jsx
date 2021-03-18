import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import bodyStyles from '../../assets/styles/bodyStyles'
import LinksStyles from './LinksStyles'

export default function Links ({ navigation }) {
  return (
          <View style={bodyStyles.container}>
            <View style={bodyStyles.titleContent}>
            <Image
              source={require('../../assets/images/cloud-network.png')}
              style={bodyStyles.sectionIcon}
            />
              <Text style={[{ fontFamily: 'barlowMedium' }, bodyStyles.title]}>FOLDER NAME</Text>
            </View>
            <ScrollView key="groupsContainer" style={LinksStyles.foldersContainer}>

              <View style={LinksStyles.postContainer}>
                <Image
                  source={require('../../assets/images/blog.png')}
                  style={LinksStyles.postIcon}
                />

                <View style={LinksStyles.postInfo}>
                  <View style={LinksStyles.postTitleContainer}>
                    <Hyperlink
                      linkDefault={ true }
                      linkStyle={ { color: '#22215B', fontSize: 20, fontFamily: 'interBold' } }
                      linkText={ url => url === 'https://github.com/obipawan/hyperlink' ? 'Title link' : url }
                    >
                      <Text> https://github.com/obipawan/hyperlink </Text>
                    </Hyperlink>
                    <Text style={LinksStyles.postDate}>Date At</Text>
                  </View>
                  <Text style={LinksStyles.postDescription}>Description link: Dan Abramov's Mental Models </Text>
                </View>
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

Links.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}
