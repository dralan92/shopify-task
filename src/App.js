import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import List from './components/List';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <List/>
        
      </div>
    );
  }
}

export default App;
