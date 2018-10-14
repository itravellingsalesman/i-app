import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import LocationReducer from './reducers/LocationReducer';
import NotificationReducer from './reducers/NotificationReducer';

const Reducers = combineReducers({
  auth: AuthReducer,
  location: LocationReducer,
  notification: NotificationReducer
});

export default Reducers;
