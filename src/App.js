import React, { Component } from 'react';
import './App.css';
import Calculator from  './Calculator'
import { observer, inject } from 'mobx-react';

@inject("store")
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
