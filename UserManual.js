import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class UserManual extends React.Component {
    static navigationOptions = {
        title: 'User Manual',
    }
    componentDidMount() {
        console.log('UserManual Rendered');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>User Manual Page</Text>
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
