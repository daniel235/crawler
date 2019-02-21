import React from 'react';

import { StyleSheet, Text, View, Button, Linking } from 'react-native';

import { authorize } from 'react-native-app-auth';
import { AppAuth } from 'expo-app-auth';
import { Google } from 'expo';


const clientId = '1055713492999-t2a4mqngsspj8u5cpgi7i70gefrts443.apps.googleusercontent.com';
const { type, accessToken, user } = await Google.logInAsync({ clientId });

if(type === 'success') {
    console.log(user);
}

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false,
            name: "", 
            photoUrl: ""
        }
        
    }

    signIn = async () => {
        this.setState({
            loggedIn: true,
            name: "John Snowden",
            photoUrl: "https://en.wikipedia.org/wiki/Edward_Snowden#/media/File:Edward_Snowden-2.jpg"
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Your tasks</Text>
                
                <Button
                    title="Go to profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
                <Button
                    title="Authenticate Outlook"
                    onPress={() => Linking.openURL("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=ba9633d6-4d45-4d8b-abc2-06ffcbcf74bf&redirect_uri=com.example.app://auth&response_type=code&scope=openid+Mail.Read")}
                />
                {this.state.loggedIn ? (
                <Button
                    title="Google sign in"
                    onPress={() => this.signIn()}
                    />
                    ) : (
                        <Button 
                            title="Log out of google"
                        />
                    )}
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4286f4',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});

export default HomeScreen;