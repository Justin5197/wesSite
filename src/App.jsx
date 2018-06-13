import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="App">
          <header className="App-header">
            <div className="account">
              <a href="#login">Log In</a>
            </div>
            <div className="account">
              <a href="#register">Register</a>
            </div>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Wesley's Mobile Device Repair</h1>
          </header>
          <div class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <div class="dropdown">
              <button class="repairs">Repairs
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">iPhone</a>
                <a href="#">iPod</a>
                <a href="#">iPad</a>
                <a href="#">Android</a>
                <a href="#">Tablet</a>
              </div>
            </div>
            <a href="#contact">Contact</a>
          </div>
          <div className="parallax"></div>
        </div>

    );
  }
}

export default App;