import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Map from './Map';

export default Drawer = createDrawerNavigator(
{
	Map: Map
}, {
	drawerBackgroundColor: 'rgba(32,0,32,0.9)',
});
