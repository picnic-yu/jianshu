import React, { Component } from 'react';
import Header from './common/header/index'
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/home/index';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div>
          <Header></Header>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home} ></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
        
      </Provider>
    );
  }
}

export default App;
