import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './home';
import ProfileScreen from './profile';
import LogIn from './login';
import SignUp from './SignUp';
import Loading from './loading';


const AppNavigator = createStackNavigator({
        Home: { screen: HomeScreen }, 
        Profile: {screen: ProfileScreen},
        Login : { screen : LogIn},
        SignUp : { screen : SignUp},
        Loading : { screen : Loading},
    },
    {
        initialRouteName : 'Loading'
    }

);

const AppNav = createAppContainer(AppNavigator);

export default AppNav;

