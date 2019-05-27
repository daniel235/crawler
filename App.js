import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppNav from './components/AppNavigator';


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
        <AppNav/>
      </View>
    );
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
