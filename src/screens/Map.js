import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';
import { getAllLocation, changeMapFilter } from '../actions/LocationAction';

import notificationIcon from '../assets/notification.png';
import menuIcon from '../assets/menu-button.png';
import searchIcon from '../assets/search.png';

import MarkerTooltip from '../components/marker/MarkerTooltip';

let thisInterval;

export class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -22.133452,
        longitude: -51.4479615,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      },
      markers:[
        {
          key: 3,
          coords: {
            latitude: -22.13413597,
            longitude: -51.44823884
          },
          pinColor: '#00ff00',
          name: 'John Doe',
          role: 'Camareiro',
          status: 1,
          hour: '20:20',
          img: null
        }
      ]
    };

    this.openDrawerr = this.openDrawerr.bind(this);
    this.addMarker = this.addMarker.bind(this);
  }

  openDrawerr() {
    this.props.navigation.openDrawer();
  }

  addMarker() {
    this.props.getAllLocation(this.props.mapFilter);

    let s = this.state;

    s.markers = [];
    for (let obj of this.props.list) {
      s.markers.push({
        key: obj.usr_id.id,
        coords: {
          latitude: parseFloat(obj.latitude),
          longitude: parseFloat(obj.longitude)
        },
        pinColor: parseInt(obj.usr_id.status) == 1 ? '#00ff00' : '#ff0000',
        name: obj.usr_id.name,
        role: obj.usr_id.rol_id.description,
        status: obj.usr_id.status,
        hour: obj.time.time.hour + ':' + obj.time.time.minute,
        img: obj.usr_id.img
      });
    }

    this.setState(s);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        this.setState({ error: error.message });
        alert(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000 },
    );

     this.addMarker();

     this.interval = setInterval(() => this.addMarker(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={this.state.region}
            scrollEnabled={false}
            zoomEnabled={false}
            rotateEnabled={false}
          >
            {this.state.markers.map((marker) => {
              return (
                <Marker
                  key={marker.key}
                  coordinate={marker.coords}
                  pinColor={marker.pinColor}
                  title={marker.title}
                >
                  <Callout>
                    <MarkerTooltip data={marker}/>
                  </Callout>
                </Marker>
              )
            })}
          </MapView>
        </View>

        <View style={styles.buttonMenu}>
          <TouchableOpacity onPress={this.openDrawerr}>
            <Image
              source={menuIcon}
              style={styles.iconMenu}/>
            </TouchableOpacity>
        </View>

        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder={'Digite um nome ou cargo'}
            placeholderTextColor={'rgba(0, 0, 0, 0.35)'}
            underlineColorAndroid='transparent'
            value={this.props.mapFilter}
            onChangeText={this.props.changeMapFilter}
          />

          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={this.addMarker}
          >
            <Image
              source={searchIcon}
              style={styles.inputSearch} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonNotification}>
          <TouchableOpacity>
            <Image
              source={notificationIcon}
              style={styles.iconNotification}/>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  },
  search: {
    position: 'absolute',
    top: 80,
    left: '5%',
    width: '90%',
  },
  input: {
    height: 60,
    borderWidth: 0.5,
    borderColor: '#4293C8',
    paddingLeft: 15,
    backgroundColor: '#ffffff'
  },
  buttonNotification: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 30
  },
  buttonSearch: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 17,
    right: 15
  },
  inputSearch: {
    width: 25,
    height: 25,
    tintColor: '#4293C8'
  },
  iconNotification: {
    width: 65,
    height: 65,
    tintColor: '#4293C8'
  },
  buttonMenu: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
  iconMenu: {
    width: 25,
    height: 25,
    tintColor: '#4293C8'
  },
});

const mapStateToProps = (state) => {
  return {
    list: state.location.list,
    mapFilter: state.location.mapFilter
  };
}

const MapConnect = connect(mapStateToProps, {
  getAllLocation, changeMapFilter})(Map);
export default MapConnect;
