import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import NotificationStack from './NotificationStack';

export default DrawerNormal = createDrawerNavigator(
{
	NotificationStack: NotificationStack
}, {
	drawerBackgroundColor: 'rgba(32,0,32,0.9)',
});
