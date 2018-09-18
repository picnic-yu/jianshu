import React, { Component } from 'react';
import Header from './common/header/index'
import store from './store/index';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Header></Header>
      </Provider>
    );
  }
}

export default App;
