
import React, { Component } from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Button, Col } from 'react-bootstrap';
import {firebase} from '../utils/firebase';
import { Link } from 'react-router';
import Topics from './Topics';
import Welcome from './Welcome';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }
//lifecycle method: if user is logged in, show user object, if not show empty object
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('Logged in:', user);
        this.setState({ user });
      } else {
        this.setState({ user: {} });
      }
    });
  }
//if someone is not logged in, show login..if not show logout button and name of person,
  sessionButton() {
    if (!firebase.auth().currentUser) {
      return <LoginButton>Log in with GitHub</LoginButton>;
    }
  }

  render() {
    const welcomeMessage = (firebase.auth().currentUser) ?
       `Hi ${this.state.user.displayName}!` :
      '';

    return (
      <div className="background">
      <Col xs={1}/>
      <Col xs={10} className="centeredContainer">
      <div>
        { this.sessionButton() }
        <h1 className="header">{ welcomeMessage }</h1>
      </div>
      <Button className="btn btn-primary" id="landingButton">
        <Link to="/add"><h2 className="header">new project</h2></Link>
      </Button>
      <Topics />
    </Col>
      <Col xs={1}/>
      <Welcome />
    </div>

    );
  }
}

export default Home;
