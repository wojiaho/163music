import React, { Component } from 'react';
import './App.scss';
import Header from './component/header';
import Tabs from './component/tabs';
import Recommend from './pages/recommend';
import Hot from './pages/hot';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Tabs>
          <Recommend />
          <Hot />
          <div>333</div>
        </Tabs>
      </div>
    );
  }
}

export default App;
