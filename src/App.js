import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import List from './components/List';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className = 'container'>
          <div className ='row'>
            <div className ='col'>
              <List/>
            </div>
            <div className ='col'>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
