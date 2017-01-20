import React, { Component } from 'react';
import './index.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Background from '../images/logo.png';
import Button from 'muicss/lib/react/button';


class App extends Component {

  render() {

    return (



      <div className="background">

          <Col xs={1}/>
          <Col xs={10} className="centeredContainer">
          <img src={ Background } alt="background" className="logoImage"/>
          <h1 className="landingHeader">PeerPulse</h1>
          <h3>A smarter way to share ideas</h3>
          <Link to="/home">
          <Button className="landingButton" variant="raised" color="accent">
            <h2 className="header">get started</h2>
          </Button>
        </Link>
        </Col>
        <Col xs={1}/>

      </div>
    );
  }
}

export default App;
