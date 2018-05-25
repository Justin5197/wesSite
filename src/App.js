import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Wesleys Mobile Device Repair</h1>
          </header>
          <div className="navBar">
            <ul>
              <li><a class="active" href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#repairs">Repairs</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>
          </div>
          <div className="parallax"></div>
        </div>

    );
  }
}

export default App;
