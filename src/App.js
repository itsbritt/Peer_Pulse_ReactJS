import React, { Component } from 'react';
import './index.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Background from '../images/newestloog.png';
import Button from 'muicss/lib/react/button';

<link rel="stylesheet" src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>


class App extends Component {
  render() {
    return (
      <div className="background">
          <Col xs={1} md={4} lg={4}/>
          <Col xs={10} md={4} lg={4} className="centeredContainer">
          <img src={ Background } alt="background" className="logoImage"/>
          <h1 id="landing-header" className="landingHeader">PeerPulse</h1>
          <h3>A smarter way to share ideas</h3>
          <Link to="/home">
          <Button id="landing-button" className="landingButton" variant="raised" color="accent">
            <h2 className="header">get started</h2>
          </Button>
        </Link>
        </Col>
      </div>
    );
  }
}

export default App;
