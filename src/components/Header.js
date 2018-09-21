import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid header">
            <div className="container">
                <h1 className="display-4">My Github Favorites</h1>
               
            </div>
        </div>
      </div>
    )
  }
}

export default Header;