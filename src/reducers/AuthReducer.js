const initialState = {
  id: 0,
  username: '',
  password: '',
  status: 0,
  role: 0,
  error: 0,
  gps: 0
};

const AuthReducer = (state = initialState, action) => {
  if(action.type == 'changeId') {
    return { ...state, id: action.payload.id };
  }

  if(action.type == 'changeUsername') {
    return { ...state, username: action.payload.username };
  }

  if(action.type == 'changePassword') {
    return { ...state, password: action.payload.password };
  }

  if(action.type == 'changeStatus') {
    return { ...state, status: action.payload.status }
  }

  if(action.type == 'changeRole') {
    return { ...state, role: action.payload.role }
  }

  if(action.type == 'changeError') {
    return { ...state, error: action.payload.error }
  }

  if(action.type == 'changeGps') {
    return { ...state, gps: action.payload.gps }
  }

  return state;
}

export default AuthReducer;
