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
      <View>
        {this.state.loggedIn ? (
          <AppNav/>
        ) : (
          <LogIn/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
