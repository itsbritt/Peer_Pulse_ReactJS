import React, { Component } from 'react';


class AddTopicButton extends Component {
  handleClick(e) {
    e.preventDefault();

  render() {
    return (
      <button onClick={ this.handleClick.bind(this) }
        className="btn">Add Topic</button>
    )
  }
}

export default AddTopicButton;
