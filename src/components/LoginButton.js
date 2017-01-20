import React, { Component } from 'react';

import { firebase } from '../utils/firebase';
import Button from 'muicss/lib/react/button';
import { Col } from 'react-bootstrap';
class LoginButton extends Component {
  handleClick(e) {
    e.preventDefault();

    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
      console.log('result', result);
    });
  }

  render() {
    return (
      <div>
      <Col xs={2}/>
      <Col xs={10}>
        <br/>
        <br/>
      <Button onClick={ this.handleClick.bind(this) }
        id="loginButton" className="landingButton centeredContainer">{ this.props.children }</Button>
      </Col>
    </div>
    )
  }
}

export default LoginButton;
