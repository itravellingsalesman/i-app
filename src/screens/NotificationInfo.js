import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { Platform, AsyncStorage } from 'react-native';
import { setLocation } from '../actions/LocationAction';

import notificationIcon from '../assets/notification.png';

export class Notification extends Component {

  static navigationOptions = {
    title: 'Informações',
    headerStyle: {
      flex: 1,
      backgroundColor: '#ff2951',
      alignItems: 'center'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      error: 's'
    };
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.notification.list,
    id: state.auth.id,
    listLoading: state.notification.listLoading
  };
}

const NotificationConnect = connect(mapStateToProps, {
  setLocation})(Notification);
export default NotificationConnect;
