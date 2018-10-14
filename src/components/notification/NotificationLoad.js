import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class NotificationLoad extends Component {

  render() {
    return (
      <View style={styles.notificationContainer}>
        <View style={styles.dateContainer}>
          <View style={styles.dateDay}></View>
          <View style={styles.dateMonth}></View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoTop}>
            <View style={styles.infoName}></View>
            <View style={styles.infoName}></View>
          </View>
          <View style={styles.infoBot}>
            <View style={styles.infoHour}></View>
            <View style={styles.infoLocal}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    width: 60,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  dateDay: {
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 30
  },
  dateMonth: {
    width: 60,
    height: 20,
    backgroundColor: '#f0f0f0'
  },
  notificationContainer: {
    top: '2%',
    left: '2%',
    width: '90%',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  infoContainer: {
    width: 230,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  infoName: {
    width: 230,
    height: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10
  },
  infoHour: {
    width: 100,
    height: 10,
    backgroundColor: '#f0f0f0',
    marginTop: 10
  },
  infoLocal: {
    width: 150,
    height: 10,
    backgroundColor: '#f0f0f0',
    marginTop: 10
  },
  infoTop: {
    top: 5,
    width: '100%',
    height: 60,
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  infoBot: {
    width: '100%',
    height: 40,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  }
});
