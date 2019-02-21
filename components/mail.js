import React from 'react';

import { Button, StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './home'
import Profile from './profile'
//api for outlook
export default class UdemyApi extends React.Component {
    constructor(props){
        this.state = {
            loading: true,
            dataSource: []
        };
    }

    componentDidMount() {
        fetch("https://www.udemy.com/api-2.0/search-suggestions/?q=python")
        .then(response => response.json())
        .then((responseJson) => {
            this.setState({
                loading: false,
                dataSource: responseJson
            })
        })
        .catch(error =>console.log(error)) 
    }

    renderItem=(data)=> 
    <Text>{data}</Text>

    render() {
        if(this.state.loading){
            return(
                <View>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }
        return(
            <View>
                <FlatList
                    data= {this.state.dataSoucre}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem= {item => this.renderItem(item)}
                    keyExtractor={item=>item.id.toString()}
                />
            </View>
        )
    }
}



//pages
const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Profile: {screen: Profile},
    },
    {
        initialRouteName: "Home"
    }
);

//const AppNavigate = createAppContainer(udemy_api);

/*export default class AppNavigator extends React.Component {
    render() {
        return <AppNavigate />;
    }
}*/
