import React, { Component } from 'react';
import './index.css';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Background from '../images/logo.png';



class App extends Component {

  render() {

    return (



      <div className="background">

          <Col xs={1}/>
          <Col xs={10} className="centeredContainer">
          <img src={ Background } alt="background" className="logoImage"/>
          <h1 className="header">PeerPulse</h1>
          <h4>The smarter way to share ideas</h4>
          <Button className="btn btn-primary" id="landingButton">
            <Link to="/home"><h2 className="header">get started</h2></Link>
          </Button>
        </Col>
        <Col xs={1}/>

      </div>
    );
  }
}

export default App;
