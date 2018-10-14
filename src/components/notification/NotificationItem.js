import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

import clockIcon from '../../assets/clock.png';
import locationIcon from '../../assets/siren.png'

export default class NotificationItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.nav.navigate('NotificationInfo')}
        >
          <View style={styles.logoContainer}>
            <Image
              source={locationIcon}
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                tintColor: this.props.data.urgency == 0 ? '#00ff00' :
                  this.props.data.urgency == 1 ? '#ffa500' : '#ff0000'
              }}
            />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoTopContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.textName} numberOfLines={1} ellipsizeMode='tail'>{this.props.data.usr_idsend.name}</Text>
              </View>

              <View style={styles.dateContainer} >
                {/* <Text style={styles.textDate}>{this.props.data.usr_idsend.name}</Text> */}
              </View>
            </View>

            <View>
              <Text numberOfLines={1} ellipsizeMode='tail'>{this.props.data.message}</Text>
            </View>
          </View>
        </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row'
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  infoTopContainer: {
    flexDirection: 'row',
  },
  textName: {
    color: '#000000',
    fontWeight: 'bold'
  },
  textDate: {
    right: -25
  },
  nameContainer: {
    flex: 1
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  infoTop: {

  }
});
