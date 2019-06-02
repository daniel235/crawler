import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppNav from './components/AppNavigator';
import LogIn from './components/login';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    }
  }

  render() {
    return (
      <AppNav/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
