import React, { Component } from 'react';
import './index.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Background from '../images/logo.png';

import {firebase} from './utils/firebase';
import AddTopic from './components/AddTopic';

import Nav from './components/Nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {

    return (



      <div className="background">

          <Col xs={1}/>
          <Col xs={10} className="centeredContainer">
          <img src={ Background } className="logoImage"/>
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
