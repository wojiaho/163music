import React, { Component } from 'react';
import './App.scss';
import Header from './component/header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}

export default App;
