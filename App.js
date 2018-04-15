import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Home from './containers/Home';
import store from './store';

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );

  }
}

export default App;
