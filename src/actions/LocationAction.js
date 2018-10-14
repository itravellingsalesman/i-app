import { Platform, AsyncStorage } from 'react-native';

import HackaAPI from '../HackaAPI';

export const setLocation = (id, latitude, longitude) => {
  return (dispatch) => {
    HackaAPI.req({
      endpoint: 'user/location/save',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: id + '',
        latitude: latitude + '',
        longitude: longitude + ''
      },
      success: (obj) => {
        if(obj.success) {
          //alert(id + ' ' + longitude + ' ' + latitude);
        } else {
        //  alert("deu errado");
        }
      },
      error: (error) => {
        //  alert("deu errado");
      }
    });
  }
}

export const getAllLocation = (filter) => {
  return (dispatch) => {
    HackaAPI.req({
      endpoint: 'user/location',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        filter: filter
      },
      success: (obj) => {
        if(obj.success) {

          dispatch({
            type: 'changeList',
            payload: {
              list: obj.data
            }
          });
        } else {
          dispatch({
            type: 'changeError',
            payload: {
              error: 1
            }
          });
        }
      },
      error: (error) => {
        dispatch({
          type: 'changeError',
          payload: {
            error: 2
          }
        });
      }
    });
  }
};

export const changeList = (param) => {
  return {
    type: 'changeList',
    payload: {
      list: param
    }
  }
};

export const changeMapFilter = (param) => {
  return {
    type: 'changeMapFilter',
    payload: {
      mapFilter: param
    }
  }
};
