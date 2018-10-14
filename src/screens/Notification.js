import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Button, FlatList, Switch } from 'react-native';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { Platform, AsyncStorage } from 'react-native';
import { logout, setUserStatus, changeGps } from '../actions/AuthActions';
import { getAllNotification } from '../actions/NotificationAction';
import { setLocation } from '../actions/LocationAction';

import notificationIcon from '../assets/notification.png';
import menuIcon from '../assets/menu-button.png';
import searchIcon from '../assets/search.png';
import logoutIcon from '../assets/logout.png';

import NotificationLoad from '../components/notification/NotificationLoad';
import NotificationItem from '../components/notification/NotificationItem';

let i = 1;

export class Notification extends Component {

  static navigationOptions = {
    title: 'Notificações',
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
      error: null
    };

    this.setLoc = this.setLoc.bind(this);
    this.verifyStatus = this.verifyStatus.bind(this);
  }

  setLoc() {
    if(this.props.gps == 1) {
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
          //alert(error.message);
        },
        { enableHighAccuracy: true, timeout: 20000 },
      );

      this.props.setLocation(this.props.id, this.state.latitude, this.state.longitude);
    }
  }

  componentDidMount() {
    this.props.getAllNotification(this.props.id, 0);

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        this.setState({ error: error.message });
        //alert(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000 },
    );
    this.props.setLocation(this.props.id, this.state.latitude, this.state.longitude);
     this.interval = setInterval(() => this.setLoc(), 2000);
  }

  componentWillUnmount() {
     navigator.geolocation.clearWatch(this.watchId);
   }

   componentDidUpdate() {
     this.verifyStatus();
   }

   verifyStatus() {
     if(this.props.status === 2) {
       this.props.navigation.dispatch(StackActions.reset({
         index: 0,
         key: null,
         actions: [
           NavigationActions.navigate({routeName:'Login'})
         ]
       }))
     }
   }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.listLoading == true &&
          <View>
            <NotificationLoad />
            <NotificationLoad />
            <NotificationLoad />
            <NotificationLoad />
            <NotificationLoad />
          </View>
        }
        {
          (this.props.listLoading == false && this.props.list.length == 0) &&
          <View style={styles.feedZero}>
            <Text>Você não possui notificações</Text>
          </View>
        }
        {
          (this.props.listLoading == false && this.props.list.length > 0) &&
          <View style={{flex:1}}>

            <FlatList
              data={this.props.list}
              renderItem={({item}) => <NotificationItem data={item} nav={this.props.navigation} />}
              keyExtractor = {(item) => item.id}
              style={styles.feed}
            />
            <View style={styles.buttonNotification}>
              <TouchableOpacity>
                <Image
                  source={notificationIcon}
                  style={styles.iconNotification}
                />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonLogout}>
              <TouchableOpacity
                onPress={this.props.logout}
              >
                <Image
                  source={logoutIcon}
                  style={styles.iconLogout}
                />
                </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  feed: {
    flex: 1
  },
  search: {
    position: 'absolute',
    top: 90,
    left: '5%',
    width: '90%',
  },
  input: {
    height: 60,
    borderWidth: 0.5,
    borderColor: '#000000',
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
  buttonLogout: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 42.5,
    left: 70
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
    tintColor: '#000000'
  },
  iconNotification: {
    width: 65,
    height: 65,
    tintColor: '#ff2951'
  },
  iconLogout: {
    width: 35,
    height: 35,
    tintColor: '#ff2951'
  },
  buttonMenu: {
    position: 'absolute',
    top: '5%',
    left: '5%',
  },
  iconMenu: {
    width: 25,
    height: 25,
    tintColor: '#000000'
  },
  feedZero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    list: state.notification.list,
    id: state.auth.id,
    listLoading: state.notification.listLoading,
    status: state.auth.status,
    gps: state.auth.gps
  };
}

const NotificationConnect = connect(mapStateToProps, {
  getAllNotification, setLocation, logout, setUserStatus, changeGps})(Notification);
export default NotificationConnect;
