import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadLinks } from '../../redux/actions/linkActions'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import Hyperlink from 'react-native-hyperlink'
import Moment from 'moment'
import bodyStyles from '../../assets/styles/bodyStyles'
import LinksStyles from './LinksStyles'

const blog = require('../../assets/images/blog.png')
const podcast = require('../../assets/images/podcast.png')
const tools = require('../../assets/images/tools.png')
const video = require('../../assets/images/video.png')

function iconLink (tag) {
  switch (tag) {
    case 'podcast':
      return podcast
    case 'video':
      return video
    case 'tool':
      return tools
    default:
      return blog
  }
}

function formatDate (date) {
  Moment.locale('es')

  return Moment(`${date}`).format('D MMM YY')
}

function LinksList ({ route, navigation, links, linksLastUpdated, actions }) {
  const {
    folderId,
    folderName
  } = route.params

  const isFocused = useIsFocused()

  useEffect(() => {
    actions.loadLinks(folderId)
  }, [isFocused])

  useEffect(() => {
    actions.loadLinks(folderId)
  }, [linksLastUpdated])

  return (
    <View style={bodyStyles.container}>
      <View style={bodyStyles.titleContent}>
      <Image
        source={require('../../assets/images/cloud-network.png')}
        style={bodyStyles.sectionIcon}
      />
        <Text style={[{ fontFamily: 'barlowMedium' }, bodyStyles.title]}>{folderName}</Text>
      </View>
      <ScrollView key="groupsContainer" style={LinksStyles.linksContainer}>
        {links && links.map((link) => (
          <View key={link.linkId} style={LinksStyles.postContainer}>
            <Image
              source={iconLink(link.tag)}
              style={LinksStyles.postIcon}
            />

            <View style={LinksStyles.postInfo}>
              <View style={LinksStyles.postTitleContainer}>
                <Hyperlink
                  linkDefault={ true }
                  linkStyle={ { color: '#22215B', fontSize: 16, fontFamily: 'interBold' } }
                  linkText={ url => url === link.url ? link.name : url }
                >
                  <Text>{link.url}</Text>
                </Hyperlink>
                <Text style={LinksStyles.postDate}>{formatDate(link.createdAt)}</Text>
                <Text style={LinksStyles.postDescription}>{link.description}</Text>
              </View>
            </View>
        </View>
        ))}

      </ScrollView>

      <View style={bodyStyles.floatButton}>
        <TouchableOpacity
            onPress={() => navigation.navigate('NewLink', { folderId: folderId })}
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

LinksList.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      folderId: PropTypes.string,
      folderName: PropTypes.string
    })
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired,

  actions: PropTypes.shape({
    loadLinks: PropTypes.func
  }).isRequired,

  links: PropTypes.arrayOf(PropTypes.shape({
    linkId: PropTypes.string,
    folderId: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string,
    despcription: PropTypes.string,
    tag: PropTypes.string,
    createdAt: PropTypes.string
  })).isRequired,

  linksLastUpdated: PropTypes.string
}

function mapStateToProps (state) {
  return {
    links: state.links,
    linksLastUpdated: state.linksLastUpdated
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ loadLinks }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksList)
