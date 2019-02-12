import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return(
            <View>
                <Text>Home Screen</Text>
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