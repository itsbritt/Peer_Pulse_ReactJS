import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { firebase } from '../utils/firebase';
import IconButton from 'material-ui/IconButton';
class LogoutButton extends Component {
  handleClick(e) {
    e.preventDefault();

    firebase.auth().signOut();
    hashHistory.push('/');
  }

  render() {
    return (
      <div>

      <button
        onClick={ this.handleClick.bind(this) }
        id="noPadding" className="btn signOutColor">{ this.props.children }</button>

    </div>
    )
  }
}

export default LogoutButton;
