import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false };
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Your tasks</Text>
                
                <Button
                    title="Go to profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4286f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;