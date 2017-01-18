import React, { Component } from 'react';

class ClickedTopic extends Component {


  render() {
    // I want to get the topic with id of: this.props.params.id
    console.log('params::::',this.props.params.id)
    return (
      <div className="ClickedTopic">
        <div className="topicHeader">
        {this.props.params.id}
        </div>
      </div>
    );
  }
}

export default ClickedTopic;
