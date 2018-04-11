import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { User } from './components/User';
import { Main } from './components/Main';

class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      username: "Max"
    };
  }

  changeUsername(newName) {
    this.setState({
      username: newName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Main changeUsername={this.changeUsername.bind(this)} />
        <User username={this.state.username} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
