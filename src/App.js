import React, { Component } from 'react';
import Timer from './Components/Timer'
import Header from './Components/Header'
import './App.css';

import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
              {/* timer code goes here  */}
              <Timer />
          </div>
        </div>
      </div>
      
      </div>
    );
  }
}

export default App;
