import React from 'react';

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default class LogIn extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    handleLogin = () => {
        var b = 'one'
    }


    render() {
        return(
            <View style={styles.container}>
                <Text>Login</Text>
                {this.state.errorMessage && 
                    <Text style={{color : red}}>
                        {this.state.errorMessage}
                    </Text>}
                
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                />
                    
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />

                <Button 
                    style={{marginTop: 5}}
                    title="Login"
                    color="#841584"
                    onPress={() => this.handleLogin}
                />

                <Button
                    title="Don't have an account? Sign Up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    }
})