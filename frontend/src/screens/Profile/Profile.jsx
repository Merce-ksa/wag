import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/userActions'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { SvgUri } from 'react-native-svg'
import ProfileStyles from './ProfileStyles'

function Profile ({ user, actions }) {
  console.log(user.photoURL)
  return (
    <View style= {ProfileStyles.container}>
        <View style={ProfileStyles.profileTitleContent}>

            <Text style={ProfileStyles.title}>Profile</Text>

            <TouchableOpacity onPress={() => actions.logout()}>
                <Image
                  source= {require('../../assets/images/logout.png')}
                  style={ProfileStyles.logout}
                />
            </TouchableOpacity>
      </View>
      <View style={ProfileStyles.mainContent}>
          <View style={ProfileStyles.avatarContent}>
            <SvgUri
              style={ProfileStyles.avatar}
              uri= {user.photoURL}
            />
          </View>
          <View style={ProfileStyles.userNameContent}>
            <Text style={ProfileStyles.userName}>{user.userName ? user.userName : 'User name'}</Text>
            <TouchableOpacity
                style={ProfileStyles.editFloat}
                onPress={() => console.log('Editar perfil')}
            >
                <Image source= {require('../../assets/images/edit.png')}
                style={ProfileStyles.EditIcons} />
            </TouchableOpacity>
          </View>
        <Text style={ProfileStyles.userEmail}>{user.email}</Text>
        <Text style={ProfileStyles.userDescription}>
          { user.description ? user.description : 'Hey there! I am using Wag XD!' }
        </Text>
      </View>
    </View>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string,
    email: PropTypes.string.isRequired,
    description: PropTypes.string,
    photoURL: PropTypes.string.isRequired
  }).isRequired,

  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
}
function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ logout }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
