import React, { Component } from 'react';
import { Link } from 'react-router';
import Votes from './Votes';
import { Col } from 'react-bootstrap';

class Idea extends Component {



  render() {

    return (
      <div id="topicsDiv">
  
        <Votes />

      <Col xs={9}>
          <h4 className="topic-title">{this.props.ideaObject}</h4>
    </Col>
    </div>
    );
  }
}

export default Idea;
