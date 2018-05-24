import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="parent">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Wesley's Mobile Device Repair</h1>
          </header>
          <p className="App-intro">
            Hello world!
          </p>
        </div>
        <div className="parallax"></div>
      </div>
    );
  }
}

export default App;