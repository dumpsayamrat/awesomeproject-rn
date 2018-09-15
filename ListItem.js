import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MyListItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.title);
    };
  
    render() {
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.item}>
            <Text>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderBottomColor: '#444444',
        borderBottomWidth: .5,
    },
    title: {
        fontSize: 20,
    }
});
