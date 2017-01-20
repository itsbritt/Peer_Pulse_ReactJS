
import React, { Component } from 'react';

import LoginButton from './LoginButton';
import { Col } from 'react-bootstrap';
import {firebase} from '../utils/firebase';
import { Link } from 'react-router';
import Topics from './Topics';
import SimpleMenu from './SimpleMenu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserPhoto from './UserPhoto';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from 'muicss/lib/react/button';
import IconButton from 'material-ui/IconButton';

// import Upvote from 'react-upvote';

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
      return <LoginButton id="loginButton">Log in with GitHub</LoginButton>;
    }
  }

  loggedIn(){
    const welcomeMessage = (firebase.auth().currentUser) ?
       `Hi ${this.state.user.displayName}!` :
      '';
    if (firebase.auth().currentUser){
      return<div>
      <div>
      <MuiThemeProvider>
        <SimpleMenu />
      </MuiThemeProvider>
      </div>
      <Col xs={1}/>
      <Col xs={10} className="centeredContainer">
      <div>
        { this.sessionButton() }
        <h1 className="header">{ welcomeMessage }</h1>
        <UserPhoto />
        <br/>
      </div>
<h2 id="noMargin">Your topics:</h2>
      <Scrollbars
      style={{ height: 250 }}>
      <div><Topics /></div>
      </Scrollbars>
      <Link to="/add">
      <Button className="landingButton" variant="raised">
        <h2 className="header">add topic</h2>
      </Button>
    </Link>
    </Col>
      <Col xs={1}/>

    </div>;

    } else {
      return <LoginButton>Log in with GitHub</LoginButton>;
    }

    }

  render() {


    return (
      <div>
      { this.loggedIn() }
</div>
    );
  }
}

export default Home;
