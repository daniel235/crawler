import React from 'react'

import { View, Text, Button } from 'react-native'


class ProfileScreen extends React.Component {
    render(){
        return (
            <View>
                <Text>Profile Screen</Text>
                <Button title="Back Home" onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}

export default ProfileScreen;