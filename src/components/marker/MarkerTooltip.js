import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

// <EventFeed data={item} nav={this.props.navigation} />


import notificationIcon from '../../assets/notification.png';
import gutoguto from '../../assets/gutoguto.png';

export default class MarkerTooltip extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    //this.getDay = this.getDay.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerPhoto}>
          <View style={{
            backgroundColor: this.props.data.pinColor,
            width: 55,
            height: 55,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image
              source={{uri: this.props.data.img}}
              style={styles.photo}
            />
          </View>
        </View>

        <View style={styles.containerInfo}>
          <View style={styles.containerName}>
            <Text style={styles.textName}> {this.props.data.name} </Text>

            <Text> {this.props.data.role} </Text>

            <Text style={{
              color: this.props.data.pinColor
            }}> {this.props.data.status == 1 ? 'Disponível' : "Indisponível"} </Text>

            <Text> {this.props.data.hour} </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 80,
    backgroundColor: '#ffffff',
    flexDirection: 'row'
  },
  containerPhoto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#000000'
  },
  containerInfo: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  containerName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerOther: {
    flex: 3,
    alignItems: 'center'
  },
  textName: {
    color: '#000000',
    fontWeight: 'bold'
  }
});
