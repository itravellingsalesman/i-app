import { AsyncStorage } from 'react-native';

import HackaAPI from '../HackaAPI';

export const getAllNotification = (id, role) => {
  return (dispatch) => {
    dispatch({
      type: 'changeListLoadingStatus',
      payload: {
        listLoading: true
      }
    });

    HackaAPI.req({
      endpoint: 'notification/getall',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: String(id),
        role: String(role)
      },
      success: (obj) => {
        if(obj.success) {
          dispatch({
            type: 'changeListLoadingStatus',
            payload: {
              listLoading: false
            }
          });

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

export const changeListN = (param) => {
  return {
    type: 'changeList',
    payload: {
      list: param
    }
  }
};

export const changeListLoadingStatusN = (param) => {
  return {
    type: 'changeListLoadingStatus',
    payload: {
      listLoading: param
    }
  }
};
