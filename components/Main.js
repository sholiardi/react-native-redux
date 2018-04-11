import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export class Main extends React.Component {
  render() {
    return (
      <View>
        <View>
          <View style={styles.header}>
            <Text>The Main Page</Text>
          </View>
        </View>
        <View>
          <View style={styles.button}>
            <Button
              title="Change the Username"
              onPress={() => this.props.changeUsername('Anna')} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
