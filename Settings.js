import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import ListItem from './ListItem';

const settings = [
    { title: 'Profile', detail: 'Profile page' },
    { title: 'UserManual', detail: 'User manual page'}
];
  

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    }
    static defaultProps = {
        data: settings,
    }
    _onPressItem = (title) => {
        console.log(title);
        this.props.navigation.navigate(title);
    };
    _renderItem = ({item}) => (
        <ListItem
          onPressItem={this._onPressItem}
          title={item.title}
          detail={item.detail}
        />
      );
    
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text>Settings Screen</Text>
                </View>
                <View>
                    <FlatList
                        data={this.props.data}
                        keyExtractor={(item) => item.title}
                        renderItem={this._renderItem}
                    />
                </View>
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
