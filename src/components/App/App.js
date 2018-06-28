import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Customer from '../Customer/Customer';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br/>
          <Customer />
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
