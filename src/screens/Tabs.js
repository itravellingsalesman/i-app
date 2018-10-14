import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator }  from 'react-navigation-material-bottom-tabs';

import Home from './Home';
import Home0 from './Home0';

import mapIcon from '../assets/map.png';
import reportIcon from '../assets/report.png';
import profileIcon from '../assets/user.png';

const Tabs = createBottomTabNavigator ({
  Home: {
    screen: Home ,
    navigationOptions: {
      tabBarIcon: (params) => {
        return (
          <Image source={mapIcon} style={params.focused ? styles.iconBlack : styles.iconGrey} />
        );
      }
    }
  },
  Report: {
    screen: Home0,
    navigationOptions: {
      tabBarIcon: (params) => {
        return (
          <Image source={profileIcon} style={params.focused ? styles.iconBlack : styles.iconGrey} />
        );
      }
    }
  }
}, {
  tabBarOptions: {
    showLabel: false,
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#ffffff'
  },
  lazy: 'true'
});

const styles = StyleSheet.create({
  iconBlack: {
    width: 20,
    height: 20,
    tintColor: '#ff2951'
  },
  iconGrey: {
    width: 20,
    height: 20,
    tintColor: '#cccccc'
  }
});

export default Tabs;
