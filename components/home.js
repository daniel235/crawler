import React from 'react';

import { StyleSheet, Text, View, Button, Linking } from 'react-native';

import { authorize } from 'react-native-app-auth';

import * as Expo from 'expo';



class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false,
            name: "", 
            photoUrl: ""
        }
        
    }

    signIn = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                iosClientId:
                    "531799385489-3afjbeu701pfvpasm9br77emtb5vrnk4.apps.googleusercontent.com",
                scopes: ["profile", "email"]
            })

            if(result.type === "success") {
                this.setState({
                    loggedIn: true,
                    name: result.user.name,
                    photoUrl: result.user.photoUrl
                })
            }
            else{
                console.log("cancelled")
            }

        }
        catch(e) {
            console.log("error", e)
        }

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
                    <Text>{this.state.name}</Text>
                    ) : (
                        <LoginPage signIn={this.signIn}/>
                    )}
            </View>
        );
    }
    
}

const LoginPage = props => {
    return(
        <View>
            <Text>Sign in With Google</Text>
            <Button title="google sign in " onPress={() => props.signIn()}/>
        </View>
    )
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