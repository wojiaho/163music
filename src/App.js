import React, { Component } from 'react';
import './App.scss';
import Header from './component/header/index';
import Tabs from './component/tabs';
import Recommend from './pages/recommend';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Tabs>
          <Recommend />
          <div>222</div>
          <div>333</div>
        </Tabs>
      </div>
    );
  }
}

export default App;
