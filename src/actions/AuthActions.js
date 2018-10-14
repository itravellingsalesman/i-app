import { Platform, AsyncStorage } from 'react-native';

import HackaAPI from '../HackaAPI';

export const checkLogin = () => {

  return (dispatch) => {
    AsyncStorage.getItem('logged')
      .then((data) => {
        if(data != null && data != '') {
          dispatch({
            type: 'changeStatus',
            payload: {
              status: 1
            }
          });
        } else {
          dispatch({
            type: 'changeStatus',
            payload: {
              status: 2
            }
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: 'changeStatus',
          payload: {
            status: 2
          }
        });
      });
  };
};

export const signInUser = (username, password) => {
  return (dispatch) => {


    // dispatch({
    //   type: 'changeStatus',
    //   payload: {
    //     status: 1
    //   }
    // });


    HackaAPI.req({
      endpoint: 'user/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        username: username,
        password: password,
      },
      success: (obj) => {
        if(obj.success) {

          dispatch({
            type: 'changeGps',
            payload: {
              gps: obj.data.status == 1 ? true : false
            }
          });

          dispatch({
            type: 'changeId',
            payload: {
              id: obj.data.id
            }
          });

          dispatch({
            type: 'changeStatus',
            payload: {
              status: obj.data.rol_id.usr_admin == 1 ? 1 : 3
            }
          });
          // var date = new Date();
          // date.setHours(date.getHours() + 1);
          //
          // AsyncStorage.setItem('access_token', obj.access_token);
          // AsyncStorage.setItem('refresh_token', obj.refresh_token);
          // AsyncStorage.setItem('expire_token', date);
          //
          // getMe();
          //
          // if(AsyncStorage.getItem('user_id') != null &&
          //   AsyncStorage.getItem('user_id') != '') {
          //     dispatch({
          //       type: 'changeStatus',
          //       payload: {
          //         status: 1
          //       }
          //     });
          // } else {
          //   AsyncStorage.setItem('access_token', '');
          //   AsyncStorage.setItem('refresh_token', '');
          //   AsyncStorage.setItem('expire_token', '');
          // }
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

export const setUserStatus = (id, status) => {
  return (dispatch) => {


    // dispatch({
    //   type: 'changeStatus',
    //   payload: {
    //     status: 1
    //   }
    // });


    HackaAPI.req({
      endpoint: 'user/status',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: id,
        status: status,
      },
      success: (obj) => {
        if(obj.success) {

          dispatch({
            type: 'changeGps',
            payload: {
              gps: obj.data.status
            }
          });

          alert('uepa');
          // var date = new Date();
          // date.setHours(date.getHours() + 1);
          //
          // AsyncStorage.setItem('access_token', obj.access_token);
          // AsyncStorage.setItem('refresh_token', obj.refresh_token);
          // AsyncStorage.setItem('expire_token', date);
          //
          // getMe();
          //
          // if(AsyncStorage.getItem('user_id') != null &&
          //   AsyncStorage.getItem('user_id') != '') {
          //     dispatch({
          //       type: 'changeStatus',
          //       payload: {
          //         status: 1
          //       }
          //     });
          // } else {
          //   AsyncStorage.setItem('access_token', '');
          //   AsyncStorage.setItem('refresh_token', '');
          //   AsyncStorage.setItem('expire_token', '');
          // }
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

export const logout = () => {
  AsyncStorage.setItem('logged', '');
  // AsyncStorage.setItem('refresh_token', '');
  // AsyncStorage.setItem('expire_token', '');
  // AsyncStorage.setItem('user_id', '');

  return {
    type: 'changeStatus',
    payload: {
      status: 2
    }
  };
};

export const changeId = (param) => {
  return {
    type: 'changeId',
    payload: {
      id: param
    }
  }
};

export const changeUsername = (param) => {
  return {
    type: 'changeUsername',
    payload: {
      username: param
    }
  }
};

export const changePassword = (param) => {
  return {
    type: 'changePassword',
    payload: {
      password: param
    }
  }
};

export const changeRole = (param) => {
  return {
    type: 'changeRole',
    payload: {
      role: param
    }
  }
};

export const changeError = (param) => {
  return {
    type: 'changeError',
    payload: {
      error: param
    }
  }
};

export const changeGps = (param) => {
  return {
    type: 'changeGps',
    payload: {
      gps: param
    }
  }
};
