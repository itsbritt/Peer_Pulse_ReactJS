import React, { Component } from 'react';
import { Link } from 'react-router';
import Votes from './Votes';
import { Col } from 'react-bootstrap';

class Idea extends Component {



  render() {

    return (
      <div className="topicsDiv">

      <Col xs={9} className="ideaName">
          <h4 className="idea-title-header">{this.props.ideaObject}</h4>
    </Col>

    </div>
    );
  }
}

export default Idea;
