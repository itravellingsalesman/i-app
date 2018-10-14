const initialState = {
  list:[],
  listLoading: true
};

const NotificationReducer = (state = initialState, action) => {
  if(action.type == 'changeList') {
    return { ...state, list: action.payload.list };
  }

  if(action.type == 'changeListLoadingStatus') {
    return { ...state, listLoading: action.payload.listLoading };
  }

  return state;
}

export default NotificationReducer;
