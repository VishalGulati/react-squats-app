import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AppBody from './components/AppBody/AppBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <AppBody/>
      </div>
    );
  }
}

export default App;
