import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { createStore } from "redux";

import { User } from './components/User';
import { Main } from './components/Main';

const initialState = {
  result: 1,
  lastValues: [],
  username: "Max"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
};

const store = createStore(reducer);

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

    store.subscribe(() => {
      console.log("Store updated!", store.getState());
    });

    store.dispatch({
      type: "ADD",
      payload: 100
    });

    store.dispatch({
      type: "ADD",
      payload: 22
    });

    store.dispatch({
      type: "SUBTRACT",
      payload: 80
    });

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
