const initialState = {
  list:[],
  mapFilter: ""
};

const LocationReducer = (state = initialState, action) => {
  if(action.type == 'changeList') {
    return { ...state, list: action.payload.list };
  } 

  if(action.type == 'changeMapFilter') {
    return { ...state, mapFilter: action.payload.mapFilter };
  }

  return state;
}

export default LocationReducer;
