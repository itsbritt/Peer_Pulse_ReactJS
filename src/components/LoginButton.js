import React, { Component } from 'react';

import { firebase } from '../utils/firebase';

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
      <button onClick={ this.handleClick.bind(this) }
        className="btn">{ this.props.children }</button>
    )
  }
}

export default LoginButton;
