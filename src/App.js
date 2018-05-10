import React, { Component } from 'react';
import logo from './logo.svg';
import Box from './Box.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Fibonacci Counter</h1>
          <Box></Box>
      </div>
    );
  }
}

export default App;
