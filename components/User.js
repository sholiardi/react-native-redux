import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export class User extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View className="row">
          <View className="col-xs-12">
            <Text>The User Page</Text>
          </View>
        </View>
        <View className="row">
          <View className="col-xs-12">
            <Text>User Name: {this.props.username}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
