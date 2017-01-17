import React, { Component } from 'react';

class Topic extends Component {
  render() {
    return (
      <div>
        <h3>{ this.props.topicObject.text }</h3>
      </div>
    )
  }
}

export default Topic;
