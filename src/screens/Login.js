import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  checkLogin,
  changeUsername,
  changePassword,
  changeRole,
  changeError,
  signInUser
} from '../actions/AuthActions';

import background from '../assets/bg.jpg';
import logo from '../assets/logoo.png';
import user from '../assets/userL.png';
import password from '../assets/password.png';
import show from '../assets/show.png';
import hide from '../assets/hide.png';

const { width: WIDTH } = Dimensions.get('window')

export class Login extends Component {
  static navigationOptions = {
    title: '',
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      errorMessage: ''
    };

    this.showPass = this.showPass.bind(this);
    this.loginAction = this.loginAction.bind(this);
    this.verifyStatus = this.verifyStatus.bind(this);
  }

  showPass() {
    if(this.state.showPassword == false) {
      this.setState({
        showPassword: true
      });
    } else {
      this.setState({
        showPassword: false
      });
    }
  }

  loginAction() {
    this.props.signInUser(
      this.props.username,
      this.props.password
    );
  }

  componentDidUpdate() {
    this.verifyStatus();
  }

  verifyStatus() {
    if(this.props.status === 1) {
      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName:'Home'})
        ]
      }))
     }

    if(this.props.status === 3) {
      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({routeName:'NotificationStack'})
        ]
      }))
    }

    if(this.props.error === 1) {
      let s = this.state;
      s.errorMessage = 'Usuário ou senha incorretos';
      this.setState(s);
      this.props.changeError(0);
    }

    if(this.props.error === 2) {
      let s = this.state;
      s.errorMessage = 'Erro desconhecido, tente novamente';
      this.setState(s);
      this.props.changeError(0);
    }
  }

  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.error}>{this.state.errorMessage}</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Digite o seu usuário'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
            value={this.props.username}
            onChangeText={this.props.changeUsername}
          />

          <Image source={user} style={styles.inputLogo} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputS} 
            placeholder={'Digite a sua senha'}
            secureTextEntry={this.state.showPassword}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
            value={this.props.password}
            onChangeText={this.props.changePassword}
          />

          <Image source={password} style={styles.inputLogo} />

          <TouchableOpacity
            style={styles.buttonEye}
            onPress={this.showPass}>
            <Image
              source={this.state.showPassword == false ? hide : show}
              style={styles.inputEye} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.loginAction} style={styles.buttonLogin}>
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    paddingLeft: 45,
    paddingRight: 10,
    fontSize: 15,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 25
  },
  inputS: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#ffffff',
    paddingLeft: 45,
    paddingRight: 45,
    fontSize: 15,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 25
  },
  buttonEye: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 12,
    right: 37
  },
  inputEye: {
    width: 20,
    height: 20
  },
  inputLogo: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: 12,
    left: 37
  },
  logo: {
    height: 126,
    width: 120
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },
  buttonLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#ff2951',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center'
  },
  error: {
    position: 'absolute',
    top: 150,
    color: '#ff4400',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => {
  return {
    status: state.auth.status,
    username: state.auth.username,
    password: state.auth.password,
    role: state.auth.role,
    error: state.auth.error
  };
}

const LoginConnect = connect(mapStateToProps, {
  checkLogin, changeUsername, changePassword, changeRole, changeError, signInUser})(Login);
export default LoginConnect;
