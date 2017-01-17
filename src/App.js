import React, { Component } from 'react';
import './App.css';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Home from './components/Home';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

import {firebase} from './utils/firebase';


class App extends Component {

  render() {

    return (
      <div className="background">
        <h1 className="header">Peer-Pulse</h1>
        <div>
          <Button>
            <Link to="/home"><h2>get started</h2></Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
