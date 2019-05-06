import React from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
        }
    }


    render() {
        return(
            <View>
                <TextInput
                    placeholder="Email"/>
                    
                <TextInput
                    secureTextEntry
                    placeholder="Password"/>

                <Button 
                    title="Login"
                    color="#841584"
                />

            </View>
        )
    }
}

