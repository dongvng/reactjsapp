import React, { Component } from 'react';

import './App.css';

import Todo from './components/main/todo/todo'
import Header from './components/header/header'
import Aside from './components/aside/aside'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todo />
        <Aside />
      </div>
    );
  }
}

export default App;
