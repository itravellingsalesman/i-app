import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

// import Preload from './src/screens/Preload';
import Home from './src/screens/Home';
import NotificationStack from './src/screens/NotificationStack';
import Login from './src/screens/Login';

console.disableYellowBox = true;

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const AppNavigator = createStackNavigator({
  // Preload: {
  //   screen: Preload
  // },
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  NotificationStack: {
    screen: NotificationStack
  },
}, {
  navigationOptions: {
    header: null
  }
});

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
