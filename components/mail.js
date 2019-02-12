import React from 'react';

import { Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './home'
import Profile from './profile'
//api for outlook


//pages
const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Profile: {screen: Profile},
    },
    {
        initialRouteName: "Home"
    }
);

const AppNavigate = createAppContainer(MainNavigator);

export default class AppNavigator extends React.Component {
    render() {
        return <AppNavigate />;
    }
}
