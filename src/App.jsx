import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="App">
          <header className="App-header">
            <div className="login">
              <p><a href="#login">Login</a></p>
            </div>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Wesleys Mobile Device Repair</h1>
          </header>
          <div className="navBar">
            <ul className="main-menu">
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#repairs">Repairs</a>
                <ul className="repair-sub-menu">
                  <li><a href="#iphone">iPhone</a></li>
                  <li><a href="#ipod">iPod</a></li>
                  <li><a href="#ipad">iPad</a></li>
                  <li><a href="#android">Android</a></li>
                  <li><a href="#tablet">Tablet</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="parallax"></div>
        </div>

    );
  }
}

export default App;
