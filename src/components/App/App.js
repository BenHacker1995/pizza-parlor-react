import React, { Component } from 'react';
import axios from 'axios';
import Select from '../Select/Select';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="pizza_photo.png"/>
        <p>Pizza is great.</p>
        <Select />

        
      </div>
    );
  }
}

export default App;
