import React, { Component } from 'react';
import VoteTopic from './VoteTopic';

class VotePage extends Component {

  render() {
    return (
      <h2>{VoteTopic}</h2>
      <ul>
        <li>{Idea1}</li>
        <li>{Idea2}</li>
        <li>{Idea3}</li>
      </ul>
    )
  }
}

export default VotePage;
