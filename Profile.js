import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    }
    componentDidMount() {
        console.log('Profile Rendered');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
