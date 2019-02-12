import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home';
import ProfileScreen from './profile';


const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen }, 
    Profile: {screen: ProfileScreen},
});

const AppNav = createAppContainer(AppNavigator);

export default AppNav;