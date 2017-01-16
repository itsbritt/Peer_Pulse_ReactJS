import React, { Component } from 'react';
import './App.css';

import { Button, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Col xs={12} md={12}>
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </Col>
    );
  }
}

export default App;
