import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AppNav from './components/AppNavigator';


export default class App extends React.Component {
  render() {
    return (
      <AppNav/>
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
