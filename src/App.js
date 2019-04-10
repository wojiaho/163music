import React, { Component } from 'react';
import './App.scss';
import Header from './component/header';
import Tabs from './component/tabs';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Tabs>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Tabs>
      </div>
    );
  }
}

export default App;
