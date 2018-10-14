import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Notification from './Notification';
import NotificationInfo from './NotificationInfo';

const NotificationStack = createStackNavigator(
{
	Notification: Notification,
	NotificationInfo: NotificationInfo
}, {
  navigationOptions: {
    headerTitleStyle: {
      color: '#ffffff',
      flex: 1
    }
  }
});

export default NotificationStack;
